// @ts-nocheck
import { useState, useEffect } from "react";
import axios from "axios";

let ChatGptMessageInput = ({ patreonObject }) => {
  const [message, setMessage] = useState("");
  const [displayMessages, setDisplayMessages] = useState([]);

  const [prompt, setPrompt] = useState(null);

  const [loadingStates, setLoadingStates] = useState({
    summarize: false,
    studyGuide: false,
    anything: false,
  });

  const [loadingMessage, setLoadingMessage] = useState("");

  const [aiResponse, setAiResponse] = useState("");

  const handleSubmit = async (event, prompt = null, promptType = null) => {
    event.preventDefault();

    console.log("PROMPT", prompt);

    if (promptType === "summarize") {
      setLoadingStates({
        summarize: true,
        studyGuide: false,
        anything: false,
      });

      setLoadingMessage("Generating a summary, pls wait");
    } else if (promptType === "studyGuide") {
      setLoadingStates({
        summarize: false,
        studyGuide: true,
        anything: false,
      });

      setLoadingMessage("Generating a study guide, pls wait");
    } else {
      setLoadingStates({
        summarize: false,
        studyGuide: false,
        anything: true,
      });
      setLoadingMessage(
        "Figuring out what you are talking about and responding usefully, I hope. Give me a couple seconds."
      );
    }

    setDisplayMessages([...displayMessages, prompt || message]);

    const response = await fetch(
      "https://us-central1-learn-robotsbuildingeducation.cloudfunctions.net/app/prompt",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt || message,
        }),
      }
    ).catch((error) => {
      console.log("error", error);
      console.log("err", { error });
    });

    console.log("responding", response);

    let data = await response.json();
    console.log("data", response);
    let parsedData = data.bot.trim();

    setAiResponse(parsedData);

    // If the request was successful, clear the input field
    if (response.status === 200) {
      setMessage("");
    }

    // }catch(error){
    //   console.log("error", error);
    //   console.log("{error}", {error});
    // }finally{
    //     setLoadingMessage('');
    // }

    setLoadingMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        transition: "0.3s all ease-in-out",
        margin: "auto",
        color: "white",
      }}
    >
      <div style={{ width: "100%", display: "flex" }}>&#129417;</div>
      <div
        style={{
          backgroundColor: "#8e8e93",
          color: "white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          padding: 10,
        }}
      >
        {/* {
          displayMessages.map(item =>(<><br/><div>{item}</div></>))
        } */}

        {displayMessages.length > 0
          ? displayMessages[displayMessages.length - 1]
          : "..."}
      </div>
      <br />
      <div style={{ width: "100%", display: "flex" }}>RO.B.E &#128054;</div>
      <div
        style={{
          backgroundColor: "#147efb",
          color: "white",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "flex-end",
          textAlign: "right",
          padding: 10,
          overflow: "auto",
          // maxWidth: 300,
          minWidth: "100%",
        }}
      >
        {loadingMessage
          ? loadingMessage
          : aiResponse
          ? ""
          : "Use the prompts so ChatGPT can help :)"}

        {loadingMessage.length < 1 && aiResponse && loadingStates.studyGuide ? (
          <ul style={{ listStyleType: "none" }}>
            {aiResponse
              .match(/\b\d+\.\s+(.+?)(?=\s*\b\d+\. |\s*$)/g)
              ?.map((item) => (
                <li style={{ paddingBottom: 24 }}>{item}</li>
              ))}
          </ul>
        ) : loadingMessage.length < 1 &&
          ((aiResponse && loadingStates.summarize) ||
            (aiResponse && loadingStates.anything)) ? (
          <div>{aiResponse}</div>
        ) : (
          ""
        )}
      </div>

      <br />

      <div
        style={{
          backgroundColor: "#5fc9f8",
          color: "white",
          borderRadius: "10px",
          textAlign: "left",
          padding: 10,
          minWidth: "100%",
        }}
        onClick={(event) =>
          handleSubmit(event, patreonObject.summarizePrompt, "summarize")
        }
      >
        summarize &#128218;
      </div>
      <br />

      <div
        style={{
          backgroundColor: "#5fc9f8",
          color: "white",
          borderRadius: "10px",
          textAlign: "left",
          padding: 10,
          minWidth: "100%",
        }}
        onClick={(event) =>
          handleSubmit(event, patreonObject.studyGuidePrompt, "studyGuide")
        }
      >
        study guide &#129309;
      </div>

      <br />

      {aiResponse ? (
        <div
          style={{
            backgroundColor: "#5fc9f8",
            color: "white",
            borderRadius: "10px",
            textAlign: "left",
            padding: 10,
            minWidth: "100%",
          }}
          onClick={(event) =>
            handleSubmit(
              event,
              `RO.B.E, can you translate your response to spanish? ${aiResponse}`
            )
          }
        >
          en español &#127758;
        </div>
      ) : null}

      <br />
      <div
        style={{
          display: "flex",
        }}
      >
        {/* <textarea
          style={{width: '100%', marginRight: 10 }}

          value={message}
          onChange={(event) => setMessage(event.target.value)}
        /> */}

        {/* <button style={{        backgroundColor: '#147efb',
        color: 'white',
        fontSize: '32px',
        fontWeight: 'bolder',
        borderRadius: '10px',
        display: 'flex',}}type="submit">&#42779;
 &#9889;
</button> */}
      </div>
    </form>
  );
};

export default ChatGptMessageInput;
