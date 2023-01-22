// @ts-nocheck
import { useEffect, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";

let Patreon = ({ patreonObject, currentSubject }) => {
  console.log("patreon obj", patreonObject);

  let determineFileView = (patreonObject) => {
    if (patreonObject.sourceType === "video") {
      return (
        <video controls autoPlay>
          <source src={patreonObject.fileSource} type="video/mp4" />
        </video>
      );
    }

    return <MarkdownRenderer file={patreonObject.fileSource} />;
  };

  return (
    <>
      <h2 style={{ color: "white" }}>{patreonObject.button}</h2>
      <br />
      <div key={patreonObject.button}>{determineFileView(patreonObject)}</div>
    </>
  );
};

export default Patreon;
