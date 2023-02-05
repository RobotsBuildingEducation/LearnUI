import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import Patreon from "../Patreon/Patreon";

export const Roxana = ({
  loadingMessage,
  loadingStates,
  chatGptResponse,
  patreonObject,
}) => {
  console.log("x", patreonObject.fileSource);

  let RoxanaLoadingAnimation = () => {
    return (
      <div>
        <img
          width="150px"
          src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674214037/27a54381577040049f440eaffe1fc901_1_hjbczg.gif"
        />
        {loadingMessage}
      </div>
    );
  };

  let RoxanaIntroText = () => {
    return (
      <div>
        hola!! i'm ms. roxana, a teacher built with OpenAI. I help Sheilfer
        build RO.B.E by helping you learn more with useful prompts 😊
        <br />
        <br />
        Check out our latest sponsors:{" "}
        <a
          onClick={() => {
            window.open("https://www.google.com");
          }}
          target="_blank"
          style={{ color: "white", textDecoration: "underline" }}
        >
          RO.B.E
        </a>
      </div>
    );
  };
  return (
    <div
      // Gray response message by the AI
      style={{
        backgroundColor: loadingMessage ? "black" : "#2C2C2E",
        color: "white",

        display: "flex",
        justifyContent: "flex-start",
        textAlign: "left",
        padding: 20,
        width: "82.5%",
        borderRadius: "30px",

        // overflow: "auto",
        // maxWidth: "80%",
        // maxWidth: 300,
        // maxWidth: loadingStates.demonstrate ? "100%" : "75%",
        // minWidth: loadingStates.demonstrate ? "100%" : "75%",
      }}
    >
      {/* width: "100%", */}
      <div style={{ display: "flex" }}>
        {loadingMessage ? (
          <RoxanaLoadingAnimation />
        ) : chatGptResponse ? (
          "" // empty
        ) : (
          <RoxanaIntroText />
        )}
        {loadingMessage.length < 1 &&
        chatGptResponse &&
        (loadingStates.guide || loadingStates.ask) ? (
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {chatGptResponse
              .match(/\b\d+\.\s+(.+?)(?=\s*\b\d+\. |\s*$)/g)
              ?.map((item) => (
                <li style={{ paddingBottom: 24 }}>{item}</li>
              ))}
          </ul>
        ) : loadingMessage.length < 1 &&
          chatGptResponse &&
          loadingStates.patreon ? (
          <Patreon patreonObject={patreonObject} />
        ) : loadingMessage.length < 1 &&
          chatGptResponse &&
          loadingStates.demonstrate ? (
          <div>
            <CodeBlock
              text={chatGptResponse}
              language={patreonObject["demonstratePrompt"]
                .split(" ")
                .slice(-1)[0]
                ?.slice(0, -1)}
              showLineNumbers={true}
              theme={dracula}
            />
          </div>
        ) : loadingMessage.length < 1 &&
          ((chatGptResponse && loadingStates.summarize) ||
            (chatGptResponse && loadingStates.define) ||
            (chatGptResponse && loadingStates.inspire) ||
            (chatGptResponse && loadingStates.patreon) ||
            (chatGptResponse && loadingStates.quiz) ||
            (chatGptResponse && loadingStates.anything)) ? (
          <div>{chatGptResponse}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
