// export const schemaUpdater = (ui) => {};

import { OverlayTrigger, Tooltip } from "react-bootstrap";

// repeatable + defining word combos. Level 1 prompts
let ultimateEffeciencyJutsu = (key) => {
  let map = {
    [`Lesson 1`]: `coding and computer logic`,
    [`Lesson 2`]: `sets of data and functions in computer programming`,
    [`Lesson 3`]: `object oriented programming and CRUD applications`,
    [`Lesson 4`]: `HTTP methods`,
    [`Lesson 5`]: `computer programming loops`,
    [`Lesson 6`]: `HTML`,
    [`Lesson 7`]: `CSS`,
    [`Lesson 8`]: `React programming`,
    [`Lesson 9`]: `oauth`,
    [`Lesson 10`]: `database design`,
    [`Lesson 11`]: `backend software engineering`,
    [`Lesson 12`]: `computer operating systems`,
    [`Lesson 13`]: `command line interfaces`,
    [`Lesson 14`]: `APIs`, // wow this one is crazy in commonElements.ts lol
    [`Lesson 15`]: `Firebase`,
    [`Lesson 16`]: `Git and Github`,
  };
  return map[key];
};
//source of truth for views

// ui[path][collection][module]{...}
// ui['coding']['projects & experience']['indocumentadofy']{...}

interface IPrompt {
  // has the user selected? when database is passed into ui()
  completed: boolean;

  //value set
  work: number;

  //additional context
  tooltip: string | JSX.Element;

  //prompt display text
  action: string;

  // prompt display icon
  icon: string;

  // data sent to chat GPT
  request: string;

  // data returned by chat GPT
  response: string | JSX.Element;

  // spanish translation/stoggle/
  spanish?: string | boolean;
}

interface IModule {
  // internal preference
  filler: string;

  // markdown or video for patreon content
  sourceType: string;

  // button to enter module
  button: string;

  // title header
  header: string;

  // video or .markdown fies
  fileSource: any;

  // developer release flag
  new: boolean;

  // developer flag again
  needsImprovement: boolean;

  // rare find
  highValue: boolean;

  // is there something the developers are disabling?
  incomplete: boolean;

  // has the user completed the module? When database is passed into ui(...)
  completed: boolean;

  // tool tip to add more UI on tags
  tooltip: string;
  prompts: {
    //3 point low-stakes challenger quiz
    quiz: IPrompt;

    //Frequently Asked Questions
    ask: IPrompt;

    //inspiration material
    inspire: IPrompt;

    //one sentence definition
    define: IPrompt;

    // summarize concept
    summarize: IPrompt;

    // code example or some other demo type
    demonstrate: IPrompt;

    // 10 bullet point study guide
    guide: IPrompt;

    // patreon first content (videos+canva)
    patreon: IPrompt;

    // advertising agreements with patrons
    market: IPrompt;
  };
}

interface ICollection {
  [index: string]: Record<string, IModule>;
}
interface IPath {
  Engineer: ICollection;
  Creator: ICollection;
  Business: ICollection;
  "26th Street": ICollection;
}

// be pro customization. Redundancy is fine if it allows for more customization.
// start uniform. Adjust ChatGPT settings in sandbox and adjust UX here.
export const ui = (): IPath => {
  return {
    Engineer: {
      "Crash Course": {
        "Lesson 1": {
          filler: ``,
          new: false,
          highValue: true,
          incomplete: false,
          completed: false,
          needsImprovement: false,
          tooltip: ``,
          sourceType: `video`, // may not need
          button: `Foundations: Coding & Logic`, // may not need - `name`
          header: `Foundations: Coding & Logic`,
          fileSource: `https://res.cloudinary.com/eduprojectsil/video/upload/v1674220062/download_4_xnineu.mp4`, // may not need

          prompts: {
            patreon: {
              completed: false,
              work: 1000,
              action: `generate`,
              icon: `►`, //`✍️`
              request: `ms. roxana, can you please generate a video that covers ${ultimateEffeciencyJutsu(
                `Lesson 1`
              )}?`,
              response: `null`,
              spanish: ``,
              tooltip: ``,
            },
            inspire: {
              completed: false,
              work: 100,
              action: `inspire`,
              icon: `⚡`,
              request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(
                `Lesson 1`
              )}?`,
              response: `\n\nOne inspiring story about coding and logic is the story of Ada Lovelace. Ada Lovelace was a mathematician and writer in the 1800s who is widely considered to be the first computer programmer. She wrote the first algorithm for a machine that could calculate Bernoulli numbers, and her work laid the foundation for modern computing. Her story is inspiring because it shows that women have been making important contributions to the field of computer science for centuries.`,
              spanish: ``,
              tooltip: ``,
            },
            summarize: {
              completed: false,
              work: 100,
              action: `summarize`,
              icon: `📚`,
              request: `ms. roxana, can you please summarize the basics of ${ultimateEffeciencyJutsu(
                `Lesson 1`
              )}?`,
              response: `\n\nCoding is the process of writing instructions in a programming language to create a program that can be executed by a computer. Computer logic is the set of rules and principles that govern the operation of a computer system. It is the basis for the design of algorithms and the development of software.`,
              spanish: ``,
              tooltip: ``,
            },
            ask: {
              completed: false,
              work: 100,
              action: `ask`,
              icon: `🔮`,
              request: `ms. roxana, can you please show me three frequently asked beginner questions about ${ultimateEffeciencyJutsu(
                `Lesson 1`
              )} with one sentence answers?`,
              response: `\n\n1. What is coding? - Coding is the process of creating instructions for a computer to execute.\n2. What is logic? - Logic is the process of reasoning and making decisions based on facts and evidence.\n3. What is a programming language? - A programming language is a set of instructions that can be used to create a program.`,
              spanish: ``,
              tooltip: ``,
            },
            guide: {
              completed: false,
              work: 100,
              action: `guide`,
              icon: `🤝`,
              request: `ms. roxana, can you please create a study guide for ${ultimateEffeciencyJutsu(
                `Lesson 1`
              )} with 10 bullet points?`,
              response: `\n\n1. Understand the fundamentals of coding and computer logic\n2. Learn the basics of programming languages such as HTML, CSS, JavaScript, and Python\n3. Familiarize yourself with the different types of data structures and algorithms\n4. Understand the principles of object-oriented programming\n5. Learn how to debug and troubleshoot code\n6. Develop an understanding of the principles of software engineering\n7. Learn how to use version control systems such as Git\n8. Understand the basics of databases and SQL\n9. Develop an understanding of web development frameworks such as React and Angular\n10. Learn how to use development tools such as IDEs and text editors`,
              spanish: ``,
              tooltip: ``,
            },
            demonstrate: {
              completed: false,
              work: 100,
              action: `demonstrate`,
              icon: `🧿`,
              request: `ms. roxana, can you please show me an example of ${ultimateEffeciencyJutsu(
                `Lesson 1`
              )} with no other text in javascript?`,
              response:
                "// Example of basic coding logic in JavaScript\nlet x = 5;\nlet y = 10;\n\nif (x < y) {\n  console.log(`x is less than y`);\n} else {\n  console.log(`x is greater than or equal to y`);\n}",
              spanish: ``,
              tooltip: ``,
            },
            define: {
              completed: false,
              work: 100,
              action: `define`, // may not need
              icon: `👾`, // may not need
              request: `ms. roxana, can you please define ${ultimateEffeciencyJutsu(
                `Lesson 1`
              )} in exactly one sentence?`,
              response: `\n\nCoding is the process of creating instructions for a computer to execute, while computer logic is the process of using algorithms to solve problems.`,
              spanish: ``,
              tooltip: ``,
            },

            quiz: {
              completed: false,
              work: 100,
              action: `quiz`,
              icon: `🧪`,
              request: `ms. roxana, can you please write a 3 question quiz for beginners that's challenging about ${ultimateEffeciencyJutsu(
                `Lesson 1`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            market: {
              completed: false,
              work: 100,
              action: `market`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
      },
      "Get Experience": {},
    },
    Creator: {},
    Business: {},
    "26th Street": {},
  };
};
export let uiPaths = Object.keys(ui());

// this manages the view when selected `engineer, creator, business or 26th street`
export let controlPathVisibilityMap = (visibilityMap, selectedPath) => {
  let result = visibilityMap;
  uiPaths.forEach((path) => {
    result[path] = false;
  });
  result[selectedPath] = true;
  return result;
};

export let renderWithTooltip = (
  element: any,
  tooltip: any,
  renderingDirection: any,
  style: any
) => {
  return (
    <OverlayTrigger
      placement={renderingDirection}
      overlay={<Tooltip style={style}>{tooltip}</Tooltip>}
    >
      {element}
    </OverlayTrigger>
  );
};
