import { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";

import "./App.css";
import Patreon from "./Patreon/Patreon";
import ChatGPT from "./ChatGPT/ChatGPT";

import { CourseMap } from "./common/commonElements";

import { Subjects } from "./Subjects/Subjects";
import { Chapters } from "./Chapters/Chapters";

function App() {
  const [patreonObject, setPatreonObject] = useState<Record<string, any>>({});
  const [currentSubject, setCurrentSubject] = useState("");
  const [isCodingVisible, setIsCodingVisible] = useState(false);
  const [isSocialMediaVisible, setIsSocialMediaVisible] = useState(false);
  const [isDineroVisible, setIsDineroVisible] = useState(false);
  const [is26thStreetVisible, setIs26thStreetVisible] = useState(false);
  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);
  // console.log("patreon object", patreonObject);

  const handleChapterSelection = (course, item) => {
    console.log("Topic");
    setPatreonObject(CourseMap[course][item]);
    setIsCodingVisible(false);
    setIsSocialMediaVisible(false);
    setIsDineroVisible(false);
    setCurrentSubject("");
  };

  const handleSubjectSelection = (event) => {
    console.log("");
    if (event.target.id === "Coding") {
      setIsCodingVisible(true);
      setIsSocialMediaVisible(false);
      setIs26thStreetVisible(false);
      setIsDineroVisible(false);
      setCurrentSubject(event.target.id);
    } else if (event.target.id === "Social Media") {
      setIsCodingVisible(false);
      setIsSocialMediaVisible(true);
      setIs26thStreetVisible(false);
      setIsDineroVisible(false);
      setCurrentSubject(event.target.id);
    } else if (event.target.id === "Dinero") {
      setIsCodingVisible(false);
      setIsSocialMediaVisible(false);
      setIs26thStreetVisible(false);
      setIsDineroVisible(true);
      setCurrentSubject(event.target.id);
    } else if (event.target.id === "26th Street") {
      setIsCodingVisible(false);
      setIsSocialMediaVisible(false);
      setIsDineroVisible(false);
      setIs26thStreetVisible(true);
      setCurrentSubject(event.target.id);
    }

    setPatreonObject({});
  };

  const handleZeroKnowledgePassword = (event) => {
    if (event.target.value === import.meta.env.VITE_PATREON_PASSCODE) {
      setIsZeroKnowledgeUser(true);
    }
  };

  useEffect(() => {
    //check local storage

    if (
      localStorage.getItem("patreonPasscode") ===
      import.meta.env.VITE_PATREON_PASSCODE
    ) {
      setIsZeroKnowledgeUser(true);
    } else {
      setIsZeroKnowledgeUser(false);
    }
  }, []);

  return (
    <div className="App">
      <h3 style={{ color: "white" }}>Robots Building Education</h3>
      <img
        width="400px"
        src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674212147/Screen_Shot_2023-01-20_at_2.55.21_AM_ipay84.png"
      />

      <br />

      {!isZeroKnowledgeUser ? (
        <div>
          <h2>Enter Passcode</h2>
          <input onChange={handleZeroKnowledgePassword} />
          <br />
          <br />
          <a
            href="https://www.patreon.com/posts/77944323"
            target="_blank"
            style={{ textDecoration: "underline", color: "white" }}
          >
            Don't know the passcode?
          </a>
        </div>
      ) : null}

      {isZeroKnowledgeUser ? (
        <>
          <div>⚠️ OpenAI's chatGPT feature is currently disabled.</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {/* navigate */}
            <div>
              <Subjects handleSubjectSelection={handleSubjectSelection} />

              <Chapters
                handleChapterSelection={handleChapterSelection}
                isCodingVisible={isCodingVisible}
                isSocialMediaVisible={isSocialMediaVisible}
                isDineroVisible={isDineroVisible}
                is26thStreetVisible={is26thStreetVisible}
                currentSubject={currentSubject}
              />
            </div>

            <br />
          </div>

          {/* selected header */}
          {!isEmpty(patreonObject.button) ? (
            <h2 style={{ color: "white" }}> {patreonObject?.button || ""} </h2>
          ) : null}

          {/* render chatbot */}

          <div style={{ border: "1px solid red", display: "flex" }}>
            <div>
              {isEmpty(patreonObject) ? null : (
                <ChatGPT patreonObject={patreonObject} />
              )}
            </div>

            <br />

            {/* render patreon content */}
            <div>
              {isEmpty(patreonObject) ? null : (
                <Patreon patreonObject={patreonObject} />
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
