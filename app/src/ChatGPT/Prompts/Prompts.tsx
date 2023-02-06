import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CodeBlock, dracula } from "react-code-blocks";
import ReactJson from "react-json-view";
import { renderWithTooltip } from "../../common/uiSchema";
import { StyledPromptButton } from "../../styles/lazyStyles";
import { DiscordButton } from "./DiscordButton/DiscordButton";

export const Prompts = ({
  loadingMessage,
  patreonObject,
  handleSubmit,
  chatGptResponse,
  isSpanishActive,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let promptKeys = Object.keys(patreonObject.prompts);

  let promptMap = promptKeys.map((prompt) => (
    <StyledPromptButton
      loadingMessage={loadingMessage}
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
  //render with tooltips : TBD
  // let promptMap = promptKeys.map((prompt) =>
  //   renderWithTooltip(
  //     <StyledPromptButton
  //       loadingMessage={loadingMessage}
  //       onClick={(event) => {
  //         if (loadingMessage) {
  //         } else {
  //           handleSubmit(event, patreonObject.prompts[prompt], prompt);
  //         }
  //       }}
  //     >
  //       {patreonObject.prompts[prompt].icon}{" "}
  //       {patreonObject.prompts[prompt].action}
  //     </StyledPromptButton>,
  //     <div style={{ border: "1px solid pink" }}>
  //       <h3>Prompt Engineering</h3>
  //       <h5 style={{ border: "1px solid green" }}>
  //         Request&nbsp;{patreonObject.prompts[prompt].icon}
  //         <br />
  //         <div>{patreonObject.prompts[prompt].action}</div>
  //       </h5>
  //     </div>,
  //     "left",
  //     {
  //       display: "flex",
  //       justifyContent: "center",
  //       marginRight: "24px",
  //       border: "1px solid red",
  //     }
  //   )
  // );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",
      }}
    >
      <Button variant="primary" onClick={() => setIsModalOpen(true)}>
        🔎 View Prompt Engine
      </Button>
      <br />
      <DiscordButton />
      <br />
      <Modal
        centered
        fullscreen={true}
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>AI Prompt Engineering</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>What is this?</h3>
          <p>
            This is for students and teachers who are curious of how the AI is
            prompted and fine-tuned over time.
          </p>

          <ReactJson enableClipboard src={patreonObject} quotesOnKeys={false} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Thanks!
          </Button>
        </Modal.Footer>
      </Modal>
      {renderWithTooltip(<div>🏦: 0</div>, "Proof of work", "left", {
        border: "1px solid #F2D466",
        marginBottom: "6px",
        borderRadius: "10px",
        backgroundColor: "#f2a900",
      })}
      {promptMap}
      {/* Spanish is disabled atm. */}
      <div
        style={{
          backgroundColor: true ? "#48484A" : "black",
          border: "2px solid #48484A",
          cursor: true ? "not-allowed" : "grab",
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
          if (true) {
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
