import styled from 'styled-components';


export const StyledNavigationContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;  
  justify-content: space-evenly;
  margin-top: 12px;
  margin-bottom: 12px;
  transition: 0.2s all ease-in-out;
  padding: 12px;
  border-radius: 2px;
  box-shadow: 0 3px 6px #0b186be2, 0 6px 6px rgba(0,0,0,0.23);
  &:hover{
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
  box-shadow: 0 3px 6px #6b0b68e1, 0 6px 6px rgba(0,0,0,0.23);
  &:hover{
    /* transform: scale(1.01); */
    /* box-shadow: 0 19px 38px  #0b186be2, 0 15px 12px rgba(0,0,0,0.22); */
  }

`;

export const StyledTopic = styled.div`
  background-color: #6b0b68e1;
  margin: 12px;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;  
  /* border-radius: 46%; */
  color: white;
  transition: 0.15s all ease-in-out;
  &:hover{
    transform: scale(1.1);
    box-shadow: 0 14px 28px #340627e0, 0 10px 10px rgba(0,0,0,0.22);

  }


`; 

export const StyledSubject = styled.div`
  background-color: #147efb;

  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;  
  /* border-radius: 46%; */
  color: white;
  transition: 0.15s all ease-in-out;
  &:hover{
    transform: scale(1.1);
    box-shadow: 0 14px 28px #340627e0, 0 10px 10px rgba(0,0,0,0.22);

  }


`; 