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
 * iteration one will depend solely on intuition.
 *
 * Current prompts:
 *
 * quick - describe data as exactly one sentence.
 * summarize - describe data a general description.
 * study guide - describe data as a review list.
 * inspire curiousity - describe data as a story.
 *
 * Current constraints:
 * When is it best to limit speech, like "provide a brief story in a few sentences" or "exactly one sentence"
 * Are there cases where more data (and therefore more load time), makes sense? Is it more engaging or
 * meaningful to a student? For now, it's not introduce constraints unless the prompt specifically asks for it, like quick mode or study
 *
 */
export const CourseMap = {
  ["Coding"]: {
    ["Lesson 1"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 1 x Foundations of Coding & Logic",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220062/download_4_xnineu.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt:
        "ms. roxana, can you please summarize coding and computer logic in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize coding and computer logic?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for coding and computer logic with 10 bullet points?",
    },
    ["Lesson 2"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 2 x Foundations of Data",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220121/download_5_q0viph.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt:
        "ms. roxana, can you please explain sets of data and functions in computer programming in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please explain sets of data and functions in computer programming? ",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for sets of data and functions in computer programming with 10 bullet points?",
    },
    ["Lesson 3"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 3 x Creating Objects",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220184/download_6_mzx1ss.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt:
        "ms. roxana, can you please summarize object oriented programming and CRUD applications in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize object oriented programming and CRUD applications?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for object oriented programming and CRUD applications with 10 bullet points?",
    },
    ["Lesson 4"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 4 x Network Functions",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220233/download_7_l6kd1z.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt:
        "ms. roxana, can you sumamrize HTTP methods in exactly one sentence?",
      summarizePrompt:
        "ms. roxana, can you please summarize and give examples of HTTP methods?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for HTTP methods with 10 bullet points?",
    },
    ["Lesson 5"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 5 x Loops & Counting",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220261/download_8_gww39e.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize computer programming loops in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for computer programming loops with 10 bullet points?",
    },
    ["Lesson 6"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 6 x HTML",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220287/download_9_uf9kjn.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize HTML in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for HTML with 10 bullet points?",
    },
    ["Lesson 7"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 7 x CSS",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220314/download_10_epzusw.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize CSS in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for CSS with 10 bullet points?",
    },
    ["Lesson 8"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 8 x React",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220343/download_11_whqtek.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize React programming exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for React programming with 10 bullet points?",
    },
    ["Lesson 9"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 9 x Creating Users",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220377/download_12_adwen3.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize OAuth in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for OAuth with 10 bullet points?",
    },
    ["Lesson 10"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 10 x Database Foundations",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220399/download_13_xxdhvo.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize database design in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for database design with 10 bullet points?",
    },
    ["Lesson 11"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 11 x Backend Clouds",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220422/download_14_lkehax.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize backend software engineering in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for backend software engineering with 10 bullet points?",
    },
    ["Lesson 12"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 12 x Operating Systems & Machines",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220456/download_15_um5siz.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize computer operating systems in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for computer operating systems with 10 bullet points?",
    },
    ["Lesson 13"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 13 x Setting Up An App",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220489/download_16_lpne2o.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize command line interfaces (CLIs) in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for command line interfaces (CLIs) with 10 bullet points?",
    },
    ["Lesson 14"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 14 x Creating Fintech",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220538/download_17_snhdb6.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize SynapseFi's APIs and SDKs in exactly two sentences?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for SynapseFi's APIs and SDKs with 10 bullet points?",
    },
    ["Lesson 15"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 15 x Creating Database",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220555/download_18_uv5kve.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize Firebase in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for Firebase with 10 bullet points?",
    },
    ["Lesson 16"]: {
      sourceType: "video",
      parent: "Coding",
      name: "",
      button: "Lesson 16 x Working Together With Git & Github",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674220688/download_vm66up.mp4",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize Git and Github in exactly two sentences?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for Git and Github with 10 bullet points?",
    },
  },
  ["Projects x Experience"]: {
    ["Indocumentadofy"]: {
      sourceType: "markdown",
      parent: "Projects x Experience",
      name: "",
      button: "Indocumentadofy",
      fileSource: await import("./markdowns/indocumentadofy.md?raw"),
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize Hydrogen by Shopify in exactly one sentence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding Hydrogen by Shopify with 10 bullet points?",
    },

    ["Educate"]: {
      sourceType: "markdown",
      parent: "Educate",
      name: "",
      button: "Educate",
      fileSource: await import("./markdowns/educate.md?raw"),
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize the how an application like Github for teachers would work like?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for github and an idea like github for teachers with 10 bullet points?",
    },
    ["Learn"]: {
      sourceType: "markdown",
      parent: "Projects x Experience",
      name: "",
      button: "Learn",
      fileSource: await import("./markdowns/learn.md?raw"),
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize the potential relationship between universal basic income, robotics, proof of work, and bitcoin?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for the potential relationship between universal basic income, robotics, proof of work and bitcoin with 10 bullet points?",
    },
  },
  ["Social Media"]: {
    ["Content Reviewing"]: {
      sourceType: "markdown",
      parent: "Social Media",
      name: "",
      button: "Content Reviewing",
      fileSource: await import(
        "./markdowns/socialMediaGrowthAnnotations.md?raw"
      ),
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize how to create viral videos on platforms like Tiktok?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for how to create viral videos on platforms like Tiktok with 10 bullet points?",
    },
    ["User Interfaces x Experiences"]: {
      sourceType: "video",
      parent: "Social Media",
      name: "",
      button: "User Interfaces & Experiences (UI/UX)",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674383801/IMG_1533_ynkxkf.mov",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize human-computer interaction and UI/UX?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide for understanding human-computer interaction and UI/UX with 10 bullet points?",
    },
    ["Influence x Expression"]: {
      sourceType: "markdown",
      parent: "Social Media",
      name: "",
      button: "Influence x Expression",
      fileSource: await import("./markdowns/influenceAndExpression.md?raw"),
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize how expression impacts influence?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how expression impacts influence with 10 bullet points?",
    },
  },

  ["Dinero"]: {
    ["Bitcoin, Automa & the Drug War"]: {
      sourceType: "markdown",
      parent: "Dinero",
      name: "",
      button: "Bitcoin, Automa & the Drug War",
      fileSource: await import("./markdowns/drugWarBitcoin.md?raw"),
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize how Bitcoin, robotics, universal basic income and the drug war are related?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how Bitcoin, robotics, universal basic income and the drug war are related with 10 bullet points?",
    },
    ["Bitcoin x Social Technology"]: {
      sourceType: "video",
      parent: "Dinero",
      name: "",
      button: "Bitcoin & Social Technology",
      fileSource:
        "https://res.cloudinary.com/eduprojectsil/video/upload/v1674388103/IMG_1545_wz26l6.mov",
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please explain what decentralized identities are and then explain how it impacts or improves social media?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand what decentralized identities are and then explain how it impacts or improves social media with 10 bullet points?",
    },
    ["Tech Recession Investing x Real Estate"]: {
      sourceType: "markdown",
      parent: "Dinero",
      name: "",
      button: "Tech Recession Investing x Real Estate",
      fileSource: await import("./markdowns/techRecessionStrategy.md?raw"),
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize how Bitcoin, robotics, universal basic income and the drug war are related?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how Bitcoin, robotics, universal basic income and the drug war are related with 10 bullet points?",
    },

    ["Options Trading Advice"]: {
      sourceType: "markdown",
      parent: "Dinero",
      name: "",
      button: "Options Trading Advice",
      fileSource: await import("./markdowns/optionsTradingAdvice.md?raw"),
      inspireCuriousityPrompt: "",
      quickPrompt: "",
      summarizePrompt:
        "ms. roxana, can you please summarize how trading options works in the stock market?",
      studyGuidePrompt:
        "ms. roxana, can you please create a study guide to understand how how trading options works in the stock market?",
    },
  },
};
