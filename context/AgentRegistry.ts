// src/context/AgentRegistry.ts

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Agent {
  id: string;
  name: string;
  role: string;
  component: React.ComponentType<any>;
}

interface AgentRegistryContextType {
  agents: Agent[];
  registerAgent: (agent: Agent) => void;
  getAgentById: (id: string) => Agent | undefined;
  // Add other methods for dynamic spawning and dissolution if needed
}

const AgentRegistryContext = createContext<AgentRegistryContextType | undefined>(undefined);

interface AgentRegistryProviderProps {
  children: ReactNode;
}

export const AgentRegistryProvider: React.FC<AgentRegistryProviderProps> = ({ children }) => {
  const [agents, setAgents] = useState<Agent[]>([]);

  const registerAgent = (agent: Agent) => {
    setAgents((prevAgents) => [...prevAgents, agent]);
  };

  const getAgentById = (id: string) => {
    return agents.find((agent) => agent.id === id);
  };

  return (
    <AgentRegistryContext.Provider value={{ agents, registerAgent, getAgentById }}>
      {children}
