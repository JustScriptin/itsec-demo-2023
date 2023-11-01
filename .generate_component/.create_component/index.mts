import camelCase from "camelcase";
import { writeFileSync, readFileSync, existsSync, mkdirSync } from "fs";
import { component, hook, page, style } from "./component_templates.mjs";

type TPathAndName = {
  path: string;
  name: string;
};

const createFolder = (dir: string) => {
  if (existsSync(dir))
    throw new Error("A component with that name already exists.");

  mkdirSync(dir);
};

const getParentPath = (path: string, name: string) => {
  const nameRegex = new RegExp(name, "g");
  return path.replace(nameRegex, "");
};

const parentIndexData = (path: string, name: string) => {
  const parentPath = getParentPath(path, name);

  if (!existsSync(`${parentPath}index.ts`)) {
    return "";
  }

  return readFileSync(`${parentPath}index.ts`, "utf8");
};

const updateParentIndex = (path: string, name: string) => {
  const indexData = parentIndexData(path, name);
  // get all components and combine them with the new component
  const currentComponents =
    indexData.match(/(?<=import )(.*?)(?= from)/g) || [];

  const newComponents = [name, ...currentComponents].sort();

  // create the import and export statements
  const importStatements = newComponents
    .map(
      (componentName) =>
        `import ${componentName} from './${componentName}/${componentName}';\n`
    )
    .join("");

  const exportStatements = `export {\n${newComponents
    .map((componentName) => ` ${componentName},\n`)
    .join("")}}\n`;

  const fileContent = `${importStatements}\n${exportStatements}`;

  return fileContent;
};

const createComponent = ({ path, name }: TPathAndName) => {
  const parentPath = getParentPath(path, name);
  try {
    // write component.tsx
    writeFileSync(`${path}/${name}.tsx`, component(name));
    // write style module
    writeFileSync(`${path}/${camelCase(name)}.module.scss`, style(name));
    // insert new component into parent index.ts file
    writeFileSync(`${parentPath}index.ts`, updateParentIndex(path, name));
  } catch (error) {
    if (error) throw error;
  }
};

const createPage = ({ path, name }: TPathAndName) => {
  try {
    // write component.tsx
    writeFileSync(`${path}/page.tsx`, page(name));
    // write style module
    writeFileSync(`${path}/${name}.module.scss`, style(name));
  } catch (error) {
    if (error) throw error;
  }
};

const createHook = ({ path, name }: TPathAndName) => {
  const parentPath = getParentPath(path, name);
  try {
    // write hook.tsx
    writeFileSync(`${path}/${name}.tsx`, hook(name));

    // insert new component into parent index.ts file
    writeFileSync(`${parentPath}index.ts`, updateParentIndex(path, name));
  } catch (error) {
    if (error) throw error;
  }
};

export { createComponent, createFolder, createPage, createHook };
