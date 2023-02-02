// export const schemaUpdater = (ui) => {};

//source of truth for views

// ui[path][collection][module]{...}
// ui['coding']['projects & experience']['indocumentadofy']{...}

interface IPrompt {
  request: string;
  response: string;
}

interface IModule {
  filler: string;
  sourceType: string;
  button: string;
  header: string;
  fileSource: any;
  prompts: {
    quiz: IPrompt;
    faq: IPrompt;
    inspire: IPrompt;
    define: IPrompt;
    summarize: IPrompt;
    demonstrate: IPrompt;
    guide: IPrompt;
  };
}

interface ICollection {
  [index: string]: Record<string, IModule>;
}
interface IUserInterface {
  Engineer: ICollection;
  Creator: ICollection;
  Business: ICollection;
  "26th Street": ICollection;
}
export const ui: IUserInterface = {
  Engineer: {
    "Crash Course": {
      "Lesson 1": {
        filler: "",
        sourceType: "",
        button: "",
        header: "",
        fileSource: "",
        prompts: {
          quiz: {
            request: "",
            response: "",
          },
          faq: {
            request: "",
            response: "",
          },
          inspire: {
            request: "",
            response: "",
          },
          define: {
            request: "",
            response: "",
          },
          summarize: {
            request: "",
            response: "",
          },
          demonstrate: {
            request: "",
            response: "",
          },
          guide: {
            request: "",
            response: "",
          },
        },
      },
    },
  },
  Creator: {},
  Business: {},
  "26th Street": {},
};
