import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import Spinner from "react-bootstrap/Spinner";
import Patreon from "../Patreon/Patreon";

// Important: This component needs to work with more custom prompts. It's currently too limited in scope and will affect other subjects like stock market content.
export const Roxana = ({
  loadingMessage,
  loadingStates,
  chatGptResponse,
  patreonObject,
  isDemo,
}) => {
  let RoxanaLoadingAnimation = () => {
    return (
      <div>
        <Spinner animation="grow" variant="info" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <img
          width="150px"
          src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674214037/27a54381577040049f440eaffe1fc901_1_hjbczg.gif"
        />
        <Spinner animation="grow" variant="primary" size="sm">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  };

  let RoxanaIntroText = () => {
    if (isDemo) {
      return (
        <div>
          i'm ms. roxana, a teacher built with OpenAI. I help Sheilfer build
          RO.B.E by helping you learn more with useful prompts 😊
          <br />
          <br />
          Advertisting slots are available to all subscribers. I'm creating an
          education service that's carefully built with banking and community in
          mind.{" "}
          {isDemo ? (
            <div>
              <br />
              The following advertisement has no affiliation with RO.B.E. The
              community has mentioned his work to me on multiple occasions. His
              values are aligned with mine.
              <br />
              <br />I recommend it if you want to spend more time on each lesson
              and want a{" "}
              <b>
                <i>much stronger</i>
              </b>{" "}
              employment network. It's free. Robots Building Education is a
              financial technology company meant to decentralize finance for
              schools.
              <br />
              <br />
            </div>
          ) : (
            ""
          )}
          {isDemo ? (
            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <a
                onClick={() => {
                  window.open("https://leonnoel.com/100devs/");
                }}
                target="_blank"
                style={{
                  color: "white",
                  textDecoration: "underline",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                https://leonnoel.com/100devs/
                <img
                  src="https://leonnoel.com/photo2.png"
                  style={{
                    boxShadow:
                      "0 10px 20px rgba(0,0,0,1), 0 6px 6px rgba(0,0,0,1)",
                    height: 150,
                    width: 150,
                    borderRadius: "12px",
                    marginTop: 12,
                  }}
                />
              </a>
            </div>
          ) : (
            <span>
              If you want to advertise on RO.B.E, please contact me in
              <a href="https://www.patreon.com/RobotsBuildingEducation">
                Patreon
              </a>
            </span>
          )}
          <br />
          <br />
        </div>
      );
    }
    return (
      <div>
        {patreonObject?.header === "Indocumentadofy"
          ? "¡¡Hola!! Soy miss roxana, una maestra construida con OpenAI. Ayudo a Sheilfer a construir RO.B.E ayudándote a aprender más con indicaciones útiles hola!! 😊"
          : "i'm ms. roxana, a teacher built with OpenAI. I help Sheilfer build RO.B.E by helping you learn more with useful prompts 😊"}
        <br />
        <br />
        {patreonObject?.header === "Indocumentadofy"
          ? "Echa un vistazo a nuestros últimos patrocinadores: ¡¡YO!! 😊"
          : "Check out our latest sponsors: ME!! 😊"}{" "}
        <a
          onClick={() => {
            window.open("https://www.patreon.com/RobotsBuildingEducation");
          }}
          target="_blank"
          style={{
            color: "white",
            textDecoration: "underline",
            cursor: "grab",
          }}
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
        maxWidth:
          patreonObject.prompts.patreon.icon === "►" ? "617.5px" : "82.5%",

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,

        // overflow: "auto",
        // maxWidth: "80%",
        // maxWidth: 300,
        // maxWidth: loadingStates.demonstrate ? "100%" : "75%",
        // minWidth: loadingStates.demonstrate ? "100%" : "75%",
      }}
    >
      {/* Loading */}
      <div style={{ display: "flex" }}>
        {loadingMessage ? (
          <RoxanaLoadingAnimation />
        ) : chatGptResponse ? (
          "" // empty
        ) : (
          <RoxanaIntroText />
        )}
        {/* message */}
        {loadingMessage.length < 1 &&
        chatGptResponse &&
        (loadingStates.guide || loadingStates.ask || loadingStates.quiz) ? (
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            {chatGptResponse
              ?.match(/\b\d+\.\s+(.+?)(?=\s*\b\d+\. |\s*$)/g)
              ?.map((item) => {
                return <li style={{ paddingBottom: 24 }}>{item}</li>;
              })}
          </ul>
        ) : loadingMessage.length < 1 &&
          chatGptResponse &&
          loadingStates.patreon ? (
          <Patreon patreonObject={patreonObject} />
        ) : loadingMessage.length < 1 &&
          chatGptResponse &&
          loadingStates.demonstrate &&
          patreonObject?.hasCode ? (
          <div
            style={{
              // border: "1px solid red",
              position: "relative",
            }}
          >
            <CodeBlock
              text={chatGptResponse}
              language={patreonObject?.prompts?.demonstrate?.request
                ?.split(" ")
                .slice(-1)[0]
                ?.slice(0, -1)}
              showLineNumbers={true}
              theme={dracula}
              style={{ position: "relative", border: "1px solid yellow" }}
            />
          </div>
        ) : loadingMessage.length < 1 &&
          ((chatGptResponse && loadingStates.summarize) ||
            (chatGptResponse && loadingStates.define) ||
            (chatGptResponse && loadingStates.inspire) ||
            (chatGptResponse && loadingStates.patreon) ||
            (chatGptResponse && loadingStates.market) ||
            (chatGptResponse && loadingStates.demonstrate) ||
            (chatGptResponse && loadingStates.anything)) ? (
          <div>{chatGptResponse}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
