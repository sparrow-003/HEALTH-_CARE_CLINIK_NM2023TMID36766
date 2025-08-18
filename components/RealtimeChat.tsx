// src/components/RealtimeChat.tsx

import React, { useState, useEffect } from 'react';
// import ReactMarkdown from 'react-markdown'; // Will be used for Markdown rendering

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  content: string;
  isStreaming?: boolean;
  agentStatus?: 'active' | 'idle' | 'thinking';
}

interface RealtimeChatProps {
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
}

const RealtimeChat: React.FC<RealtimeChatProps> = ({
  messages,
  onSendMessage,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Placeholder for click-to-copy code blocks and heartbeat indicators
  const renderMessageContent = (message: ChatMessage) => {
    // In a real implementation, ReactMarkdown would be used here
    // with custom renderers for code blocks to add copy functionality.
    // For now, just display the content.
    return (
      <div className="message-content">
        {message.content}
        {message.sender === 'agent' && message.agentStatus && (
          <span className={`agent-heartbeat ${message.agentStatus}`}>
            {/* Visual indicator for agent status */}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="realtime-chat-container">
