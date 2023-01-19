// @ts-nocheck
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ChatGptMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      // Make a GET request to the OpenAI ChatGPT API to get the latest messages
      const response =  await fetch('/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

      if (response.status === 200) {
        setMessages(response.data.messages);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      {/* <ChatGptReader /> */}
      <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.text}</li>
      ))}
    </ul>
    </div>

  );
}
