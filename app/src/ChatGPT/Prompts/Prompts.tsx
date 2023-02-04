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
    <div
      style={{
        backgroundColor: loadingMessage ? "#48484A" : "black",
        cursor: loadingMessage ? "not-allowed" : "grab",
        color: "white",
        border: "2px solid #48484A",
        borderRadius: "10px",
        textAlign: "left",
        padding: 10,
        maxWidth: "75%",
        minWidth: "75%",
      }}
      onClick={(event) => {
        if (loadingMessage) {
        } else {
          handleSubmit(event, patreonObject.prompts[prompt], prompt);
        }
      }}
    >
      {patreonObject.prompts[prompt].icon}{" "}
      {patreonObject.prompts[prompt].action}
    </div>
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
          maxWidth: "75%",
          minWidth: "75%",
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
