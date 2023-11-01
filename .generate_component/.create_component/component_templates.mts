import camelCase from "camelcase";
import { isUpperCase } from "../index.mjs";

const nameToClass = (name: string) =>
  name
    .split("")
    .map((letter, i) => {
      const isFirst = i === 0;
      const localLetter = letter.toLowerCase();
      return isUpperCase(letter) && !isFirst ? `-${localLetter}` : localLetter;
    })
    .join("");

const toPascalCase = (name: string) =>
  camelCase(name, {
    pascalCase: true,
  });

// component.tsx
export const component = (name: string) => `// Packages
import React from "react";

// Hooks

// Components

// Utils

// Styles
import styles from "./${camelCase(name)}.module.scss";

export type T${toPascalCase(name)}Props = {
/** Optional custom css class */
  className?: string;
}

/** Update this description of component itself/what it does */

const ${name} = ({ className = "" }: T${toPascalCase(name)}Props) => {
//==================================
// State/Hooks/Refs
//==================================

//==================================
// Helpers (Memo, CB, vars)
//==================================

//==================================
// Interaction Handlers
//==================================

//==================================
// Effects
//==================================

//==================================
// Early return
//==================================

//==================================
// Final return
//==================================

return (
  <div className={styles["${nameToClass(name)}"]}>
    Hi, I'm a ${name} component.
  </div>
  )
};

export default ${name};
`;

export const page = (name: string) => `// Packages
import React from "react";

// Hooks

// Components

// Utils

// Styles
import styles from "./${camelCase(name)}.module.scss";


/** Update this description of this page */

const ${toPascalCase(name)} = () => {
//==================================
// State/Hooks/Refs
//==================================

//==================================
// Helpers (Memo, CB, vars)
//==================================

//==================================
// Interaction Handlers
//==================================

//==================================
// Effects
//==================================

//==================================
// Early return
//==================================

//==================================
// Final return
//==================================

return (
  <div className={styles["${nameToClass(name)}"]}>
    <h1>${name}</h1>
    <p>Hello, I am the ${name} page.</p>
  </div>
  )
};

export default ${toPascalCase(name)};
`;

// component.module.scss
export const style = (name: string) => `.${nameToClass(name)} {}`;

// useNewHook
export const hook = (name: string) => `
import React from "react";

// Hooks

// Components

// Utils


/** Update this description of hook/ say what it does */

const ${name} = () => {
//==================================
// State/Hooks/Refs
//==================================

//==================================
// Helpers (Memo, CB, vars)
//==================================

//==================================
// Effects
//==================================


return {}
};

export default ${name};
`;
