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
import { ProgressBar, Spinner } from "react-bootstrap";
import { ProofOfWork } from "./ProofOfWork/ProofOfWork";

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
  const [isSignedIn, setIsSignedIn] = useState("start"); // Local signed-in state.
  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);

  // this is the data inside a user document
  const [databaseUserDocument, setDatabaseUserDocument] = useState({});

  // this is a document object reference for a user collection
  const [userDocumentReference, setUserDocumentReference] = useState({});
  const [globalDocumentReference, setGlobalDocumentReference] = useState({});

  // used to count total global count. used to get all work done before this global counter was implemented.
  const [globalWorkCounter, setGlobalWorkCounter] = useState(0);

  const [patreonObject, setPatreonObject] = useState<Record<string, any>>({});
  const [currentPath, setCurrentPath] = useState("");
  const [proofOfWorkFromModules, setProofOfWorkFromModules] = useState(0);

  const [isDemo, setIsDemo] = useState(true);

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
        setIsDemo(false);
        const docRef = doc(database, "users", user.uid);

        const globalWorkDocRef = doc(database, "global", "work");
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

        getDoc(globalWorkDocRef).then((res) =>
          setGlobalWorkCounter(res.data().total)
        );

        setUserDocumentReference(docRef);
        setGlobalDocumentReference(globalWorkDocRef);

        // used to count total global count. used to get all work done before this global counter was implemented.
        // getDocs(collection(database, "users")).then((querySnapshot) => {
        //   let sum = 0;
        //   querySnapshot.forEach((doc) => {
        //     if (doc.data().work) {
        //       sum = doc.data().work + sum;
        //     }
        //   });

        //   setGlobalWorkCounter(sum);
        // });
      } else {
        setIsSignedIn(false);
        const docRef = doc(database, "users", "demoUsers");
        const globalWorkDocRef = doc(database, "global", "work");
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
                console.log("DATA", response.data());
                setDatabaseUserDocument(response.data());
              });
          } else {
            console.log("ELSA");
            setDatabaseUserDocument(res.data());
          }
        });

        getDoc(globalWorkDocRef).then((res) =>
          setGlobalWorkCounter(res.data().total)
        );

        setUserDocumentReference(docRef);
        setGlobalDocumentReference(globalWorkDocRef);
        setIsDemo(true);
      }
    });

    setProofOfWorkFromModules(getGlobalProofOfWork());
  }, []);

  //

  let computePercentage =
    (databaseUserDocument.work || 0) / (proofOfWorkFromModules || 77500);

  if (typeof isSignedIn == "string") {
    return <Spinner animation="grow" variant="light" />;
  }

  return (
    <div className="App">
      {/* <button onClick={() => dispatch({ type: "incremented_age" })}>
        click
      </button>
      my age {state.age} */}
      {/*  */}
      <Header />

      {typeof isSignedIn === "string" ||
      (!isSignedIn && isZeroKnowledgeUser) ? (
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
      ) : null}

      {/* {isSignedIn !== "start" && isSignedIn && isZeroKnowledgeUser ? (
        <ProofOfWork
          displayName={auth?.currentUser?.displayName || "Demo Robots"}
          databaseUserDocument={databaseUserDocument}
          computePercentage={computePercentage}
          globalWorkCounter={globalWorkCounter}
        />
      ) : null} */}

      {!isZeroKnowledgeUser ? (
        <Passcode
          handleZeroKnowledgePassword={handleZeroKnowledgePassword}
          userDocumentReference={userDocumentReference}
          databaseUserDocument={databaseUserDocument}
          setDatabaseUserDocument={setDatabaseUserDocument}
          globalDocumentReference={globalDocumentReference}
          globalWorkCounter={globalWorkCounter}
          setGlobalWorkCounter={setGlobalWorkCounter}
          computePercentage={computePercentage}
        />
      ) : null}
      {isZeroKnowledgeUser ? (
        <>
          <div>ms. roxana is being fine-tuned to be even more awesome 😊</div>

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
                <>
                  <ChatGPT
                    patreonObject={patreonObject}
                    userDocumentReference={userDocumentReference}
                    databaseUserDocument={databaseUserDocument}
                    setDatabaseUserDocument={setDatabaseUserDocument}
                    globalDocumentReference={globalDocumentReference}
                    globalWorkCounter={globalWorkCounter}
                    setGlobalWorkCounter={setGlobalWorkCounter}
                    displayName={
                      auth?.currentUser?.displayName || "Demo Robots"
                    }
                    computePercentage={computePercentage}
                    isDemo={isDemo}
                  />
                </>
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
