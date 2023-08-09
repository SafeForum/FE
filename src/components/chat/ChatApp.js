import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = { text, isMe: true };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-app">
      <h1 className="mb-4">Chat with your Community</h1>
      <ChatWindow messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
