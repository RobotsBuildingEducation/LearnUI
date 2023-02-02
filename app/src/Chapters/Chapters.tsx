import { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { StyledTopic, StyledTopicContainer } from "../styles/lazyStyles";
import { CourseMap } from "../common/commonElements";

export const Chapters = ({
  handleChapterSelection,
  isCodingVisible,
  isSocialMediaVisible,
  isDineroVisible,
  is26thStreetVisible,
  currentSubject,
}) => {
  return (
    <>
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
                  onClick={() => handleChapterSelection("Coding", item)}
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
                    handleChapterSelection("Projects x Experience", item)
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
                      CourseMap["Technical Interview Foundations"][item].button
                    }
                    onClick={() =>
                      handleChapterSelection(
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
                  onClick={() => handleChapterSelection("Social Media", item)}
                >
                  {CourseMap["Social Media"][item].sourceType === "video" ? (
                    <span>
                      {" "}
                      &#9658;&nbsp;
                      {CourseMap["Social Media"][item].button}
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
                  onClick={() => handleChapterSelection("Dinero", item)}
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
          </div>
        ) : null}
      </div>

      <div
        style={{
          transition: "0.23s all ease-in-out",
          opacity: is26thStreetVisible ? 1 : 0,
          visibility: is26thStreetVisible ? "visible" : "hidden",
        }}
      >
        {currentSubject === "26th Street" ? (
          <div>
            <h3>Community Sponsors & Advertising</h3>

            <StyledTopicContainer>
              {Object.keys(CourseMap["26th Street"]).map((item) => (
                <StyledTopic
                  key={CourseMap["26th Street"][item].button}
                  onClick={() => handleChapterSelection("26th Street", item)}
                >
                  {CourseMap["26th Street"][item].sourceType === "video" ? (
                    <span>
                      {" "}
                      &#9658;&nbsp;
                      {CourseMap["26th Street"][item].button}
                    </span>
                  ) : (
                    ""
                  )}
                  {CourseMap["26th Street"][item].sourceType === "markdown" ? (
                    <span>📄 {CourseMap["26th Street"][item].button}</span>
                  ) : (
                    ""
                  )}
                </StyledTopic>
              ))}
            </StyledTopicContainer>
          </div>
        ) : null}
      </div>

      {/* if it's rendering social media information */}
    </>
  );
};
