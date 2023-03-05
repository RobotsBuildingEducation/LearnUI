import { Button } from "react-bootstrap";
import { useEffect, useState, useReducer } from "react";
import { Demo } from "./Demo/Demo";

export const Passcode = ({
  handleZeroKnowledgePassword,

  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalWorkCounter,
  setGlobalWorkCounter,
  computePercentage,
}) => {
  let [isDemoActive, setIsDemoActive] = useState(false);

  return (
    <div>
      <h2>Enter Passcode</h2>
      <input onChange={handleZeroKnowledgePassword} type="password" />
      <br />
      <br />
      <a
        target={"_blank"}
        href="https://www.patreon.com/RobotsBuildingEducation"
        style={{ color: "white" }}
      >
        <Button variant="dark" style={{ width: "180px", height: "50px" }}>
          <img
            style={{ borderRadius: "6px" }}
            width="32px"
            src="https://pbs.twimg.com/profile_images/1266950784609992705/xEe7mBx9_400x400.png"
          />
          &nbsp; Get Passcode
        </Button>
      </a>
      <br />
      <br />
      <Button
        variant="dark"
        style={{ width: "180px", height: "50px" }}
        onClick={() => setIsDemoActive(true)}
      >
        <img
          src="/../../../roxana.ico"
          width="32px"
          style={{ borderRadius: "6px" }}
        />
        &nbsp; Try Out Demo
      </Button>
      <br />
      <br />
      {isDemoActive ? (
        <Demo
          userDocumentReference={userDocumentReference}
          databaseUserDocument={databaseUserDocument}
          setDatabaseUserDocument={setDatabaseUserDocument}
          globalDocumentReference={globalDocumentReference}
          globalWorkCounter={globalWorkCounter}
          setGlobalWorkCounter={setGlobalWorkCounter}
          computePercentage={computePercentage}
        />
      ) : null}
    </div>
  );
};
