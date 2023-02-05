import { useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";

import "./App.css";
import Patreon from "./ChatGPT/Patreon/Patreon";
import ChatGPT from "./ChatGPT/ChatGPT";

import { Paths } from "./Paths/Paths";
import { controlPathVisibilityMap, ui } from "./common/uiSchema";
import { Collections } from "./Paths/Collections/Collections";
import { Header } from "./Header/Header";
import { Passcode } from "./Passcode/Passcode";

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

      {!isZeroKnowledgeUser ? (
        <Passcode handleZeroKnowledgePassword={handleZeroKnowledgePassword} />
      ) : null}

      {isZeroKnowledgeUser ? (
        <>
          <div>⚠️ OpenAI's chatGPT feature is currently disabled.</div>

          {/* navigate */}

          <Paths handlePathSelection={handlePathSelection} />

          <Collections
            visibilityMap={visibilityMap}
            handleModuleSelection={handleModuleSelection}
            currentPath={currentPath}
          />

          {/* selected header */}
          {!isEmpty(patreonObject.button) ? (
            <h2 style={{ color: "white", marginTop: 12 }}>
              {" "}
              {patreonObject?.button || ""}{" "}
            </h2>
          ) : null}

          {/* render chatbot */}
          <div>
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
