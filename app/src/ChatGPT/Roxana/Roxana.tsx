import { CodeBlock, dracula } from "react-code-blocks";

export const Roxana = ({
  loadingMessage,
  loadingStates,
  chatGptResponse,
  patreonObject,
}) => {
  return (
    <div
      style={{
        backgroundColor: loadingMessage ? "black" : "#2C2C2E",
        color: "white",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "flex-end",
        textAlign: "left",
        padding: 10,
        overflow: "auto",
        // maxWidth: 300,
        maxWidth: loadingStates.demonstrate ? "100%" : "75%",
        minWidth: loadingStates.demonstrate ? "100%" : "75%",
      }}
    >
      <div style={{ width: "100%", display: "flex" }}>
        {loadingMessage ? (
          <div>
            <img
              width="150px"
              src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674214037/27a54381577040049f440eaffe1fc901_1_hjbczg.gif"
            />
            {loadingMessage}
          </div> // ? loadingMessage
        ) : chatGptResponse ? (
          ""
        ) : (
          "..."
        )}
        {/* handle no state or loading -> handle study guide formatting -> handle general case (summarize, spanish "anything", quick) */}
        {loadingMessage.length < 1 &&
        chatGptResponse &&
        (loadingStates.studyGuide || loadingStates.faq) ? (
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {chatGptResponse
              .match(/\b\d+\.\s+(.+?)(?=\s*\b\d+\. |\s*$)/g)
              ?.map((item) => (
                <li style={{ paddingBottom: 24 }}>{item}</li>
              ))}
          </ul>
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
            (chatGptResponse && loadingStates.quick) ||
            (chatGptResponse && loadingStates.inspireCuriousity) ||
            (chatGptResponse && loadingStates.anything)) ? (
          <div>{chatGptResponse}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
