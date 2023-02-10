// @ts-nocheck

import MarkdownRenderer from "./MarkdownRenderer/MarkdownRenderer";

let Patreon = ({ patreonObject }) => {
  let determineFileView = (patreonObject) => {
    if (patreonObject.sourceType === "video") {
      return (
        <video style={{ borderRadius: "30px", width: "100%" }} controls>
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
    <div key={patreonObject.button}>{determineFileView(patreonObject)}</div>
  );
};

export default Patreon;
