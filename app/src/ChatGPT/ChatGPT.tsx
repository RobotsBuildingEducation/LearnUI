import { useState, useEffect } from "react";

import ChatGptForm from "./ChatGptForm/ChatGptForm";

// this component is pointless
let ChatGPT = ({ patreonObject }) => {
  return (
    <div>
      <ChatGptForm patreonObject={patreonObject} />
    </div>
  );
};

export default ChatGPT;
