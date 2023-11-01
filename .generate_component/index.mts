import camelCase from "camelcase";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import { createSpinner } from "nanospinner";

import { existsSync, mkdirSync, readdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";

import {
  createComponent,
  createFolder,
  createHook,
  createPage,
} from "./.create_component/index.mjs";

import { TGcConfig } from "../types";

const filename = fileURLToPath(import.meta.url);
const currentPath = dirname(filename);
const projectRoot = dirname(currentPath);

const config: TGcConfig = {
  parentDir: "",
  selectedDir: "",
  fileToGenerate: "",
  componentName: process.argv.slice(2)[0],
  suggestedName: "",
  isPage: false,
  nameAttempts: 0,
};

// ===============================
// Helpers
// ===============================
const sleep = async (ms = 1200) =>
  new Promise((r) => {
    setTimeout(r, ms);
  });

// changes string to have standard hook syntax (use___)
const toHookSyntax = (name: string[]) => {
  console.log("here");
  if (name[0] !== "use") return `use${camelCase(name, { pascalCase: true })}`;
  return camelCase(name);
};

export const isUpperCase = (str: string) => /^[A-Z]/.test(str.trim());

const isLowerCase = (str: string) => /^[a-z]/.test(str.trim());

const hasSpaces = (str: string) => /\s/g.test(str);

// tests to see if user chosen name conforms to desired naming conventions
const shouldSuggestName = (name: string) => {
  if (config.fileToGenerate === "Hook") {
    // tests if hook name starts with use and is pascal case after the use
    if (name.substring(0, 3) !== "use" || name !== camelCase(name.split(" "))) {
      return true;
    }
    return false;
  }

  if (config.isPage) {
    // if is a page component and either first letter is capitalized or there are spaces
    return isUpperCase(name) || hasSpaces(name);
  }

  // for non-page components, test for lower case first letter and spaces
  return isLowerCase(name) || hasSpaces(name);
};

const formatSuggestedName = (name: string) => {
  const nameSplit = name.trim().split(" ");
  if (config.fileToGenerate === "Hook") return toHookSyntax(nameSplit);
  if (config.isPage) return camelCase(nameSplit);
  return camelCase(nameSplit, { pascalCase: true });
};

// TODO: type this
const flatten = (lists: any) =>
  lists.reduce((a: any, b: any) => a.concat(b), []);

const getDirectories = (source: string) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => `${source}/${dirent.name}`);

const getDirectoriesRecursive = (srcPath: string): string[] => [
  srcPath,
  ...flatten(getDirectories(srcPath).map(getDirectoriesRecursive)),
];

const removeFileOptions = (paths: string[], strToRemove: string) =>
  paths.reduce((acc: string[] = [], path) => {
    const splitPath = path.split("/");
    // remove api directory from
    if (splitPath?.[1] === strToRemove) return acc;
    acc.push(path);
    return acc;
  }, []);

// ===============================
// Welcome
// ===============================

const welcome = async () => {
  console.clear();
  const msg = "Generate \n Component";
  figlet(msg, { font: "Small Slant" }, (_err, data) => {
    console.log(gradient.pastel.multiline(data));
  });

  await sleep();
  console.clear();
};

// ===============================
// Selecting directories
// ===============================
const mkdirIfNone = async (srcPath: string) => {
  if (!existsSync(srcPath)) {
    mkdirSync(srcPath, { recursive: true });
  }
};

const checkIsPage = async () => {
  console.clear();
  const { fileToGenerate } = await inquirer.prompt({
    name: "fileToGenerate",
    type: "list",
    message: `What would you like to create?`,
    choices: ["Next.js Component", "Next.js Page", "Hook"],
  });

  if (fileToGenerate === "Next.js Page") {
    config.isPage = true;
  }
  config.fileToGenerate = fileToGenerate;
};

const assignParentDir = async () => {
  // assigns a parent directory based on what user wants to generate
  if (config.isPage) {
    config.parentDir = "app";
    return;
  }

  if (config.fileToGenerate === "Hook") {
    config.parentDir = "hooks";
    return;
  }

  config.parentDir = "components";

  await mkdirIfNone(config.parentDir);
};

const selectDir = async () => {
  // for hooks, don't allow user to make a subdirectory
  if (config.fileToGenerate === "Hook") {
    config.selectedDir = config.parentDir;
    return;
  }

  console.clear();
  let directories = getDirectoriesRecursive(config.parentDir);

  // hide api directories if page is chosen
  if (config.isPage) {
    directories = removeFileOptions(directories, "api");
  }

  const { selectedDir } = await inquirer.prompt({
    name: "selectedDir",
    type: "list",
    message: `From the ${chalk.bold.magenta(
      `parent directory, ${config.parentDir}`
    )}, ${chalk.bold.cyan("where do you want the component to go?")}`,
    choices: directories,
    default() {
      return directories[0];
    },
  });

  config.selectedDir = selectedDir;
};

//==========================================
// Naming
//==========================================

const suggestName = async () => {
  const message =
    config.fileToGenerate === "Hook"
      ? `${chalk.bold.red(
          config.componentName
        )} needs to adhere to React naming conventions for hooks. How about ${chalk.bold.yellowBright(
          config.suggestedName
        )} instead?`
      : `${chalk.bold.red(
          config.componentName
        )} may not the best name for a component. Would you like to try ${chalk.bold.yellowBright(
          config.suggestedName
        )} instead?`;

  console.clear();
  const { selectedName } = await inquirer.prompt({
    name: "selectedName",
    type: "list",
    message,
    choices: [config.suggestedName, config.componentName],
    default() {
      return config.suggestedName;
    },
  });

  if (config.suggestedName === selectedName) {
    config.componentName = config.suggestedName;
  }
};

const checkAndSuggestName = async (name: string) => {
  if (shouldSuggestName(name)) {
    config.suggestedName = formatSuggestedName(name);
    await suggestName();
  }
};

const handleComponentName = async (name: string) => {
  config.componentName = name.trim();
  if (name) return await checkAndSuggestName(name);
  config.nameAttempts += 1;
  await getComponentName();
};

const getComponentName = async () => {
  console.clear();
  const { componentName } = await inquirer.prompt({
    name: "componentName",
    type: "input",
    message: `What should the ${chalk.bold.greenBright("component name")} be? ${
      config.nameAttempts ? "(Please enter a valid name)" : ""
    }`,
    default: config.componentName,
  });

  await handleComponentName(componentName);
};

const handleRestart = async () => {
  const { selectedRestart: option } = await inquirer.prompt({
    name: "selectedRestart",
    type: "list",
    message: "What would you like to do?",
    choices: ["Restart", "Change component name", "Quit"],
    default() {
      return "Change component name";
    },
  });

  if (option === "Restart") {
    // do thing to restart
    return runScript(1);
  }

  if (option === "Change component name") {
    // go to change component name
    return runScript();
  }

  return process.exit();
};

//==========================================
// Verification
//==========================================

const handleVerify = async (isOk: string) => {
  console.clear();
  const spinner = createSpinner(
    `Generating ${chalk.bold.greenBright(
      config.componentName
    )} in ${chalk.bold.cyan(config.selectedDir)}...`
  ).start();

  const path = `${config.selectedDir}/${config.componentName}`;

  if (isOk && !existsSync(path)) {
    createFolder(path);
    const { componentName, isPage, selectedDir } = config;

    if (isPage) {
      createPage({ path, name: componentName });
    } else if (config.fileToGenerate === "Hook") {
      createHook({ path, name: componentName });
    } else {
      createComponent({
        path,
        name: componentName,
      });
    }

    await sleep(3000);

    spinner.success({
      text: `${projectRoot.replace(
        config.parentDir,
        ""
      )}${selectedDir}/${componentName}`,
    });

    const success = chalkAnimation.rainbow(
      "Congratulations! You just made a new component!"
    );

    await sleep();

    return success.stop();
  }

  if (existsSync(path)) {
    spinner.error({ text: "A component with that name already exists" });
    return handleRestart();
  }
  spinner.error({ text: "You noticed that something was a little off..." });
  return handleRestart();
};

const verify = async () => {
  console.clear();
  const { componentName, selectedDir } = config;
  const { isOk } = await inquirer.prompt({
    name: "isOk",
    type: "confirm",
    message: `Your ${chalk.bold.greenBright(
      componentName
    )} component will be generated in ${chalk.bold.cyan(
      selectedDir
    )}, does that sound right?`,
  });

  handleVerify(isOk);
};

//==========================================
// The script itself
//==========================================

const runScript = async (step?: number) => {
  if (step === 0) {
    await welcome();
  }

  if (step === 0 || step === 1) {
    await checkIsPage();
    await assignParentDir();
    await selectDir();
  }

  await getComponentName();
  return await verify();
};

runScript(0);

export default runScript;
