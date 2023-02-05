// export const schemaUpdater = (ui) => {};

//source of truth for views

// ui[path][collection][module]{...}
// ui['coding']['projects & experience']['indocumentadofy']{...}

interface IPrompt {
  action: string;
  icon: string;
  request: string;
  response: string | JSX.Element;
  spanish?: string;
}

interface IModule {
  filler: string;
  sourceType: string;
  button: string;
  header: string;
  fileSource: any;
  prompts: {
    quiz: IPrompt;
    ask: IPrompt;
    inspire: IPrompt;
    define: IPrompt;
    summarize: IPrompt;
    demonstrate: IPrompt;
    guide: IPrompt;
    patreon: IPrompt;
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
export const ui: IPath = {
  Engineer: {
    "Crash Course": {
      "Lesson 1": {
        filler: "",
        sourceType: "video", // may not need
        button: "Foundations: Coding & Logic", // may not need - "name"
        header: "Foundations: Coding & Logic",
        fileSource:
          "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220062/download_4_xnineu.mp4", // may not need

        prompts: {
          patreon: {
            action: "Patreon video",
            icon: "►",
            request:
              "ms. roxana, can you please generate a video about coding and logic?",
            response: "null",
            spanish: "",
          },
          inspire: {
            action: "inspire",
            icon: "⚡",
            request: "",
            response:
              "\n\nOne inspiring story about coding and logic is the story of Ada Lovelace. Ada Lovelace was a mathematician and writer in the 1800s who is widely considered to be the first computer programmer. She wrote the first algorithm for a machine that could calculate Bernoulli numbers, and her work laid the foundation for modern computing. Her story is inspiring because it shows that women have been making important contributions to the field of computer science for centuries.",
            spanish: "",
          },
          summarize: {
            action: "summarize",
            icon: "📚",
            request: "",
            response:
              "\n\nCoding is the process of writing instructions in a programming language to create a program that can be executed by a computer. Computer logic is the set of rules and principles that govern the operation of a computer system. It is the basis for the design of algorithms and the development of software.",
            spanish: "",
          },
          ask: {
            action: "ask",
            icon: "🔮",
            request: "",
            response:
              "\n\n1. What is coding? - Coding is the process of creating instructions for a computer to execute.\n2. What is logic? - Logic is the process of reasoning and making decisions based on facts and evidence.\n3. What is a programming language? - A programming language is a set of instructions that can be used to create a program.",
            spanish: "",
          },
          guide: {
            action: "guide",
            icon: "🤝",
            request: "",
            response:
              "\n\n1. Understand the fundamentals of coding and computer logic\n2. Learn the basics of programming languages such as HTML, CSS, JavaScript, and Python\n3. Familiarize yourself with the different types of data structures and algorithms\n4. Understand the principles of object-oriented programming\n5. Learn how to debug and troubleshoot code\n6. Develop an understanding of the principles of software engineering\n7. Learn how to use version control systems such as Git\n8. Understand the basics of databases and SQL\n9. Develop an understanding of web development frameworks such as React and Angular\n10. Learn how to use development tools such as IDEs and text editors",
            spanish: "",
          },
          demonstrate: {
            action: "demonstrate",
            icon: "🧿",
            request: "",
            response:
              '\n\n// Example of basic coding logic in JavaScript\nlet x = 5;\nlet y = 10;\n\nif (x < y) {\n  console.log("x is less than y");\n} else {\n  console.log("x is greater than or equal to y");\n}',
            spanish: "",
          },
          define: {
            action: "define", // may not need
            icon: "👾", // may not need
            request: "",
            response:
              "\n\nCoding is the process of creating instructions for a computer to execute, while computer logic is the process of using algorithms to solve problems.",
            spanish: "",
          },

          quiz: {
            action: "quiz",
            icon: "🧪",
            request: "",
            response:
              "\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?",
            spanish: "",
          },
        },
      },
      "Lesson 2": {
        filler: "",
        sourceType: "video", // may not need
        button: "Foundations: Data",
        header: "Foundations: Data",
        // may not need
        fileSource:
          "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220121/download_5_q0viph.mp4",
        // "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220062/download_4_xnineu.mp4",
        prompts: {
          patreon: {
            action: "Patreon video",
            icon: "►",
            request:
              "ms. roxana, can you please generate a video about the foundations of data and functions in computer programming?",
            response: "null",
            spanish: "",
          },
          summarize: {
            action: "summarize",
            icon: "📚",
            request: "",
            response:
              "\n\nCoding is the process of writing instructions in a programming language to create a program that can be executed by a computer. Computer logic is the set of rules and principles that govern the operation of a computer system. It is the basis for the design of algorithms and the development of software.",
            spanish: "",
          },
          define: {
            action: "define", // may not need
            icon: "👾", // may not need
            request: "",
            response:
              "\n\nCoding is the process of creating instructions for a computer to execute, while computer logic is the process of using algorithms to solve problems.",
            spanish: "",
          },
          demonstrate: {
            action: "demonstrate",
            icon: "🧿",
            request: "",
            response:
              '\n\n// Example of basic coding logic in JavaScript\nlet x = 5;\nlet y = 10;\n\nif (x < y) {\n  console.log("x is less than y");\n} else {\n  console.log("x is greater than or equal to y");\n}',
            spanish: "",
          },

          ask: {
            action: "ask",
            icon: "🔮",
            request: "",
            response:
              "\n\n1. What is coding? - Coding is the process of creating instructions for a computer to execute.\n2. What is logic? - Logic is the process of reasoning and making decisions based on facts and evidence.\n3. What is a programming language? - A programming language is a set of instructions that can be used to create a program.",
            spanish: "",
          },
          guide: {
            action: "guide",
            icon: "🤝",
            request: "",
            response:
              "\n\n1. Understand the fundamentals of coding and computer logic\n2. Learn the basics of programming languages such as HTML, CSS, JavaScript, and Python\n3. Familiarize yourself with the different types of data structures and algorithms\n4. Understand the principles of object-oriented programming\n5. Learn how to debug and troubleshoot code\n6. Develop an understanding of the principles of software engineering\n7. Learn how to use version control systems such as Git\n8. Understand the basics of databases and SQL\n9. Develop an understanding of web development frameworks such as React and Angular\n10. Learn how to use development tools such as IDEs and text editors",
            spanish: "",
          },
          quiz: {
            action: "quiz",
            icon: "🧪",
            request: "",
            response:
              "\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?",
            spanish: "",
          },

          inspire: {
            action: "inspire",
            icon: "⚡",
            request: "",
            response:
              "\n\nOne inspiring story about coding and logic is the story of Ada Lovelace. Ada Lovelace was a mathematician and writer in the 1800s who is widely considered to be the first computer programmer. She wrote the first algorithm for a machine that could calculate Bernoulli numbers, and her work laid the foundation for modern computing. Her story is inspiring because it shows that women have been making important contributions to the field of computer science for centuries.",
            spanish: "",
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

export let uiPaths = Object.keys(ui);

// this manages the view when selected "engineer, creator, business or 26th street"
export let controlPathVisibilityMap = (visibilityMap, selectedPath) => {
  let result = visibilityMap;
  uiPaths.forEach((path) => {
    result[path] = false;
  });
  result[selectedPath] = true;
  return result;
};
