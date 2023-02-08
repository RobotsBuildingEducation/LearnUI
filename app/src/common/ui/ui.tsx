// repeatable + defining word combos. Level 1 prompts
export let ultimateEffeciencyJutsu = (key) => {
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
    [`Lesson 13`]: `using command line interfaces to create apps with npm`,
    [`Lesson 14`]: `APIs`, // wow this one is crazy in commonElements.ts lol
    [`Lesson 15`]: `Firebase`,
    [`Lesson 16`]: `Git and Github`,
    ["Build For Undocumented"]:
      "opportunities to consult as an undocumented immigrant with Hydrogen by Shopify",
    ["Build For Teachers"]: "GitHub for teachers",
    ["Build For Community"]:
      "the relationship between bitcoin, automation and universal basic income?",
    ["Social Chat"]: "how to design chat apps",
    ["Programming Languages"]: "programming languages",
    ["Recursion"]: "recursion",
    ["Linked Lists"]: "linked lists",
    ["Link Travel"]: "traversing linked lists and trees",
    ["Link Changing"]: "swapping nodes in a linked list, tree, or graph",
    ["Algorithms"]: "tree and graph algorithms",
    ["Content Review"]: "reviewing content to grow on social media",
    ["UI/UX"]: "human computer interaction, user centered design and UI/UX",
    ["Influence & Expression"]:
      "expression and its impacts on influence in social media",
    ["Creating Purpose"]:
      "creating purpose by choosing problems to solve and journeys to take",
    ["Abraham Lincoln"]: "Abraham Lincoln and his views on divine providence",
    ["Philosophy"]: "Critical race theory and machine learning algorithms",
    ["Bitcoin, Automa & the Drug War"]:
      "the relationship between bitcoin, automation and the drug war",
    ["Bitcoin x Social Technology"]:
      "the relationship between decentralized identities, civil liberties and our experience on the internet",
    ["Tech Recession Investing"]: "the benefits of investing in recessions",
    ["Tech Recession Investing x Real Estate II"]:
      "the benefits of using IRA exceptions and FHA loans to purchase your first home with $10,000",
    ["Tech Recession Investing x Real Estate III"]:
      "How investing in a home is a safer way than options to leverage money",
    ["Learn Coding"]:
      "how computer science is intersectional with any subject of interest like medicine, sports or clean energy",
    ["Creating Competitive Entry Level Resumes"]:
      "The benefits of building a good one-page resume",
    ["Options Trading Advice"]:
      "why options trading may be worthwhile during earnings reports when focus investing is the main investing strategy",
    ["Financial Technology Investing"]:
      "the pros and cons of investing in financial technology organizations like Cash App and Bitcoin",
    ["Social Media Investing"]:
      "the pros and cons of investing in social media organizations like Pinterest",
    ["Metaverse Investing"]:
      "the pros and cons of investing in metaverse organizations like Meta or Roblox",
    ["Mexican-American Trade Investing"]:
      "the pros and cons of investing strong Mexican-American railroads like Canadian Pacific and Kansas City Southern",
    ["Infrastructure Investing"]:
      "the pros and cons of investing in industrial technology companies like Autodesk",
    ["Cloud Investing"]:
      "the pros and cons of investing in cloud software like Cloudflare",
  };
  return map[key] || "null";
};
