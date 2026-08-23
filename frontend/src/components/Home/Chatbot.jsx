import { useState } from "react";
import chatService from "../../services/chatService";
import "./chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm the GetKit Assistant. How can I help you?"
    }
  ]);

  const handleSend = async () => {
    const message = input.trim();

    if (!message || loading) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message
      }
    ]);

    setInput("");
    setLoading(true);

    try {
      const data = await chatService.sendMessage(message);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply
        }
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="chatbot-window">

          {/* Header */}
          <div className="chatbot-header">
            <div>
              <h3>GetKit Assistant</h3>
              <p>Ask me anything</p>
            </div>

            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user"
                    ? "user-message"
                    : "bot-message"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="chat-message bot-message">
                Thinking...
              </div>
            )}

          </div>

          {/* Input */}
          <div className="chatbot-input-area">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something..."
              disabled={loading}
            />

            <button
              onClick={handleSend}
              disabled={loading}
            >
              Send
            </button>

          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        className="chatbot-button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        💬
      </button>
    </>
  );
};

export default Chatbot;