// export const schemaUpdater = (ui) => {};

import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { LittleVillage } from "./ui/26thStreet/LittleVillage";
import { Creator } from "./ui/Creator/Creator";
import { Engineer } from "./ui/Engineer/Engineer";
import { Entrepeneur } from "./ui/Entrepeneur/Entrepeneur";

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

  //fine tuned with human ideas.
  humanTouch?: boolean;

  //enhanced with machine learning.
  robotTouch?: boolean;

  //fine-tuned with currently patreon hosted content
  premiumContent?: boolean;

  //fine-tuned with advertising content
  sponsoredContent?: boolean;

  // may display custom content like an image, python code, javascript code, etc
  dynamicContent?: boolean;
}

interface IModule {
  documentID: string;
  // internal preference
  filler: string;

  hasCode?: boolean;
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

  // great value find
  highValue: boolean;

  //rare value in general
  rare?: boolean;

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

    //in the future: translate. Dropdown/search + translate Module
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
  // can branch this further to reduce JSON size computed when invoked.
  return {
    Creator: Creator,
    Engineer: Engineer,
    Entrepeneur: Entrepeneur,
    "26th Street": LittleVillage,
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
  style = null
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

/**
 * @returns the total amount of proof of work points available in the platform.
 */
export let getGlobalProofOfWork = () => {
  let pathKeys = Object.keys(ui());

  let sum = 0;
  let moduleCount = 0;

  pathKeys.forEach((path) => {
    let collectionKeys = Object.keys(ui()[path]);

    collectionKeys.forEach((collection) => {
      let moduleKeys = Object.keys(ui()[path][collection]);

      moduleKeys.forEach((module) => {
        moduleCount = moduleCount + 1;

        let mod = ui()[path][collection][module];
        let prompts = Object.keys(mod.prompts);

        prompts.forEach((prompt) => {
          sum = sum + mod.prompts[prompt].work;
        });
      });
    });
  });

  return sum;
};
