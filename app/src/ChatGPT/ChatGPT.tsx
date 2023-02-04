import { useState, useEffect } from "react";

import { CodeBlock, dracula } from "react-code-blocks";
import { PromptMessage } from "./PromptMessage/PromptMessage";
import { Prompts } from "./Prompts/Prompts";
import { Roxana } from "./Roxana/Roxana";

export const ChatGPT = ({ patreonObject }) => {
  const [promptMessage, setPromptMessage] = useState("");
  const [isSpanishActive, setIsSpanishActive] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [chatGptResponse, setChatGptResponse] = useState("");
  const [loadingStates, setLoadingStates] = useState({
    summarize: false,
    studyGuide: false,
    //i guess spanish
    anything: false,
    quick: false,
    demonstrate: false,
    faq: false,
  });

  useEffect(() => {
    setLoadingStates({
      summarize: false,
      studyGuide: false,
      //i guess spanish. Now i know. This used to handle general translations to spanish and "anything" from an text input field that was later disabled because we can't trust users not to break the rules lol
      anything: false,
      quick: false,
      faq: false,
      quiz: false,
      demonstrate: false,
      inspireCuriousity: false,
    });
    setChatGptResponse("");
  }, [patreonObject]);

  const handleSubmit = async (event, prompt = null, promptType = null) => {
    event.preventDefault();

    if (promptType === "languageToggle") {
      setIsSpanishActive(!isSpanishActive);
    }
    if (promptType === "summarize") {
      setLoadingStates({
        summarize: true,
        studyGuide: false,
        anything: false,
        quick: false,
        faq: false,
        demonstrate: false,
        quiz: false,
        inspireCuriousity: false,
      });

      setLoadingMessage("summarizing...");
    } else if (promptType === "studyGuide") {
      setLoadingStates({
        summarize: false,
        quick: false,
        studyGuide: true,
        anything: false,
        faq: false,
        demonstrate: false,
        quiz: false,
        inspireCuriousity: false,
      });

      setLoadingMessage("organizing...");
    } else if (promptType === "quick") {
      setLoadingStates({
        summarize: false,
        quick: true,
        studyGuide: false,
        anything: false,
        faq: false,
        demonstrate: false,
        quiz: false,
        inspireCuriousity: false,
      });

      setLoadingMessage("defining...");
    } else if (promptType === "inspireCuriousity") {
      setLoadingStates({
        summarize: false,
        quick: false,
        studyGuide: false,
        anything: false,
        faq: false,
        demonstrate: false,
        quiz: false,
        inspireCuriousity: true,
      });

      setLoadingMessage("discovering...");
    } else if (promptType === "demonstrate") {
      setLoadingStates({
        summarize: false,
        quick: false,
        studyGuide: false,
        anything: false,
        faq: false,
        demonstrate: true,
        quiz: false,
        inspireCuriousity: false,
      });

      setLoadingMessage("creating...");
    } else if (promptType === "faq") {
      setLoadingStates({
        summarize: false,
        quick: false,
        studyGuide: false,
        anything: false,
        faq: true,
        demonstrate: false,
        quiz: false,
        inspireCuriousity: false,
      });

      setLoadingMessage("curating...");
    } else if (promptType === "quiz") {
      setLoadingStates({
        summarize: false,
        quick: false,
        studyGuide: false,
        anything: false,
        faq: true,
        demonstrate: false,
        quiz: true,
        inspireCuriousity: false,
      });

      setLoadingMessage("testing...");
    } else {
      // loads in spanish. See context about "anything"
      setLoadingStates({
        summarize: false,
        studyGuide: false,
        anything: true,
        quick: false,
        demonstrate: false,
        quiz: false,
        faq: false,
        inspireCuriousity: false,
      });
      setLoadingMessage("no mms...");
    }

    const response = await fetch(
      "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      }
    ).catch((error) => {
      console.log("error", error);
      console.log("err", { error });
    });

    let data = await response.json();

    let parsedData = data.bot.trim();

    if (promptType === "demonstrate") {
      setChatGptResponse(parsedData);
    } else {
      setChatGptResponse(parsedData);
    }

    // If the request was successful, clear the input field
    if (response.status === 200) {
    }

    setLoadingMessage("");
  };

  return (
    <div
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        transition: "0.3s all ease-in-out",
        margin: "auto",
        color: "white",
      }}
    >
      <PromptMessage promptMessage={promptMessage} />
      <br />

      <Roxana
        loadingMessage={loadingMessage}
        loadingStates={loadingStates}
        chatGptResponse={chatGptResponse}
        patreonObject={patreonObject}
      />
      <br />
      {/* prompts */}
      <Prompts
        loadingMessage={loadingMessage}
        patreonObject={patreonObject}
        handleSubmit={handleSubmit}
        chatGptResponse={chatGptResponse}
        isSpanishActive={isSpanishActive}
      />
      <br />
    </div>
  );
};

export default ChatGPT;
