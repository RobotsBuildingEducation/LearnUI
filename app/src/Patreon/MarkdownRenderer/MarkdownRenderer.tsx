import React, { useState, useEffect } from "react";
import { marked } from "marked";

const MarkdownRenderer = ({ file }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(file.default);
    // fetch(file.default)
    //   .then((response) => response.text())
    //   .then((text) => setMarkdown(text))
    //   .catch((error) => console.error(error));
  }, [file]);

  return (
    <div
      style={{ color: "white" }}
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
};

export default MarkdownRenderer;
