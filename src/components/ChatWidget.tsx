import React, { useEffect } from "react";

const ChatWidget: React.FC = () => {
  useEffect(() => {
    console.log("ChatWidget useEffect triggered");
    const script = document.createElement("script");
    script.src = "https://app.chatwith.io/embed/330631307849";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      console.log("ChatWidget cleanup");
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;
