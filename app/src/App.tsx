import { useEffect, useState } from "react";
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
import Draggable from "react-draggable";

function App() {
  const [count, setCount] = useState(0);
  const [patreonObject, setPatreonObject] = useState<Record<string, any>>({});
  const [currentSubject, setCurrentSubject] = useState("");
  const [isCodingVisible, setIsCodingVisible] = useState(false);
  const [isSocialMediaVisible, setIsSocialMediaVisible] = useState(false);
  const [isDineroVisible, setIsDineroVisible] = useState(false);
  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);
  // console.log("patreon object", patreonObject);

  const handleTopicSelection = (course, item) => {
    console.log("Topic");
    setPatreonObject(CourseMap[course][item]);
    setIsCodingVisible(false);
    setIsSocialMediaVisible(false);
    setIsDineroVisible(false);
    setCurrentSubject("");
  };

  const handleSubjectSelection = (event) => {
    if (event.target.id === "Coding") {
      setIsCodingVisible(true);
      setIsSocialMediaVisible(false);
      setIsDineroVisible(false);
      setCurrentSubject(event.target.id);
    } else if (event.target.id === "Social Media") {
      setIsCodingVisible(false);
      setIsSocialMediaVisible(true);
      setIsDineroVisible(false);
      setCurrentSubject(event.target.id);
    } else if (event.target.id === "Dinero") {
      setIsCodingVisible(false);
      setIsSocialMediaVisible(false);
      setIsDineroVisible(true);
      setCurrentSubject(event.target.id);
    }

    setPatreonObject({});
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

  const handleZeroKnowledgePassword = (event) => {
    if (event.target.value === import.meta.env.VITE_PATREON_PASSCODE) {
      setIsZeroKnowledgeUser(true);
      localStorage.setItem("patreonPasscode", event.target.value);
    }
  };
  return (
    <div className="App">
      <h3 style={{ color: "white" }}>Robots Building Education</h3>
      <img
        width="400px"
        src="https://res.cloudinary.com/eduprojectsil/image/upload/v1674212147/Screen_Shot_2023-01-20_at_2.55.21_AM_ipay84.png"
      />

      <br />
      <div>⚠️ some prompts are not up to date for newer content</div>

      {!isZeroKnowledgeUser ? (
        <div>
          <h2>Enter Passcode</h2>
          <input onChange={handleZeroKnowledgePassword} />
        </div>
      ) : null}

      {isZeroKnowledgeUser ? (
        <>
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
                }}
              >
                <StyledSubject
                  id={"Coding"}
                  active={true}
                  onClick={handleSubjectSelection}
                >
                  Code
                </StyledSubject>

                <StyledSubject
                  id={"Social Media"}
                  active={true}
                  onClick={handleSubjectSelection}
                >
                  Influence
                </StyledSubject>

                <StyledSubject
                  id={"Dinero"}
                  onClick={handleSubjectSelection}
                  active={true}
                >
                  Money
                  <br />
                  {/* &#128679; */}
                </StyledSubject>
              </StyledNavigationContainer>

              {/* If it's rendering coding lesson */}
              <div
                style={{
                  transition: "0.23s all ease-in-out",
                  opacity: isCodingVisible ? 1 : 0,
                  visibility: isCodingVisible ? "visible" : "hidden",
                }}
              >
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
                          {CourseMap["Coding"][item].sourceType ===
                          "markdown" ? (
                            <span>
                              📄&nbsp;{CourseMap["Coding"][item].button}
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
                    <h3>Projects x Experience</h3>
                    <StyledTopicContainer>
                      {Object.keys(CourseMap["Projects x Experience"]).map(
                        (item) => (
                          <StyledTopic
                            key={
                              CourseMap["Projects x Experience"][item].button
                            }
                            onClick={() =>
                              handleTopicSelection(
                                "Projects x Experience",
                                item
                              )
                            }
                          >
                            {CourseMap["Projects x Experience"][item]
                              .sourceType === "video" ? (
                              <span>
                                {" "}
                                &#9658;&nbsp;
                                {
                                  CourseMap["Projects x Experience"][item]
                                    .button
                                }
                              </span>
                            ) : (
                              ""
                            )}

                            {CourseMap["Projects x Experience"][item]
                              .sourceType === "markdown" ? (
                              <span>
                                📄&nbsp;
                                {
                                  CourseMap["Projects x Experience"][item]
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

                {currentSubject === "Coding" ? (
                  <div>
                    <h3>Technical Interview Foundations</h3>
                    <StyledTopicContainer>
                      {Object.keys(
                        CourseMap["Technical Interview Foundations"]
                      ).map((item) => (
                        <StyledTopic
                          key={
                            CourseMap["Technical Interview Foundations"][item]
                              .button
                          }
                          onClick={() =>
                            handleTopicSelection(
                              "Technical Interview Foundations",
                              item
                            )
                          }
                        >
                          {CourseMap["Technical Interview Foundations"][item]
                            .sourceType === "video" ? (
                            <span>
                              {" "}
                              &#9658;&nbsp;
                              {
                                CourseMap["Technical Interview Foundations"][
                                  item
                                ].button
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
                                CourseMap["Technical Interview Foundations"][
                                  item
                                ].button
                              }
                            </span>
                          ) : (
                            ""
                          )}
                        </StyledTopic>
                      ))}
                    </StyledTopicContainer>
                  </div>
                ) : null}
              </div>

              <div
                style={{
                  transition: "0.23s all ease-in-out",
                  opacity: isSocialMediaVisible ? 1 : 0,
                  visibility: isSocialMediaVisible ? "visible" : "hidden",
                }}
              >
                {currentSubject === "Social Media" ? (
                  <div>
                    <h3>Communications</h3>
                    <StyledTopicContainer>
                      {Object.keys(CourseMap["Social Media"]).map((item) => (
                        <StyledTopic
                          key={CourseMap["Social Media"][item].button}
                          onClick={() =>
                            handleTopicSelection("Social Media", item)
                          }
                        >
                          {CourseMap["Social Media"][item].sourceType ===
                          "video" ? (
                            <span>
                              {" "}
                              &#9658;&nbsp;
                              {CourseMap["Social Media"][item].button}
                            </span>
                          ) : (
                            ""
                          )}
                          {CourseMap["Social Media"][item].sourceType ===
                          "markdown" ? (
                            <span>
                              📄&nbsp;{CourseMap["Social Media"][item].button}
                            </span>
                          ) : (
                            ""
                          )}
                        </StyledTopic>
                      ))}
                    </StyledTopicContainer>
                  </div>
                ) : null}
              </div>

              <div
                style={{
                  transition: "0.23s all ease-in-out",
                  opacity: isDineroVisible ? 1 : 0,
                  visibility: isDineroVisible ? "visible" : "hidden",
                }}
              >
                {currentSubject === "Dinero" ? (
                  <div>
                    <h3>Finance</h3>
                    <StyledTopicContainer>
                      {Object.keys(CourseMap["Dinero"]).map((item) => (
                        <StyledTopic
                          key={CourseMap["Dinero"][item].button}
                          onClick={() => handleTopicSelection("Dinero", item)}
                        >
                          {CourseMap["Dinero"][item].sourceType === "video" ? (
                            <span>
                              {" "}
                              &#9658;&nbsp;{CourseMap["Dinero"][item].button}
                            </span>
                          ) : (
                            ""
                          )}
                          {CourseMap["Dinero"][item].sourceType ===
                          "markdown" ? (
                            <span>📄 {CourseMap["Dinero"][item].button}</span>
                          ) : (
                            ""
                          )}
                        </StyledTopic>
                      ))}
                    </StyledTopicContainer>
                  </div>
                ) : null}
              </div>
            </div>
            {/* if it's rendering social media information */}
            <br />

            {/* <Patreon />
        <ChatGPT /> */}
          </div>

          {!isEmpty(patreonObject.button) ? (
            <h2 style={{ color: "white" }}> {patreonObject?.button || ""} </h2>
          ) : null}

          <div>
            {isEmpty(patreonObject) ? null : (
              <ChatGPT patreonObject={patreonObject} />
            )}
          </div>

          <br />

          <Draggable>
            <div>
              {isEmpty(patreonObject) ? null : (
                <Patreon patreonObject={patreonObject} />
              )}
            </div>
          </Draggable>
        </>
      ) : null}
    </div>
  );
}

export default App;
