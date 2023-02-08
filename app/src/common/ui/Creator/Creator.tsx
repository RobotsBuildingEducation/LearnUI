import { ultimateEffeciencyJutsu } from "../ui";

export const Creator = {
  "Lessons Learned & Insights": {
    Philosophy: {
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `Philosophy @ RO.B.E`, // may not need - `name`
      header: `Philosophy @ RO.B.E`,
      fileSource: `https://res.cloudinary.com/eduprojectsil/video/upload/v1674721556/IMG_9188_iewsh4.mov`, // may not need

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
    "Creating Purpose": {
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Creating Purpose`, // may not need - `name`
      header: `Creating Purpose`,
      fileSource: await import("../../markdowns/creatingPurpose.md?raw"), // may not need

      prompts: {
        patreon: {
          completed: false,
          work: 1000,
          action: `generate`,
          icon: `✍️`, //`✍️`
          request: `ms. roxana, can you please generate an essay that covers ${ultimateEffeciencyJutsu(
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
    "Content Review": {
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      rare: true,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Content Review (20M+ views)`, // may not need - `name`
      header: `Content Review (20M+ views)`,
      fileSource: await import(
        "../../markdowns/socialMediaGrowthAnnotations.md?raw"
      ), // may not need

      prompts: {
        patreon: {
          completed: false,
          work: 1000,
          action: `generate`,
          icon: `✍️`,
          request: `ms. roxana, can you please generate an essay that covers ${ultimateEffeciencyJutsu(
            `Content Review`
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
            `Content Review`
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
            `Content Review`
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
            `Content Review`
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
            `Content Review`
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
            `Content Review`
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
            `Content Review`
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
            `Content Review`
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
      highValue: true,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `video`, // may not need
      button: `User Experiences`, // may not need - `name`
      header: `Human Computer Interaction`,
      fileSource: `https://res.cloudinary.com/eduprojectsil/video/upload/v1674383801/IMG_1533_ynkxkf.mov`, // may not need

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
      highValue: true,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Influence & Expression`, // may not need - `name`
      header: `Influence & Expression`,
      fileSource: await import("../../markdowns/influenceAndExpression.md?raw"), // may not need

      prompts: {
        patreon: {
          completed: false,
          work: 1000,
          action: `generate`,
          icon: `✍️`,
          request: `ms. roxana, can you please generate an essay that covers ${ultimateEffeciencyJutsu(
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
    "Abraham Lincoln": {
      filler: ``,
      new: false,
      highValue: false,
      underConstruction: true,
      completed: false,
      needsImprovement: false,
      tooltip: ``,
      sourceType: `markdown`, // may not need
      button: `Abraham Lincoln`, // may not need - `name`
      header: `Abraham Lincoln`,
      fileSource: await import("../../markdowns/abrahamLincoln.md?raw"), // may not need

      prompts: {
        patreon: {
          completed: false,
          work: 1000,
          action: `generate`,
          icon: `✍️`,
          request: `ms. roxana, can you please generate an essay that covers ${ultimateEffeciencyJutsu(
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
  },
};
