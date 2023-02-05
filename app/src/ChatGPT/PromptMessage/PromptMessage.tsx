export const PromptMessage = ({ promptMessage, patreonObject }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <div
        style={{
          backgroundColor: "#0C84FF",
          color: "white",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          // minWidth: ,
          padding: 20,
          // padding: 10,
          // maxWidth: "100%",
          // minWidth: "100%",
          maxWidth: "85%",
          minWidth: "fit-content",
        }}
        id={"scrollPoint"}
      >
        {promptMessage ? promptMessage : <div>let's learn!</div>}
      </div>
    </div>
  );
};
