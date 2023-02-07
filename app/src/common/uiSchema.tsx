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
    [`Cloud Investing`]: `command line interfaces`,
    [`Lesson 14`]: `APIs`, // wow this one is crazy in commonElements.ts lol
    [`Lesson 15`]: `Firebase`,
    [`Lesson 16`]: `Git and Github`,
  };
  return map[key] || "null";
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
  underConstruction: boolean;

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
    shop: IPrompt;
  };
}

interface ICollection {
  [index: string]: Record<string, IModule>;
}
interface IPath {
  Engineer: ICollection;
  Creator: ICollection;
  Entrepeneur: ICollection;
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
          underConstruction: false,
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
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 2": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 2`
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
                `Lesson 2`
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
                `Lesson 2`
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
                `Lesson 2`
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
                `Lesson 2`
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
                `Lesson 2`
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
                `Lesson 2`
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
                `Lesson 2`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 3": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 3`
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
                3
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
                `Lesson 3`
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
                `Lesson 3`
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
                `Lesson 3`
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
                `Lesson 3`
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
                `Lesson 3`
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
                `Lesson 3`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 4": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 4`
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
                `Lesson 4`
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
                `Lesson 4`
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
                `Lesson 4`
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
                `Lesson 4`
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
                `Lesson 4`
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
                `Lesson 4`
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
                `Lesson 4`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 5": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 5`
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
                `Lesson 5`
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
                `Lesson 5`
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
                `Lesson 5`
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
                `Lesson 5`
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
                `Lesson 5`
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
                `Lesson 5`
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
                `Lesson 5`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 6": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 6`
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
                `Lesson 6`
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
                `Lesson 6`
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
                `Lesson 6`
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
                `Lesson 6`
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
                `Lesson 6`
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
                `Lesson 6`
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
                `Lesson 6`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 7": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 7`
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
                `Lesson 7`
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
                `Lesson 7`
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
                `Lesson 7`
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
                `Lesson 7`
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
                `Lesson 7`
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
                `Lesson 7`
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
                `Lesson 7`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 8": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 8`
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
                `Lesson 8`
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
                `Lesson 8`
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
                `Lesson 8`
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
                `Lesson 8`
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
                `Lesson 8`
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
                `Lesson 8`
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
                `Lesson 8`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 9": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 9`
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
                `Lesson 9`
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
                `Lesson 9`
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
                `Lesson 9`
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
                `Lesson 9`
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
                `Lesson 9`
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
                `Lesson 9`
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
                `Lesson 9`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 10": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 10`
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
                `Lesson 10`
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
                `Lesson 10`
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
                `Lesson 10`
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
                `Lesson 10`
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
                `Lesson 10`
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
                `Lesson 10`
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
                `Lesson 10`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 11": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 11`
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
                `Lesson 11`
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
                `Lesson 11`
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
                `Lesson 11`
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
                `Lesson 11`
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
                `Lesson 11`
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
                `Lesson 11`
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
                `Lesson 11`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 12": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 12`
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
                `Lesson 12`
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
                `Lesson 12`
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
                `Lesson 12`
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
                `Lesson 12`
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
                `Lesson 12`
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
                `Lesson 12`
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
                `Lesson 12`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 13": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 13`
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
                `Lesson 13`
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
                `Lesson 13`
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
                `Lesson 13`
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
                `Lesson 13`
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
                `Lesson 13`
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
                `Lesson 13`
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
                `Lesson 13`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 14": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 14`
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
                `Cloud Investing`
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
                `Lesson 14`
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
                `Lesson 14`
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
                `Lesson 14`
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
                `Lesson 14`
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
                `Lesson 14`
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
                `Lesson 14`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 15": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 15`
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
                `Lesson 15`
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
                `Lesson 15`
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
                `Lesson 15`
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
                `Lesson 15`
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
                `Lesson 15`
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
                `Lesson 15`
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
                `Lesson 15`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Lesson 16": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lesson 16`
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
                `Lesson 16`
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
                `Lesson 16`
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
                `Lesson 16`
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
                `Lesson 16`
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
                `Lesson 16`
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
                `Lesson 16`
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
                `Lesson 16`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
      },
      "Get Experience": {
        "Build For Undocumented": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Build For Undocumented`
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
                `Build For Undocumented`
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
                `Build For Undocumented`
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
                `Build For Undocumented`
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
                `Build For Undocumented`
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
                `Build For Undocumented`
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
                `Build For Undocumented`
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
                `Build For Undocumented`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Build For Community": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Build For Community`
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
                `Build For Community`
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
                `Build For Community`
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
                `Build For Community`
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
                `Build For Community`
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
                `Build For Community`
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
                `Build For Community`
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
                `Build For Community`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Build For Teachers": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Build For Teachers`
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
                `Build For Teachers`
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
                `Build For Teachers`
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
                `Build For Teachers`
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
                `Build For Teachers`
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
                `Build For Teachers`
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
                `Build For Teachers`
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
                `Build For Teachers`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Chat App": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Chat App`
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
                `Chat App`
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
                `Chat App`
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
                `Chat App`
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
                `Chat App`
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
                `Chat App`
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
                `Chat App`
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
                `Chat App`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
      },
      "Technical Interview Foundations": {
        "Programming Languages": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Programming Languages`
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
                `Programming Languages`
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
                `Programming Languages`
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
                `Programming Languages`
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
                `Programming Languages`
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
                `Programming Languages`
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
                `Programming Languages`
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
                `Programming Languages`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        Recursion: {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Recursion`
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
                `Recursion`
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
                `Recursion`
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
                `Recursion`
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
                `Recursion`
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
                `Recursion`
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
                `Recursion`
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
                `Recursion`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Linked Lists": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Linked Lists`
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
                `Recursion`
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
                `Linked Lists`
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
                `Linked Lists`
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
                `Linked Lists`
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
                `Linked Lists`
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
                `Linked Lists`
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
                `Linked Lists`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Link Travel": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Link Travel`
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
                `Link Travel`
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
                `Link Travel`
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
                `Link Travel`
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
                `Link Travel`
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
                `Link Travel`
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
                `Link Travel`
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
                `Link Travel`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Link Changing": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Link Changing`
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
                `Link Changing`
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
                `Link Changing`
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
                `Link Changing`
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
                `Link Changing`
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
                `Link Changing`
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
                `Link Changing`
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
                `Link Changing`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        Algorithms: {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Algorithms`
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
                `Algorithms`
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
                `Algorithms`
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
                `Algorithms`
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
                `Algorithms`
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
                `Algorithms`
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
                `Algorithms`
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
                `Algorithms`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
      },
    },
    Creator: {
      "Lessons Learned & Insights": {
        "Content Review": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Lessons Learned & Insights`
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
                `Lessons Learned & Insights`
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
                `Lessons Learned & Insights`
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
                `Lessons Learned & Insights`
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
                `Lessons Learned & Insights`
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
                `Lessons Learned & Insights`
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
                `Lessons Learned & Insights`
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
                `Lessons Learned & Insights`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "UI/UX": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `UI/UX`
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
                `UI/UX`
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
                `UI/UX`
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
                `UI/UX`
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
                `UI/UX`
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
                `UI/UX`
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
                `UI/UX`
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
                `UI/UX`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Influence & Expression": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Influence & Expression`
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
                `Influence & Expression`
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
                `Influence & Expression`
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
                `Influence & Expression`
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
                `Influence & Expression`
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
                `Influence & Expression`
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
                `Influence & Expression`
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
                `Influence & Expression`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Creating Purpose": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Creating Purpose`
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
                `Creating Purpose`
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
                `Creating Purpose`
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
                `Creating Purpose`
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
                `Creating Purpose`
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
                `Creating Purpose`
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
                `Creating Purpose`
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
                `Creating Purpose`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Abraham Lincoln": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Abraham Lincoln`
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
                `Abraham Lincoln`
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
                `Abraham Lincoln`
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
                `Abraham Lincoln`
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
                `Abraham Lincoln`
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
                `Abraham Lincoln`
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
                `Abraham Lincoln`
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
                `Abraham Lincoln`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        Philosophy: {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Philosophy`
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
                `Philosophy`
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
                `Philosophy`
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
                `Philosophy`
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
                `Philosophy`
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
                `Philosophy`
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
                `Philosophy`
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
                `Philosophy`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
      },
    },
    Entrepeneur: {
      "Understanding Businsess": {
        "Bitcoin, Automa & the Drug War": {
          filler: ``,
          new: false,
          highValue: true,
          underConstruction: false,
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
                `Bitcoin, Automa & the Drug War`
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
                `Bitcoin, Automa & the Drug War`
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
                `Bitcoin, Automa & the Drug War`
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
                `Bitcoin, Automa & the Drug War`
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
                `Bitcoin, Automa & the Drug War`
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
                `Bitcoin, Automa & the Drug War`
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
                `Bitcoin, Automa & the Drug War`
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
                `Bitcoin, Automa & the Drug War`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Bitcoin x Social Technology": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Bitcoin x Social Technology`
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
                `Bitcoin x Social Technology`
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
                `Bitcoin x Social Technology`
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
                `Bitcoin x Social Technology`
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
                `Bitcoin x Social Technology`
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
                `Bitcoin x Social Technology`
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
                `Bitcoin x Social Technology`
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
                `Bitcoin x Social Technology`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Tech Recession Investing": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Tech Recession Investing`
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
              request: `ms. roxana, can you please share an inspiring story about ${ultimateEffeciencyJutsu(`Tech Recession Investing`
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
                `Tech Recession Investing`
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
                `Tech Recession Investing`
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
                `Tech Recession Investing`
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
                `Tech Recession Investing`
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
                `Tech Recession Investing`
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
                `Tech Recession Investing`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Tech Recession Investing x Real Estate II": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Tech Recession Investing x Real Estate II`
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
                `Tech Recession Investing x Real Estate II`
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
                `Tech Recession Investing x Real Estate II`
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
                `Tech Recession Investing x Real Estate II`
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
                `Tech Recession Investing x Real Estate II`
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
                `Tech Recession Investing x Real Estate II`
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
                `Tech Recession Investing x Real Estate II`
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
                `Tech Recession Investing x Real Estate II`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Tech Recession Investing x Real Estate III": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Tech Recession Investing x Real Estate III`
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
                `Tech Recession Investing x Real Estate III`
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
                `Tech Recession Investing x Real Estate III`
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
                `Tech Recession Investing x Real Estate III`
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
                `Tech Recession Investing x Real Estate III`
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
                `Tech Recession Investing x Real Estate III`
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
                `Tech Recession Investing x Real Estate III`
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
                `Tech Recession Investing x Real Estate III`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Learn Coding": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Learn Coding`
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
                `Learn Coding`
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
                `Learn Coding`
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
                `Learn Coding`
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
                `Learn Coding`
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
                `Learn Coding`
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
                `Learn Coding`
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
                `Learn Coding`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Creating Competitive Entry Level Resumes": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Creating Competitive Entry Level Resumes`
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
                `Creating Competitive Entry Level Resumes`
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
                `Creating Competitive Entry Level Resumes`
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
                `Creating Competitive Entry Level Resumes`
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
                `Creating Competitive Entry Level Resumes`
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
                `Creating Competitive Entry Level Resumes`
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
                `Creating Competitive Entry Level Resumes`
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
                `Creating Competitive Entry Level Resumes`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Options Trading Advice": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Options Trading Advice`
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
                `Options Trading Advice`
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
                `Options Trading Advice`
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
                `Options Trading Advice`
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
                `Options Trading Advice`
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
                `Options Trading Advice`
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
                `Options Trading Advice`
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
                `Options Trading Advice`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Financial Technology Investing": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Financial Technology Investing`
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
                `Financial Technology Investing`
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
                `Financial Technology Investing`
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
                `Financial Technology Investing`
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
                `Financial Technology Investing`
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
                `Financial Technology Investing`
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
                `Financial Technology Investing`
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
                `Financial Technology Investing`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Social Media Investing": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Social Media Investing`
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
                `Social Media Investing`
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
                `Social Media Investing`
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
                `Social Media Investing`
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
                `Social Media Investing`
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
                `Social Media Investing`
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
                `Social Media Investing`
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
                `Social Media Investing`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Metaverse Investing": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Metaverse Investing`
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
                `Metaverse Investing`
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
                `Metaverse Investing`
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
                `Metaverse Investing`
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
                `Metaverse Investing`
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
                `Metaverse Investing`
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
                `Metaverse Investing`
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
                `Metaverse Investing`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Mexican-American Trade Investing": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Mexican-American Trade Investing`
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
                `Mexican-American Trade Investing`
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
                `Mexican-American Trade Investing`
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
                `Mexican-American Trade Investing`
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
                `Mexican-American Trade Investing`
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
                `Mexican-American Trade Investing`
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
                `Mexican-American Trade Investing`
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
                `Mexican-American Trade Investing`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Infrastructure Investing": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Infrastructure Investing`
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
                `Infrastructure Investing`
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
                `Infrastructure Investing`
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
                `Infrastructure Investing`
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
                `Infrastructure Investing`
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
                `Infrastructure Investing`
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
                `Infrastructure Investing`
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
                `Infrastructure Investing`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
        "Cloud Investing": {
          filler: ``,
          new: false,
          highValue: false,
          underConstruction: true,
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
                `Cloud Investing`
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
                `Cloud Investing`
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
                `Cloud Investing`
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
                `Cloud Investing`
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
                `Cloud Investing`
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
                `Cloud Investing`
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
                `Cloud Investing`
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
                `Cloud Investing`
              )}?`,
              response: `\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?`,
              spanish: ``,
              tooltip: ``,
            },
            shop: {
              completed: false,
              work: 100,
              action: `shop`,
              icon: `🛍️`,
              request: `Alright bro, show me what you got. I wanna shop and support this network more.`,
              response: `Excellent! Take a look at our sponsors that supports the growth at Robots Building Education here: TBD`,
              spanish: ``,
              tooltip: ``,
            },
          },
        },
      },
    },
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
