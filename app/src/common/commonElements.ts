/**
 * Prompt improvements
 * ---
 * It is difficult to decide on the most effective prompt.
 * The object can improve with how it's iterated through at render time but,
 * more importantly, it may be best if we simply iterate through it.
 *
 * It is unlikely that we will select the best prompt.
 * We may approximate it. And it may improve over time.
 *
 * Since this is so intellectually difficult to optomize,
 * iteration one will depend solely on 2AM intuition.
 *
 * Current prompts:
 *
 * faq - frequently asked questions with one line answers | prompt "ask"
 * quiz - ask a set of questions with answers | prompt "quiz"
 * demonstrate - add a code example or other form of content generation | prompt "demonstrate"
 * quick - describe data as a definition. | prompt "define"
 * summarize - describe data as a summary. | prompt "summarize"
 * study guide - describe data as a review list. | prompt "guide"
 * inspire curiousity - describe data as a story. | prompt "inspire"
 * translate -  translate to spanish | prompt "en espanol"
 *
 * Current constraints:
 * When is it best to limit speech, like "provide a brief story in a few sentences" or "exactly one sentence"
 * Are there cases where more data (and therefore more load time), makes sense? Is it more engaging or
 * meaningful to a student? For now, it's not introduce constraints unless the prompt specifically asks for it, like quick mode or study
 *
 *
 * ----
 *
 * We are storing the development of prompts in responseCollection. This makes using ChatGPT cheaper.
 * We can use chatGPT as a sandbox for results before deploying content to the client.
 */

// add answer collector since chatGPT is mostly a valuable content generator for now

export const CourseMap = {
  ["Coding"]: {
    ["Lesson 1"]: {
      sourceType: "video",
      lesson: "Lesson 1",
      parent: "Coding",
      name: "",
      button: "Lesson 1 x Foundations of Coding & Logic",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220062/download_4_xnineu.mp4",
      responseCollection: {
        faqPrompt:
          "\n\n1. What is coding? - Coding is the process of creating instructions for a computer to execute.\n2. What is logic? - Logic is the process of reasoning and making decisions based on facts and evidence.\n3. What is a programming language? - A programming language is a set of instructions that can be used to create a program.",
        inspireCuriousityPrompt:
          "\n\nOne inspiring story about coding and logic is the story of Ada Lovelace. Ada Lovelace was a mathematician and writer in the 1800s who is widely considered to be the first computer programmer. She wrote the first algorithm for a machine that could calculate Bernoulli numbers, and her work laid the foundation for modern computing. Her story is inspiring because it shows that women have been making important contributions to the field of computer science for centuries.",
        quickPrompt:
          "\n\nCoding is the process of creating instructions for a computer to execute, while computer logic is the process of using algorithms to solve problems.",
        summarizePrompt:
          "\n\nCoding is the process of writing instructions in a programming language to create a program that can be executed by a computer. Computer logic is the set of rules and principles that govern the operation of a computer system. It is the basis for the design of algorithms and the development of software.",
        demonstratePrompt:
          '\n\n// Example of basic coding logic in JavaScript\nlet x = 5;\nlet y = 10;\n\nif (x < y) {\n  console.log("x is less than y");\n} else {\n  console.log("x is greater than or equal to y");\n}',
        studyGuidePrompt:
          "\n\n1. Understand the fundamentals of coding and computer logic\n2. Learn the basics of programming languages such as HTML, CSS, JavaScript, and Python\n3. Familiarize yourself with the different types of data structures and algorithms\n4. Understand the principles of object-oriented programming\n5. Learn how to debug and troubleshoot code\n6. Develop an understanding of the principles of software engineering\n7. Learn how to use version control systems such as Git\n8. Understand the basics of databases and SQL\n9. Develop an understanding of web development frameworks such as React and Angular\n10. Learn how to use development tools such as IDEs and text editors",
        quizPrompt:
          "\n\n1. What is the difference between a programming language and a scripting language?\n2. What is the purpose of a loop in coding and logic?\n3. What is the difference between a for loop and a while loop in coding and logic?",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please share an inspiring story about coding and logic?",
      quickPrompt:
        "ms. roxana, can you please define coding and computer logic in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize coding and computer logic?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for coding and computer logic with 10 bullet points?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
    },
    ["Lesson 2"]: {
      sourceType: "video",
      lesson: "Lesson 2",
      parent: "Coding",
      name: "",
      button: "Lesson 2 x Foundations of Data",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220121/download_5_q0viph.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please share an inspiring story about data and computing?",
      quickPrompt:
        "ms. roxana, can you please explain sets of data and functions in computer programming in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please explain sets of data and functions in computer programming? ",
      demonstratePrompt:
        "ms. roxana, can you please show me a basic coding example of sets of data and functions with no other text in python?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for sets of data and functions in computer programming with 10 bullet points?",
    },
    ["Lesson 3"]: {
      sourceType: "video",
      lesson: "Lesson 3",
      parent: "Coding",
      name: "",
      button: "Lesson 3 x Creating Objects",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220184/download_6_mzx1ss.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you tell me how important object oriented programming will be in the metaverse?",
      quickPrompt:
        "ms. roxana, can you please summarize object oriented programming and CRUD applications in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize object oriented programming and CRUD applications?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for object oriented programming and CRUD applications with 10 bullet points?",
    },
    ["Lesson 4"]: {
      sourceType: "video",
      lesson: "Lesson 4",
      parent: "Coding",
      name: "",
      button: "Lesson 4 x Network Functions",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220233/download_7_l6kd1z.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how the data created by HTTP methods and machine learning algorithms are related?",
      quickPrompt:
        "ms. roxana, can you summarize HTTP methods in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize and give examples of HTTP methods?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for HTTP methods with 10 bullet points?",
    },
    ["Lesson 5"]: {
      sourceType: "video",
      lesson: "Lesson 5",
      parent: "Coding",
      name: "",
      button: "Lesson 5 x Loops & Counting",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220261/download_8_gww39e.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain what kind of loops Google uses in their search algorithms?",
      quickPrompt:
        "ms. roxana, can you please summarize computer programming loops in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize and give examples of computer programming loops?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for computer programming loops with 10 bullet points?",
    },
    ["Lesson 6"]: {
      sourceType: "video",
      lesson: "Lesson 6",
      parent: "Coding",
      name: "",
      button: "Lesson 6 x HTML",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220287/download_9_uf9kjn.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain why Facebook created React, it's position in the market, and how it's related to HTML coded for myspace pages?",
      quickPrompt:
        "ms. roxana, can you please summarize HTML in exactly one sentence?",
      summarizePrompt: "ms. roxana, can you please summarize HTML?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for HTML with 10 bullet points?",
    },
    ["Lesson 7"]: {
      sourceType: "video",
      lesson: "Lesson 7",
      parent: "Coding",
      name: "",
      button: "Lesson 7 x CSS",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220314/download_10_epzusw.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please how designers use tools like Figma and CSS?",
      quickPrompt:
        "ms. roxana, can you please summarize CSS in exactly one sentence?",
      summarizePrompt: "ms. roxana, can you please summarize CSS?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for CSS with 10 bullet points?",
    },
    ["Lesson 8"]: {
      sourceType: "video",
      lesson: "Lesson 8",
      parent: "Coding",
      name: "",
      button: "Lesson 8 x React",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220343/download_11_whqtek.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can React programming be used to code apps with AI or blockchain?",
      quickPrompt:
        "ms. roxana, can you please summarize React programming exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize React programming?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for React programming with 10 bullet points?",
    },
    ["Lesson 9"]: {
      sourceType: "video",
      lesson: "Lesson 9",
      parent: "Coding",
      name: "",
      button: "Lesson 9 x Creating Users",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220377/download_12_adwen3.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how companies are able to collect data when creating users on their platform?",
      quickPrompt:
        "ms. roxana, can you please summarize OAuth in exactly one sentence?",
      summarizePrompt: "ms. roxana, can you please summarize OAuth?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for OAuth with 10 bullet points?",
    },
    ["Lesson 10"]: {
      sourceType: "video",
      lesson: "Lesson 10",
      parent: "Coding",
      name: "",
      button: "Lesson 10 x Database Foundations",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220399/download_13_xxdhvo.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how users in a databases and machine learning are related?",
      quickPrompt:
        "ms. roxana, can you please summarize database design in exactly one sentence?",
      summarizePrompt: "ms. roxana, can you please summarize database design?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for database design with 10 bullet points?",
    },
    ["Lesson 11"]: {
      sourceType: "video",
      lesson: "Lesson 11",
      parent: "Coding",
      name: "",
      button: "Lesson 11 x Backend Clouds",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220422/download_14_lkehax.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain why serverless computing got popular?",
      quickPrompt:
        "ms. roxana, can you please summarize backend software engineering in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize backend software engineering?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for backend software engineering with 10 bullet points?",
    },
    ["Lesson 12"]: {
      sourceType: "video",
      lesson: "Lesson 12",
      parent: "Coding",
      name: "",
      button: "Lesson 12 x Operating Systems & Machines",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220456/download_15_um5siz.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain the relationship between ASICs, FPGAs, Tesla's Optimus robot and bitcoin miners?",
      quickPrompt:
        "ms. roxana, can you please summarize computer operating systems in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize computer operating systems?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic Bitcoin code with no other text in rust?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for computer operating systems with 10 bullet points?",
    },
    ["Lesson 13"]: {
      sourceType: "video",
      lesson: "Lesson 13",
      parent: "Coding",
      name: "",
      button: "Lesson 13 x Setting Up An App",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220489/download_16_lpne2o.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how things like chatGPT and command lines are similar?",
      quickPrompt:
        "ms. roxana, can you please summarize command line interfaces (CLIs) in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize CI/CD in software development?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for command line interfaces (CLIs) with 10 bullet points?",
    },
    ["Lesson 14"]: {
      sourceType: "video",
      lesson: "Lesson 14",
      parent: "Coding",
      name: "",
      button: "Lesson 14 x Creating Fintech",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220538/download_17_snhdb6.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how the drug war, bitcoin and the bank secrecy act are related and how it may be problematic for civil liberties?",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize SynapseFi's APIs and SDKs in exactly two sentences?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for SynapseFi's APIs and SDKs with 10 bullet points?",
    },
    ["Lesson 15"]: {
      sourceType: "video",
      lesson: "Lesson 15",
      parent: "Coding",
      name: "",
      button: "Lesson 15 x Creating Database",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220555/download_18_uv5kve.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how entrepeneurs can use platforms like Firebase to create businesses?",
      quickPrompt:
        "ms. roxana, can you please summarize Firebase in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize the Firebase ecosystem?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for Firebase with 10 bullet points?",
    },
    ["Lesson 16"]: {
      sourceType: "video",
      lesson: "Lesson 16",
      parent: "Coding",
      name: "",
      button: "Lesson 16 x Working Together With Git & Github",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220688/download_vm66up.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain what robotic process automation is?",
      quickPrompt:
        "ms. roxana, can you please summarize Git and Github in exactly one sentence?",
      summarizePrompt: "ms. roxana, can you please summarize Git and Github?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for Git and Github with 10 bullet points?",
    },
  },
  ["Projects x Experience"]: {
    ["Indocumentadofy"]: {
      sourceType: "markdown",
      lesson: "Indocumentadofy",
      parent: "Projects x Experience",
      name: "",
      button: "Indocumentadofy",
      fileSource: await import("./markdowns/indocumentadofy.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how undocumented immigrants can create employment by consulting with skills like Hydrogen by Shopify? ",
      quickPrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding Hydrogen by Shopify with 10 bullet points?",
    },

    ["Educate"]: {
      sourceType: "markdown",
      lesson: "Educate",
      parent: "Educate",
      name: "",
      button: "Educate",
      fileSource: await import("./markdowns/educate.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please any alternative models to financing schools with digital learning?",
      quickPrompt:
        "ms. roxana, can you please summarize the how an application like Github for teachers in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize the how an application like Github for teachers would work like?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for github and an idea like github for teachers with 10 bullet points?",
    },
    ["Learn"]: {
      sourceType: "markdown",
      lesson: "Learn",
      parent: "Projects x Experience",
      name: "",
      button: "Learn",
      fileSource: await import("./markdowns/learn.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt: "ms. roxana, can you please ",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize the potential relationship between universal basic income, robotics, proof of work, and bitcoin?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for the potential relationship between universal basic income, robotics, proof of work and bitcoin with 10 bullet points?",
    },
    ["TapDM"]: {
      sourceType: "markdown",
      lesson: "TapDM",
      parent: "Projects x Experience",
      name: "",
      button: "TapDM",
      fileSource: await import("./markdowns/chatApp.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt: "ms. roxana, can you please ",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize the potential relationship between universal basic income, robotics, proof of work, and bitcoin?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for the potential relationship between universal basic income, robotics, proof of work and bitcoin with 10 bullet points?",
    },
  },
  ["Technical Interview Foundations"]: {
    ["Programming Languages"]: {
      sourceType: "video",
      lesson: "Programming Languages",
      parent: "Technical Interview Foundations",
      name: "",
      button: "Programming Languages",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674725780/download_19_gintiu.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how undocumented immigrants can create employment by consulting with skills like Hydrogen by Shopify? ",
      quickPrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding Hydrogen by Shopify with 10 bullet points?",
    },

    ["Recursions"]: {
      sourceType: "video",
      lesson: "Recursions",
      parent: "Technical Interview Foundations",
      name: "",
      button: "Recursions",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674725818/download_20_bjmac7.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how undocumented immigrants can create employment by consulting with skills like Hydrogen by Shopify? ",
      quickPrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding Hydrogen by Shopify with 10 bullet points?",
    },
    ["Linked Lists"]: {
      sourceType: "video",
      lesson: "Linked Lists",
      parent: "Technical Interview Foundations",
      name: "",
      button: "Linked Lists",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674725865/download_21_k9d6in.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how undocumented immigrants can create employment by consulting with skills like Hydrogen by Shopify? ",
      quickPrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding Hydrogen by Shopify with 10 bullet points?",
    },
    ["Traversing Links"]: {
      sourceType: "video",
      lesson: "Traversing Links",
      parent: "Technical Interview Foundations",
      name: "",
      button: "Traversing Links",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674725908/download_22_rjgmqs.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how undocumented immigrants can create employment by consulting with skills like Hydrogen by Shopify? ",
      quickPrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding Hydrogen by Shopify with 10 bullet points?",
    },
    ["Changing Links"]: {
      sourceType: "video",
      lesson: "Changing Links",
      parent: "Technical Interview Foundations",
      name: "",
      button: "Changing Links",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674725986/download_23_lbtipl.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how undocumented immigrants can create employment by consulting with skills like Hydrogen by Shopify? ",
      quickPrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding Hydrogen by Shopify with 10 bullet points?",
    },
    ["Algorithms"]: {
      sourceType: "video",
      lesson: "Algorithms",
      parent: "Technical Interview Foundations",
      name: "",
      button: "Algorithms",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674726053/download_24_wkw20z.mp4",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how undocumented immigrants can create employment by consulting with skills like Hydrogen by Shopify? ",
      quickPrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding Hydrogen by Shopify with 10 bullet points?",
    },
  },
  ["Social Media"]: {
    ["Content Reviewing"]: {
      sourceType: "markdown",
      lesson: "Content Reviewing",
      parent: "Social Media",
      name: "",
      button: "Content Reviewing",
      fileSource: await import(
        "./markdowns/socialMediaGrowthAnnotations.md?raw"
      ),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please give examples of interesting but successful viral strategies people have used?",
      quickPrompt:
        "Can you explain why Mr. Beast was successful in growing his social media presence?",
      summarizePrompt:
        "ms. roxana, can you please summarize how to create viral videos on platforms like Tiktok?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for how to create viral videos on platforms like Tiktok with 10 bullet points?",
    },
    ["User Interfaces x Experiences"]: {
      sourceType: "video",
      lesson: "User Interfaces x Experiences",
      parent: "Social Media",
      name: "",
      button: "User Interfaces & Experiences (UI/UX)",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674383801/IMG_1533_ynkxkf.mov",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please how UI/UX and AIs are related?",
      quickPrompt:
        "ms. roxana, can you please summarize human-computer interaction and UI/UX? in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize human-computer interaction and UI/UX?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding human-computer interaction and UI/UX with 10 bullet points?",
    },
    ["Influence x Expression"]: {
      sourceType: "markdown",
      lesson: "Influence x Expression",
      parent: "Social Media",
      name: "",
      button: "Influence x Expression",
      fileSource: await import("./markdowns/influenceAndExpression.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain why learning about the creator economy is important?",
      quickPrompt:
        "ms. roxana, can you please summarize how to grow in social media in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize how expression impacts influence?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how expression impacts influence with 10 bullet points?",
    },
    ["Creating Purpose"]: {
      sourceType: "markdown",
      lesson: "Creating Purpose",
      parent: "Social Media",
      name: "",
      button: "Creating Purpose",
      fileSource: await import("./markdowns/creatingPurpose.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
    ["Abraham Lincoln"]: {
      sourceType: "markdown",
      lesson: "Abraham Lincoln",
      parent: "Social Media",
      name: "",
      button: "Abraham Lincoln",
      fileSource: await import("./markdowns/abrahamLincoln.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
    ["Philosophy Used @ RO.B.E"]: {
      sourceType: "video",
      lesson: "Philosophy Used @ RO.B.E",
      parent: "Social Media",
      name: "",
      button: "Philosophy Used @ RO.B.E",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674721556/IMG_9188_iewsh4.mov",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
  },
  ["Dinero"]: {
    ["Bitcoin, Automa & the Drug War"]: {
      sourceType: "markdown",
      lesson: "Bitcoin, Automa & the Drug War",
      parent: "Dinero",
      name: "",
      button: "Bitcoin, Automa & the Drug War",
      fileSource: await import("./markdowns/drugWarBitcoin.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how the drug war has produced inequality in the US public education system?",
      quickPrompt:
        "ms. roxana, can you please summarize how the relationship between the drug war, its consequences on US public education, the demographic outcomes of Ivy league schools influences the demographics of the tech and venture capital industries? Which two racial demographics benefit most as a result?",
      summarizePrompt:
        "ms. roxana, can you please summarize how Bitcoin, robotics, universal basic income and the drug war are related?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how Bitcoin, robotics, universal basic income and the drug war are related with 10 bullet points?",
    },
    ["Bitcoin x Social Technology"]: {
      sourceType: "video",
      lesson: "Bitcoin x Social Technology",
      parent: "Dinero",
      name: "",
      button: "Bitcoin & Social Technology",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674388103/IMG_1545_wz26l6.mov",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you explain why data sovereignty is important?",
      quickPrompt:
        "ms. roxana, can you please explain what decentralized identities are in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please explain what decentralized identities are and then explain how it impacts or improves social media?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand what decentralized identities are and then explain how it impacts or improves social media with 10 bullet points?",
    },
    ["Tech Recession Investing"]: {
      sourceType: "video",
      lesson: "Tech Recession Investing",
      parent: "Dinero",
      name: "",
      button: "Tech Recession Investing",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674721518/IMG_9184_ouquv2.mov",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how investing in a tech recession is wise?",
      quickPrompt:
        "ms. roxana, can you please explain how investing in an IRA and using withdrawal excepts in combination with an FHA loan is strategically effective?",
      summarizePrompt:
        "ms. roxana, can you summarize the costs of purchasing a home?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to to understanding tech recession investing and purchasing your first home with ten bullet points?",
    },
    ["Tech Recession Investing x Real Estate II"]: {
      sourceType: "video",
      lesson: "Tech Recession Investing x Real Estate II",
      parent: "Dinero",
      name: "",
      button: "Tech Recession Investing x Real Estate II",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674721555/IMG_9183_dbfoes.mov",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how investing in a tech recession is wise?",
      quickPrompt:
        "ms. roxana, can you please explain how investing in an IRA and using withdrawal excepts in combination with an FHA loan is strategically effective?",
      summarizePrompt:
        "ms. roxana, can you summarize the costs of purchasing a home?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to to understanding tech recession investing and purchasing your first home with ten bullet points?",
    },

    ["Tech Recession Investing x Real Estate III"]: {
      sourceType: "markdown",
      lesson: "Tech Recession Investing x Real Estate III",
      parent: "Dinero",
      name: "",
      button: "Tech Recession Investing x Real Estate III",
      fileSource: await import("./markdowns/techRecessionStrategy.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how investing in a tech recession is wise?",
      quickPrompt:
        "ms. roxana, can you please explain how investing in an IRA and using withdrawal excepts in combination with an FHA loan is strategically effective?",
      summarizePrompt:
        "ms. roxana, can you summarize the costs of purchasing a home?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to to understanding tech recession investing and purchasing your first home with ten bullet points?",
    },

    ["Learn Coding"]: {
      sourceType: "video",
      lesson: "Learn Coding",
      parent: "Dinero",
      name: "",
      button: "Learn Coding",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674721517/IMG_9185_wfrmsz.mov",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please explain how investing in a tech recession is wise?",
      quickPrompt:
        "ms. roxana, can you please explain how investing in an IRA and using withdrawal excepts in combination with an FHA loan is strategically effective?",
      summarizePrompt:
        "ms. roxana, can you summarize the costs of purchasing a home?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to to understanding tech recession investing and purchasing your first home with ten bullet points?",
    },

    ["Creating Competitive Entry Level Resumes"]: {
      sourceType: "video",
      lesson: "Creating Competitive Entry Level Resumes",
      parent: "Dinero",
      name: "",
      button: "Creating Competitive Entry Level Resumes",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674721555/IMG_9181_mjw1zc.mov",
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },

    ["Options Trading Advice"]: {
      sourceType: "markdown",
      lesson: "Options Trading Advice",
      parent: "Dinero",
      name: "",
      button: "Options Trading Advice",
      fileSource: await import("./markdowns/optionsTradingAdvice.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
    ["Financial Technology Investing"]: {
      sourceType: "markdown",
      lesson: "Financial Technology Investing",
      parent: "Dinero",
      name: "",
      button: "Fintech Investing",
      fileSource: await import("./markdowns/fintechInvesting.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
    ["Social Media Investing"]: {
      sourceType: "markdown",
      lesson: "Social Media Investing",
      parent: "Dinero",
      name: "",
      button: "Social Media Investing",
      fileSource: await import("./markdowns/socialMediaInvesting.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
    ["Metaverse Investing"]: {
      sourceType: "markdown",
      lesson: "Metaverse Investing",
      parent: "Dinero",
      name: "",
      button: "Metaverse Investing",
      fileSource: await import("./markdowns/metaverseInvesting.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
    ["Mexican-American Trade Investing"]: {
      sourceType: "markdown",
      lesson: "Mexican-American Trade Investing",
      parent: "Dinero",
      name: "",
      button: "Mexican-American Trade",
      fileSource: await import("./markdowns/mexicanAmericanTrade.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
    ["Infrastructure Investing"]: {
      sourceType: "markdown",
      lesson: "Infrastructure Investing",
      parent: "Dinero",
      name: "",
      button: "Infrastructure Investing",
      fileSource: await import("./markdowns/infrastructureInvesting.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },

    ["Cloud Investing"]: {
      sourceType: "markdown",
      lesson: "Cloud Investing",
      parent: "Dinero",
      name: "",
      button: "Cloud Investing",
      fileSource: await import("./markdowns/cloudInvesting.md?raw"),
      responseCollection: {
        faqPrompt: "",
        inspireCuriousityPrompt: "",
        quickPrompt: "",
        summarizePrompt: "",
        demonstratePrompt: "",
        studyGuidePrompt: "",
        quizPrompt: "",
      },
      quizPrompt:
        "ms. roxana, can you please write a 3 question quiz for beginners that's challenging about coding and logic?",
      faqPrompt:
        "ms. roxana, can you please show me three frequently asked beginner questions about coding and logic with one sentence answers?",
      inspireCuriousityPrompt:
        "ms. roxana, can you please talk about Renassaince Capital and how they found success using algorithms in the stock market?",
      quickPrompt:
        "ms. roxana, can you please summarize why trading options is probably not a good idea?",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      demonstratePrompt:
        "ms. roxana, can you please show me an example of basic coding logic with no other text in javascript?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
  },
};
