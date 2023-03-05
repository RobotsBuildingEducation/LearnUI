import { ChatGPT } from "../../ChatGPT/ChatGPT";
import { ui } from "../../common/uiSchema";

export const Demo = ({
  userDocumentReference,
  databaseUserDocument,
  setDatabaseUserDocument,
  globalDocumentReference,
  globalWorkCounter,
  setGlobalWorkCounter,
  computePercentage,
}) => {
  return (
    <div>
      <h2 style={{ color: "white", marginTop: 12 }}>
        Lesson 1 - Coding &amp; Logic
      </h2>
      <ChatGPT
        // patreonObject={patreonObject}
        // userDocumentReference={userDocumentReference}
        // databaseUserDocument={databaseUserDocument}
        // setDatabaseUserDocument={setDatabaseUserDocument}
        // globalDocumentReference={globalDocumentReference}
        // globalWorkCounter={globalWorkCounter}
        // setGlobalWorkCounter={setGlobalWorkCounter}
        patreonObject={ui()["Engineer"]["Crash Course"]["Lesson 1"]}
        userDocumentReference={userDocumentReference}
        databaseUserDocument={databaseUserDocument}
        setDatabaseUserDocument={setDatabaseUserDocument}
        globalDocumentReference={globalDocumentReference}
        globalWorkCounter={globalWorkCounter}
        computePercentage={computePercentage}
        setGlobalWorkCounter={setGlobalWorkCounter}
        isDemo={true}
      />
    </div>
  );
};
