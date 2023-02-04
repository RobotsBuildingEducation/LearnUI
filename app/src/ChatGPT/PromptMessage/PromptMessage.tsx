export const PromptMessage = ({ promptMessage }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div
        style={{
          backgroundColor: "#0C84FF",
          color: "white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          padding: 10,
          maxWidth: "75%",
          minWidth: "75%",
        }}
        id={"scrollPoint"}
      >
        {promptMessage ? (
          promptMessage
        ) : (
          <div>
            hola! i'm ms. roxana, a teacher built with OpenAI. I help Sheilfer
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
        )}
      </div>
    </div>
  );
};
