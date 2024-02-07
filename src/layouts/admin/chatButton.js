import React from "react";

const ChatButton = ({ email }) => {
  const openTeamsChat = () => {
    const teamsUrl = `https://teams.microsoft.com/l/chat/0/0?users=${encodeURIComponent(email)}`;
    window.open(teamsUrl, "_blank");
  };

  return <button onClick={openTeamsChat}>Open Teams Chat</button>;
};

export default ChatButton;
