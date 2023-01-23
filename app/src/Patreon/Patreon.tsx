// @ts-nocheck
import { useEffect, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";

let Patreon = ({ patreonObject, currentSubject }) => {
  console.log("patreon obj", patreonObject);

  let determineFileView = (patreonObject) => {
    if (patreonObject.sourceType === "video") {
      return (
        <video controls>
          <source src={patreonObject.fileSource} type="video/mp4" />
        </video>
      );
    }

    return (
      <div style={{ textAlign: "justify" }}>
        <MarkdownRenderer file={patreonObject.fileSource} />
      </div>
    );
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
