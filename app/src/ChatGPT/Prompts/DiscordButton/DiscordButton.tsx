/* React Component Version */
import React from "react";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";

export const DiscordButton = () => (
  <>
    <a href={"https://discord.gg/GvMCSQSsqE"} target={"_blank"}>
      <Button variant="light">
        <div
          style={{
            color: "black",

            fontWeight: "bold",
            borderRadius: 8,
            display: "inline-flex",
            alignItems: "center",
            padding: "10px 15px",
            width: "100%",
            textDecoration: "none",
          }}
        >
          <div style={{ width: 25, height: 25, marginRight: 15 }}>
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 245 240"
            >
              <path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z" />
              <path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z" />
            </svg>
          </div>
          <span>{"Discord"}</span>
        </div>
      </Button>
    </a>
    <br />
    <a href={"https://chat.openai.com/chat"} target={"_blank"}>
      <Button variant="dark">
        <img
          width="120px"
          style={{ borderRadius: "8px" }}
          src="data:image/png;base64,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"
        />
      </Button>
    </a>
  </>
);
