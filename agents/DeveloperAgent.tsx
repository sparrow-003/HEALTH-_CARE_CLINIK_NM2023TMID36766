// src/agents/DeveloperAgent.tsx

import React from 'react';
import AgentCard from '../components/AgentCard';

interface DeveloperAgentProps {
  // Add any specific props for the DeveloperAgent here
}

const DeveloperAgent: React.FC<DeveloperAgentProps> = () => {
  return (
    <AgentCard
      agentName="Developer Agent"
      agentRole="Coding, Debugging, System Design"
      agentStatus="active"
      // You can add an avatarSrc here if you have an image for the developer agent
    >
      {/* Add developer-specific information or actions here */}
      <p>This agent specializes in code generation, bug fixing, and system design.</p>
      {/* Example: <button>Generate Code</button> */}
    </AgentCard>
  );
};

