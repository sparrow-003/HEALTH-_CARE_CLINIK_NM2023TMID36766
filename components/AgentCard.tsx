// src/components/AgentCard.tsx

import React from 'react';
import GlassmorphismCard from './GlassmorphismCard';

interface AgentCardProps {
  agentName: string;
  agentRole: string;
  agentStatus: 'active' | 'idle' | 'thinking' | 'offline';
  avatarSrc?: string;
  children?: React.ReactNode;
}

const AgentCard: React.FC<AgentCardProps> = ({
  agentName,
  agentRole,
  agentStatus,
  avatarSrc,
  children,
}) => {
  return (
    <GlassmorphismCard className={`agent-card ${agentStatus}`}>
      <div className="agent-avatar">
        {avatarSrc ? <img src={avatarSrc} alt={`${agentName} avatar`} /> : <div className="default-avatar" />}
        <span className={`presence-indicator ${agentStatus}`} />
      </div>
      <div className="agent-info">
        <h3>{agentName}</h3>
        <p>{agentRole}</p>
        <span className="agent-status">Status: {agentStatus}</span>
