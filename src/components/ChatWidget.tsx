import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./ChatWidget.css";

const ChatWidget: React.FC = () => {
  return (
    <div className="floating-button chat-widget">
      <FaWhatsapp />
    </div>
  );
};

export default ChatWidget;
