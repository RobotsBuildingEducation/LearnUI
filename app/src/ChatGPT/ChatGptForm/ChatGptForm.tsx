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

    let data = await response.json();

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
    // this form is no longer needed.
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        transition: "0.3s all ease-in-out",
        margin: "auto",
        color: "white",
      }}
    >
      {/* <div style={{ maxWidth: "75%", minWidth: "75%", display: "flex" }}>
        &#129417;
      </div> */}
      {/* <img
        width="125px"
        // height="100px"
        src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674131250/unnamed_qee3gg.jpg"
      /> */}
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
        >
          {/* {
          displayMessages.map(item =>(<><br/><div>{item}</div></>))
        } */}

          {displayMessages.length > 0
            ? displayMessages[displayMessages.length - 1]
            : "..."}
        </div>
      </div>
      <br />
      {/* <div style={{ width: "100%", display: "flex" }}>roxana &#128054;</div> */}

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
          maxWidth: "75%",
          minWidth: "75%",
        }}
      >
        <div style={{ width: "100%", display: "flex" }}>
          {loadingMessage ? (
            <img
              width="150px"
              src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674214037/27a54381577040049f440eaffe1fc901_1_hjbczg.gif"
            /> // ? loadingMessage
          ) : aiResponse ? (
            ""
          ) : (
            "Use the prompts so ms. roxana can help :)"
          )}
          {loadingMessage.length < 1 &&
          aiResponse &&
          loadingStates.studyGuide ? (
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
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
      </div>

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
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
              handleSubmit(event, patreonObject.summarizePrompt, "summarize");
            }
          }}
        >
          summarize &#128218;
        </div>
        <br />

        <div
          style={{
            backgroundColor: loadingMessage ? "#48484A" : "black",
            border: "2px solid #48484A",
            cursor: loadingMessage ? "not-allowed" : "grab",
            color: "white",
            borderRadius: "10px",
            textAlign: "left",
            padding: 10,
            maxWidth: "75%",
            minWidth: "75%",
          }}
          onClick={(event) => {
            if (loadingMessage) {
            } else {
            }
            handleSubmit(event, patreonObject.studyGuidePrompt, "studyGuide");
          }}
        >
          study guide &#129309;
        </div>
        <br />
        {aiResponse ? (
          <div
            style={{
              backgroundColor: loadingMessage ? "#48484A" : "black",
              border: "2px solid #48484A",
              cursor: loadingMessage ? "not-allowed" : "grab",
              color: "white",
              borderRadius: "10px",
              textAlign: "left",
              padding: 10,
              maxWidth: "75%",
              minWidth: "75%",
            }}
            onClick={(event) => {
              if (loadingMessage) {
              } else {
                handleSubmit(
                  event,
                  `ms. roxana, can you please translate your response to spanish? ${aiResponse}`
                );
              }
            }}
          >
            en español &#127758;
          </div>
        ) : null}
      </div>
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

        {/* <button style={{        backgroundColor: '#0C84FF',
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
