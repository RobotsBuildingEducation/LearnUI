import { updateDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import { CodeBlock, dracula } from "react-code-blocks";
import { PromptMessage } from "./PromptMessage/PromptMessage";
import { Prompts } from "./Prompts/Prompts";
import { Roxana } from "./Roxana/Roxana";

export const ChatGPT = ({
  patreonObject,
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalWorkCounter,
  setGlobalWorkCounter,
  isDemo = false,

  displayName = "Demo Robots",

  computePercentage,
}) => {
  const [promptMessage, setPromptMessage] = useState("");
  const [isSpanishActive, setIsSpanishActive] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [chatGptResponse, setChatGptResponse] = useState("");
  const [loadingStates, setLoadingStates] = useState({
    summarize: false,
    guide: false,
    anything: false,
    define: false,
    demonstrate: false,
    ask: false,
    quiz: false,
    inspire: false,
    patreon: false,
    shop: false,
  });

  /**
   *
   * lets test patreonObject first
   * [
   *  { key: '', prompt: Element, response: Element, slot: '' } || patreonObject?
   * ]
   */
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    setLoadingStates({
      summarize: false,
      guide: false,
      anything: false,
      define: false,
      ask: false,
      quiz: false,
      demonstrate: false,
      patreon: false,
      inspire: false,
      shop: false,
    });
    setChatGptResponse("");
  }, [patreonObject]);

  const handlePromptSelection = (promptType) => {
    let loader = Object.keys(loadingStates);
    let result = loadingStates;
    loader.forEach((prompt) => {
      result[prompt] = false;
    });
    result[promptType] = true;
    setLoadingStates(result);
    setLoadingMessage("...");
    // setLoadingMessage(`prompt ${promptType} activated`);
  };

  const handleSubmit = async (event, prompt = null, promptType = null) => {
    event.preventDefault();

    setPromptMessage(prompt.request);

    if (promptType === "languageToggle") {
      setIsSpanishActive(!isSpanishActive);
    } else {
      handlePromptSelection(promptType);
    }

    // this API has a $5 limit. Please configure your own setup to test in a seperate location.
    // const response = await fetch(
    //   "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       prompt: prompt.request,
    //     }),
    //   }
    // ).catch((error) => {
    //   console.log("error", error);
    //   console.log("err", { error });
    // });

    // let data = await response.json();
    // let parsedData = data.bot.trim();

    // x
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1500);

    // x
    setChatGptResponse(prompt.response);
    // setChatGptResponse(parsedData);

    // update proof of work

    if (
      (!isEmpty(databaseUserDocument) || !isEmpty(userDocumentReference)) &&
      !isDemo
    ) {
      //doesnt return obj, so update firebase and react seperately
      await updateDoc(userDocumentReference, {
        work: databaseUserDocument?.work + prompt.work,
      });

      // update global work
      await updateDoc(globalDocumentReference, {
        total: globalWorkCounter + prompt.work,
      });

      //copy it to react
      let docCopy = databaseUserDocument;
      docCopy.work = databaseUserDocument?.work + prompt.work;
      setDatabaseUserDocument(docCopy);

      let globalCopy = globalWorkCounter;
      globalCopy = globalWorkCounter + prompt.work;
      setGlobalWorkCounter(globalCopy);
    } else {
      //copy it to react
      let docCopy = databaseUserDocument;
      docCopy.work = databaseUserDocument?.work + prompt.work;
      setDatabaseUserDocument(docCopy);

      let globalCopy = globalWorkCounter;
      globalCopy = globalWorkCounter + prompt.work;
      setGlobalWorkCounter(globalCopy);
    }

    setLoadingMessage("");
  };

  return (
    <div
      onSubmit={handleSubmit}
      style={{
        // width: "fit-content",

        transition: "0.3s all ease-in-out",
        color: "white",
      }}
    >
      <PromptMessage
        promptMessage={promptMessage}
        patreonObject={patreonObject}
      />
      <br />

      <Roxana
        loadingMessage={loadingMessage}
        loadingStates={loadingStates}
        chatGptResponse={chatGptResponse}
        patreonObject={patreonObject}
        isDemo={isDemo}
      />
      <br />
      {/* prompts */}
      <Prompts
        //roxana
        loadingMessage={loadingMessage}
        patreonObject={patreonObject}
        handleSubmit={handleSubmit}
        chatGptResponse={chatGptResponse}
        isSpanishActive={isSpanishActive}
        displayName={displayName}
        databaseUserDocument={databaseUserDocument}
        computePercentage={computePercentage}
        globalWorkCounter={globalWorkCounter}

        //pow
      />
      <br />
    </div>
  );
};
