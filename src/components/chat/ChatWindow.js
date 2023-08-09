import React from 'react';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window mb-4 border-4 h-60">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.isMe ? 'me' : 'other'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
