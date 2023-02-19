import { useEffect, useState } from "react";
import { isEmpty } from "lodash";

import "./App.css";
import { ChatGPT } from "./ChatGPT/ChatGPT";

import { Paths } from "./Paths/Paths";
import { controlPathVisibilityMap } from "./common/uiSchema";
import { Collections } from "./Paths/Collections/Collections";
import { Header } from "./Header/Header";
import { Passcode } from "./Passcode/Passcode";
import { SignInScreen } from "./database/firebaseResources";

function App() {
  const [patreonObject, setPatreonObject] = useState<Record<string, any>>({});
  const [currentPath, setCurrentPath] = useState("");

  const [isZeroKnowledgeUser, setIsZeroKnowledgeUser] = useState(false);

  const [visibilityMap, setVisibilityMap] = useState({
    Engineer: false,
    "26th Street": false,
    Creator: false,
    Business: false,
  });

  const [authUiConfig, setAuthUiConfig] = useState({});

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
  }, []);

  return (
    <div className="App">
      <Header />
      <SignInScreen />
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
                <ChatGPT patreonObject={patreonObject} />
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
