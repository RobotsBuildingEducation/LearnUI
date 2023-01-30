import { useState, useEffect } from "react";

import ChatGptForm from "./ChatGptForm/ChatGptForm";
import ChatGptReader from "./ChatGptReader/ChatGptReader";

// this component is pointless
let ChatGPT = ({ patreonObject }) => {
  return (
    <div>
      <ChatGptReader />
      <ChatGptForm patreonObject={patreonObject} />
    </div>
  );
};

export default ChatGPT;
