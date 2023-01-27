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

  const handleTopicSelection = (course, item) => {
    setPatreonObject(CourseMap[course][item]);
    setTimeout(
      () => document.getElementById("scrollPoint").scrollIntoView(),
      0
    );
  };
  return (
    <div className="App">
      <br />
      <h3 style={{ color: "white" }}>Robots Building Education</h3>
      <br />
      <div>⚠️ some prompts are not up to date for newer content</div>
      <br />
      <img
        width="400px"
        src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674212147/Screen_Shot_2023-01-20_at_2.55.21_AM_ipay84.png"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {/* list of subjects */}

        <div>
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
              Code
            </StyledSubject>

            <StyledSubject id={"Social Media"} active={true}>
              Influence
            </StyledSubject>

            <StyledSubject id={"Dinero"} active={true}>
              Money
              <br />
              {/* &#128679; */}
            </StyledSubject>
          </StyledNavigationContainer>

          {/* If it's rendering coding lesson */}
          {currentSubject === "Coding" ? (
            <div>
              <h3>Crash Course</h3>
              <StyledTopicContainer>
                {Object.keys(CourseMap["Coding"]).map((item) => (
                  <StyledTopic
                    key={CourseMap["Coding"][item].button}
                    onClick={() => handleTopicSelection("Coding", item)}
                  >
                    {CourseMap["Coding"][item].sourceType === "video" ? (
                      <span>
                        {" "}
                        &#9658;&nbsp;{CourseMap["Coding"][item].button}
                      </span>
                    ) : (
                      ""
                    )}
                    {CourseMap["Coding"][item].sourceType === "markdown" ? (
                      <span>📄&nbsp;{CourseMap["Coding"][item].button}</span>
                    ) : (
                      ""
                    )}
                  </StyledTopic>
                ))}
              </StyledTopicContainer>
            </div>
          ) : null}
          {currentSubject === "Coding" ? (
            <div>
              <h3>Projects x Experience</h3>
              <StyledTopicContainer>
                {Object.keys(CourseMap["Projects x Experience"]).map((item) => (
                  <StyledTopic
                    key={CourseMap["Projects x Experience"][item].button}
                    onClick={() =>
                      setPatreonObject(CourseMap["Projects x Experience"][item])
                    }
                  >
                    {CourseMap["Projects x Experience"][item].sourceType ===
                    "video" ? (
                      <span>
                        {" "}
                        &#9658;&nbsp;
                        {CourseMap["Projects x Experience"][item].button}
                      </span>
                    ) : (
                      ""
                    )}

                    {CourseMap["Projects x Experience"][item].sourceType ===
                    "markdown" ? (
                      <span>
                        📄&nbsp;
                        {CourseMap["Projects x Experience"][item].button}
                      </span>
                    ) : (
                      ""
                    )}
                  </StyledTopic>
                ))}
              </StyledTopicContainer>
            </div>
          ) : null}

          {currentSubject === "Coding" ? (
            <div>
              <h3>Technical Interview Foundations</h3>
              <StyledTopicContainer>
                {Object.keys(CourseMap["Technical Interview Foundations"]).map(
                  (item) => (
                    <StyledTopic
                      key={
                        CourseMap["Technical Interview Foundations"][item]
                          .button
                      }
                      onClick={() =>
                        setPatreonObject(
                          CourseMap["Technical Interview Foundations"][item]
                        )
                      }
                    >
                      {CourseMap["Technical Interview Foundations"][item]
                        .sourceType === "video" ? (
                        <span>
                          {" "}
                          &#9658;&nbsp;
                          {
                            CourseMap["Technical Interview Foundations"][item]
                              .button
                          }
                        </span>
                      ) : (
                        ""
                      )}

                      {CourseMap["Technical Interview Foundations"][item]
                        .sourceType === "markdown" ? (
                        <span>
                          📄&nbsp;
                          {
                            CourseMap["Technical Interview Foundations"][item]
                              .button
                          }
                        </span>
                      ) : (
                        ""
                      )}
                    </StyledTopic>
                  )
                )}
              </StyledTopicContainer>
            </div>
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
                  {CourseMap["Social Media"][item].sourceType === "video" ? (
                    <span>
                      {" "}
                      &#9658;&nbsp;{CourseMap["Social Media"][item].button}
                    </span>
                  ) : (
                    ""
                  )}
                  {CourseMap["Social Media"][item].sourceType === "markdown" ? (
                    <span>
                      📄&nbsp;{CourseMap["Social Media"][item].button}
                    </span>
                  ) : (
                    ""
                  )}
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
                  {CourseMap["Dinero"][item].sourceType === "video" ? (
                    <span>
                      {" "}
                      &#9658;&nbsp;{CourseMap["Dinero"][item].button}
                    </span>
                  ) : (
                    ""
                  )}
                  {CourseMap["Dinero"][item].sourceType === "markdown" ? (
                    <span>📄 {CourseMap["Dinero"][item].button}</span>
                  ) : (
                    ""
                  )}
                </StyledTopic>
              ))}
            </StyledTopicContainer>
          ) : null}
        </div>
        {/* if it's rendering social media information */}
        <br />

        {/* <Patreon />
        <ChatGPT /> */}
      </div>
      <div>
        {isEmpty(patreonObject) ? null : (
          <ChatGPT
            patreonObject={patreonObject}
            currentSubject={currentSubject}
          />
        )}
      </div>

      <br />

      <div>
        {isEmpty(patreonObject) ? null : (
          <Patreon
            patreonObject={patreonObject}
            currentSubject={currentSubject}
          />
        )}
      </div>
      <div style={{ position: "absolute", bottom: 0 }} id={"scrollPoint"}>
        &nbsp;
      </div>
    </div>
  );
}

export default App;
