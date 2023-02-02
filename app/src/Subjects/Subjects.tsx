import { StyledNavigationContainer, StyledSubject } from "../styles/lazyStyles";

export const Subjects = ({ handleSubjectSelection }) => {
  return (
    <>
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
          Engineer
        </StyledSubject>

        <StyledSubject
          id={"Social Media"}
          active={true}
          onClick={handleSubjectSelection}
        >
          Creator
        </StyledSubject>

        <StyledSubject
          id={"Dinero"}
          onClick={handleSubjectSelection}
          active={true}
        >
          Business
          <br />
          {/* &#128679; */}
        </StyledSubject>
        <StyledSubject
          id={"26th Street"}
          onClick={handleSubjectSelection}
          active={true}
        >
          26th Street &#128679;
          <br />
        </StyledSubject>
      </StyledNavigationContainer>
    </>
  );
};
