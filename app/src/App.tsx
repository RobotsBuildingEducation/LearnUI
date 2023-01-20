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

  console.log("patreon object", patreonObject);
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
        <StyledNavigationContainer>
          <StyledSubject active={true}>Coding</StyledSubject>

          <StyledSubject active={false}>Social Media&#128679;</StyledSubject>

          <StyledSubject active={false}>
            Dinero
            <br />
            &#128679;
          </StyledSubject>
        </StyledNavigationContainer>

        <StyledTopicContainer>
          {Object.keys(CourseMap["Coding"]).map((item) => (
            <StyledTopic
              key={CourseMap["Coding"][item].button}
              onClick={() => setPatreonObject(CourseMap["Coding"][item])}
            >
              {CourseMap["Coding"][item].button}
            </StyledTopic>
          ))}
        </StyledTopicContainer>

        {isEmpty(patreonObject) ? null : (
          <>
            <Patreon patreonObject={patreonObject} />
            <ChatGPT patreonObject={patreonObject} />
          </>
        )}
        {/* <Patreon />
        <ChatGPT /> */}
      </div>
    </div>
  );
}

export default App;
