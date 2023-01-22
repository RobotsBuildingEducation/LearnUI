import styled from "styled-components";

export const StyledNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  margin: 12px;
  transition: 0.2s all ease-in-out;
  padding: 12px;
  border-radius: 2px;
  box-shadow: 0 3px 6px #0b186be2, 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    /* transform: scale(1.01); */
    /* box-shadow: 0 19px 38px  #0b186be2, 0 15px 12px rgba(0,0,0,0.22); */
  }
`;

export const StyledTopicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin-top: 12px;
  margin-bottom: 12px;
  transition: 0.2s all ease-in-out;
  padding: 12px;
  border-radius: 2px;
  box-shadow: 0 3px 6px #6b0b68e1, 0 6px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    /* transform: scale(1.01); */
    /* box-shadow: 0 19px 38px  #0b186be2, 0 15px 12px rgba(0,0,0,0.22); */
  }
`;

export const StyledTopic = styled.div`
  border: 1px solid #636366;
  background-color: black;
  margin: 12px;
  width: 125px;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  /* border-radius: 46%; */
  color: white;
  transition: 0.15s all ease-in-out;
  cursor: grab;
  &:hover {
    transform: scale(1.1);
    /* box-shadow: 0 14px 28px #340627e0, 0 10px 10px rgba(0, 0, 0, 0.22); */
  }
`;

export const StyledSubject = styled.div`
  background-color: #2c2c2e;

  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 12px;
  /* border-radius: 46%; */
  color: white;
  transition: 0.15s all ease-in-out;

  cursor: ${(props) => {
    return props.active ? "grab" : "not-allowed";
  }};

  &:hover {
    transform: ${(props) => {
      return props.active ? "scale(1.1)" : "";
    }};

    /* box-shadow: 0 14px 28px #340627e0, 0 10px 10px rgba(0, 0, 0, 0.22); */
  }
`;
