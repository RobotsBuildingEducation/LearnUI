import { StyledPromptButton } from "../../styles/lazyStyles";

export const Prompts = ({
  loadingMessage,
  patreonObject,
  handleSubmit,
  chatGptResponse,
  isSpanishActive,
}) => {
  let promptKeys = Object.keys(patreonObject.prompts);

  console.log("patr", patreonObject);
  let promptMap = promptKeys.map((prompt) => (
    <StyledPromptButton
      loadingMessage={loadingMessage}
      // style={{
      //   backgroundColor: loadingMessage ? "#48484A" : "black",
      //   cursor: loadingMessage ? "not-allowed" : "grab",
      //   color: "white",
      //   border: "2px solid #48484A",
      //   borderRadius: "10px",
      //   textAlign: "left",
      //   padding: 10,
      //   width: "200px",
      //   marginTop: "24px",
      //   transition: "0.15s all ease-in-out",
      //   transform: "scale(1.1)",
      //   // maxWidth: "80%",
      //   // maxWidth: "100%",
      //   // minWidth: "100%",
      // }}
      onClick={(event) => {
        if (loadingMessage) {
        } else {
          handleSubmit(event, patreonObject.prompts[prompt], prompt);
        }
      }}
    >
      {patreonObject.prompts[prompt].icon}{" "}
      {patreonObject.prompts[prompt].action}
    </StyledPromptButton>
  ));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      {promptMap}
      <div
        style={{
          backgroundColor:
            loadingMessage || !chatGptResponse ? "#48484A" : "black",
          border: "2px solid #48484A",
          cursor: loadingMessage || !chatGptResponse ? "not-allowed" : "grab",
          color: "white",
          borderRadius: "10px",
          textAlign: "left",
          padding: 10,
          width: "200px",
          marginTop: "24px",
          // maxWidth: "100%",
          // minWidth: "100%",
        }}
        onClick={(event) => {
          if (loadingMessage || !chatGptResponse) {
          } else {
            handleSubmit(
              event,
              `ms. roxana, can you please translate your response to spanish? ${chatGptResponse}`,
              "languageToggle"
            );
          }
        }}
      >
        &#127758; {isSpanishActive ? "in English" : "en español"}
      </div>
    </div>
  );
};
