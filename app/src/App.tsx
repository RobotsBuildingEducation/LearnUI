import { useState } from "react";
import isEmpty from "lodash/isEmpty";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Patreon from "./Patreon/Patreon";
import ChatGPT from "./ChatGPT/ChatGPT";
import {
  StyledNavigationContainer,
  StyledSubject,
  StyledTopic,
  StyledTopicContainer,
} from "./styles/lazyStyles";
import { CourseMap } from "./common/commonElements";

function App() {
  const [count, setCount] = useState(0);
  const [patreonObject, setPatreonObject] = useState({});
  const [currentSubject, setCurrentSubject] = useState("");

  // console.log("patreon object", patreonObject);
  console.log("Subject", currentSubject);
  return (
    <div className="App">
      <div>
        <br />
        <h3 style={{ color: "white" }}>Robots Building Education</h3>
        <img
          width="400px"
          src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674212147/Screen_Shot_2023-01-20_at_2.55.21_AM_ipay84.png"
        />
      </div>
      <div>
        {/* list of subjects */}
        <StyledNavigationContainer
          onClick={(event) => {
            console.log("event.target", event.target);
            console.log("event current target", event.currentTarget);
            console.log("ID", event.target.id);
            setCurrentSubject(event.target.id);
            setPatreonObject("");
          }}
        >
          <StyledSubject id={"Coding"} active={true}>
            Coding
          </StyledSubject>

          <StyledSubject id={"Social Media"} active={true}>
            Social Media
          </StyledSubject>

          <StyledSubject id={"Dinero"} active={true}>
            Dinero
            <br />
            {/* &#128679; */}
          </StyledSubject>
        </StyledNavigationContainer>

        {/* If it's rendering coding lesson */}
        {currentSubject === "Coding" ? (
          <StyledTopicContainer>
            <h3>Crash Course</h3>
            {Object.keys(CourseMap["Coding"]).map((item) => (
              <StyledTopic
                key={CourseMap["Coding"][item].button}
                onClick={() => setPatreonObject(CourseMap["Coding"][item])}
              >
                {CourseMap["Coding"][item].button}
              </StyledTopic>
            ))}
          </StyledTopicContainer>
        ) : null}

        {currentSubject === "Coding" ? (
          <StyledTopicContainer>
            <h3>Projects x Experience</h3>
            {Object.keys(CourseMap["Projects x Experience"]).map((item) => (
              <StyledTopic
                key={CourseMap["Projects x Experience"][item].button}
                onClick={() =>
                  setPatreonObject(CourseMap["Projects x Experience"][item])
                }
              >
                {CourseMap["Projects x Experience"][item].button}
              </StyledTopic>
            ))}
          </StyledTopicContainer>
        ) : null}

        {currentSubject === "Social Media" ? (
          <StyledTopicContainer>
            {Object.keys(CourseMap["Social Media"]).map((item) => (
              <StyledTopic
                key={CourseMap["Social Media"][item].button}
                onClick={() =>
                  setPatreonObject(CourseMap["Social Media"][item])
                }
              >
                {CourseMap["Social Media"][item].button}
              </StyledTopic>
            ))}
          </StyledTopicContainer>
        ) : null}

        {currentSubject === "Dinero" ? (
          <StyledTopicContainer>
            {Object.keys(CourseMap["Dinero"]).map((item) => (
              <StyledTopic
                key={CourseMap["Dinero"][item].button}
                onClick={() => setPatreonObject(CourseMap["Dinero"][item])}
              >
                {CourseMap["Dinero"][item].button}
              </StyledTopic>
            ))}
          </StyledTopicContainer>
        ) : null}

        {/* if it's rendering social media information */}

        {isEmpty(patreonObject) ? null : (
          <>
            <br />
            <ChatGPT
              patreonObject={patreonObject}
              currentSubject={currentSubject}
            />
            <Patreon
              patreonObject={patreonObject}
              currentSubject={currentSubject}
            />
          </>
        )}

        {/* <Patreon />
        <ChatGPT /> */}
      </div>
    </div>
  );
}

export default App;
