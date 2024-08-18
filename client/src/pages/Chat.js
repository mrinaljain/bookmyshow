import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = "ws://localhost:3000"; // Replace with your server URL
function Chat() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null); // Define socket outside of useEffect

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL);
    // Listen for messages from the server
    socketRef.current.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    socketRef.current.on("broadcast", (userCount) => {
      setCount(userCount.userCount);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);
  const sendMessage = () => {
    if (message.trim()) {
      socketRef.current.emit("message", message);
      setMessage(""); // Clear input field
    }
  };
  return (
    <div>
      <h2>Total live users: {count}</h2>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
