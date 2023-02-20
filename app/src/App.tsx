import { useEffect, useState, useReducer } from "react";
import { isEmpty } from "lodash";

import "./App.css";
import { ChatGPT } from "./ChatGPT/ChatGPT";

import { Paths } from "./Paths/Paths";
import {
  controlPathVisibilityMap,
  getGlobalProofOfWork,
  renderWithTooltip,
} from "./common/uiSchema";
import { Collections } from "./Paths/Collections/Collections";
import { Header } from "./Header/Header";
import { Passcode } from "./Passcode/Passcode";
import {
  auth,
  AuthComponent,
  database,
  uiConfig,
} from "./database/firebaseResources";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { ProgressBar } from "react-bootstrap";

export const reducer = (state, action) => {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
};

function App() {
  // const [state, dispatch] = useReducer(reducer, { age: 42 });
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);
  const [databaseUserDocument, setDatabaseUserDocument] = useState({});
  const [userDocumentReference, setUserDocumentReference] = useState({});

  const [patreonObject, setPatreonObject] = useState<Record<string, any>>({});
  const [currentPath, setCurrentPath] = useState("");

  const [visibilityMap, setVisibilityMap] = useState({
    Engineer: false,
    "26th Street": false,
    Creator: false,
    Business: false,
  });

  const handlePathSelection = (event) => {
    setVisibilityMap(controlPathVisibilityMap(visibilityMap, event.target.id));
    setCurrentPath(event.target.id);

    setPatreonObject({});
  };

  const handleModuleSelection = (module) => {
    // can redefine this as module object rather than patreon object. low priority
    setPatreonObject(module);
    setCurrentPath("");
    setVisibilityMap({
      Engineer: false,
      "26th Street": false,
      Creator: false,
      Business: false,
    });
  };

  const handleZeroKnowledgePassword = (event) => {
    if (event.target.value === import.meta.env.VITE_PATREON_PASSCODE) {
      localStorage.setItem("patreonPasscode", event.target.value);
      setIsZeroKnowledgeUser(true);
    }
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

    onAuthStateChanged(auth, (user) => {
      // Check for user status
      //probably a better option than displayName.
      if (user?.displayName) {
        setIsSignedIn(true);
        const docRef = doc(database, "users", user.uid);

        getDoc(docRef).then((res) => {
          if (!res?.data()) {
            // first time user logs in. set up proof of work in their user document
            setDoc(docRef, {
              work: 0,
            })
              .then(() => {
                return getDoc(docRef);
              })
              .then((response) => {
                setDatabaseUserDocument(response.data());
              });
          } else {
            setDatabaseUserDocument(res.data());
          }
        });

        setUserDocumentReference(docRef);
      } else {
        setIsSignedIn(false);
      }
    });
  }, []);

  //
  let computePercentage =
    (databaseUserDocument.work || 0) / getGlobalProofOfWork();

  console.log("PERCENTAGE", Math.floor(computePercentage * 100));
  return (
    <div className="App">
      {/* <button onClick={() => dispatch({ type: "incremented_age" })}>
        click
      </button>
      my age {state.age} */}
      {/*  */}
      <Header />

      {!isSignedIn ? (
        <div
          style={{
            border: "1px solid #1C1C1E",
            width: "fit-content",
            margin: "auto",
            backgroundColor: "#1C1C1E",
            marginBottom: "48px",
          }}
        >
          <AuthComponent
            id="firebaseui-auth-container"
            uiConfig={uiConfig}
            firebaseAuth={auth}
          />
        </div>
      ) : (
        <div
          style={{
            border: "1px solid #1C1C1E",
            width: "fit-content",
            margin: "auto",
            backgroundColor: "#1C1C1E",
            marginBottom: "48px",
            maxWidth: "600px",
            minWidth: "300px",
          }}
        >
          <p>🤖 {auth.currentUser.displayName}</p>
          {renderWithTooltip(
            <div>
              🏦: {databaseUserDocument?.work || 0}{" "}
              <div>
                <ProgressBar
                  style={{
                    backgroundColor: "black",
                    borderRadius: "0px",
                    margin: 12,
                  }}
                  variant="success"
                  now={Math.floor(computePercentage * 100)}
                />
              </div>
            </div>,
            <div>
              <h6>Proof of Work</h6>
              <p>
                work: {databaseUserDocument?.work || 0} /{" "}
                {getGlobalProofOfWork()}
              </p>
              <p>Scholarships created: 5</p>
              <p style={{ textAlign: "left" }}>
                Proof of work (PoW) is a systebm in which the worker proves to
                verifiers that a certain amount of effort has been expended.
                Verifiers can be machines, like those found with Bitcoin, or
                they can be people like teachers grading your homework!
              </p>
            </div>,
            "bottom",
            {
              border: "1px solid #F2D466",
              marginBottom: "6px",
              borderRadius: "10px",

              backgroundColor: "#f2a900",
            }
          )}
          {/* <a onClick={() => auth.signOut()}>Sign-out</a> */}
        </div>
      )}

      <br />
      <br />

      {!isZeroKnowledgeUser ? (
        <Passcode handleZeroKnowledgePassword={handleZeroKnowledgePassword} />
      ) : null}
      {isZeroKnowledgeUser ? (
        <>
          <div>
            ⚠️ OpenAI's chatGPT feature is currently disabled. Everything is
            being rebuilt to be more awesome.
          </div>

          {/* <div>My Accoun</div> */}
          {/* navigate */}

          <Paths handlePathSelection={handlePathSelection} />

          <Collections
            visibilityMap={visibilityMap}
            handleModuleSelection={handleModuleSelection}
            currentPath={currentPath}
          />

          <br />
          {/* selected header */}
          {!isEmpty(patreonObject.button) ? (
            <h2 style={{ color: "white", marginTop: 12 }}>
              {" "}
              {patreonObject?.button || ""}{" "}
            </h2>
          ) : null}

          {/* render chatbot */}
          <div style={{ width: "100%" }}>
            <div>
              {isEmpty(patreonObject) ? null : (
                <ChatGPT
                  patreonObject={patreonObject}
                  userDocumentReference={userDocumentReference}
                  databaseUserDocument={databaseUserDocument}
                  setDatabaseUserDocument={setDatabaseUserDocument}
                />
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
