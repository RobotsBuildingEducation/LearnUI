// @ts-nocheck
import { useEffect, useState } from "react";
import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";

let Patreon = ({ patreonObject }) => {
  let determineFileView = (patreonObject) => {
    if (patreonObject.sourceType === "video") {
      return (
        <video controls style={{ maxWidth: "400px" }}>
          <source src={patreonObject.fileSource} type="video/mp4" />
        </video>
      );
    }

    return (
      <div style={{ textAlign: "left" }}>
        <MarkdownRenderer file={patreonObject.fileSource} />
      </div>
    );
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        minWidth: "400px",
        transition: "0.3s all ease-in-out",
        margin: "auto",
        color: "white",
        width: "100%",
      }}
    >
      <br />
      <div key={patreonObject.button}>{determineFileView(patreonObject)}</div>
    </div>
  );
};

export default Patreon;
