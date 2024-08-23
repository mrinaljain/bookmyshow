import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = "ws://localhost:3002"; // Replace with your server URL
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
      <h2 className="">Total live users: {count}</h2>
      <div class="flex flex-col h-screen">
        <div class="flex-grow overflow-y-auto p-4">
          {/* Chat Bubble -  All*/}
          {messages.map((msg, index) => (
            <div class="flex mb-4" key={index}>
              <div class="bg-gray-200 p-3 rounded-lg max-w-xs">
                <p class="text-gray-800">{msg}</p>
              </div>
            </div>
          ))}
          <div class="flex mb-4">
            <div class="bg-gray-200 p-3 rounded-lg max-w-xs">
              <p class="text-gray-800">"All"</p>
              {/* <p class="text-gray-800">Hello! How can I assist you today?</p> */}
            </div>
          </div>
          {/* Chat Bubble - Sent */}
          <div class="flex justify-end mb-4">
            <div class="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
              <p>Hi! I need help with an issue.</p>
            </div>
          </div>
          {/* Chat Bubble - Received */}
          <div class="flex mb-4">
            <div class="bg-gray-200 p-3 rounded-lg max-w-xs">
              <p class="text-gray-800">Sure, what seems to be the problem?</p>
            </div>
          </div>
          {/* Additional Chat Bubble for other users */}
          <div class="flex mb-4">
            <div class="bg-green-200 p-3 rounded-lg max-w-xs">
              <p class="text-gray-800">Can you please share more details?</p>
            </div>
          </div>
        </div>
        {/* Chat Input */}
        <div class="bg-gray-100 p-4 flex">
          <input
            type="text"
            placeholder="Type a message..."
            class="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            class="ml-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
