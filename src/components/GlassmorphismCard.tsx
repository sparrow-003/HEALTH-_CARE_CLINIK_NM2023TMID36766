// src/components/GlassmorphismCard.tsx

import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`glassmorphism-card ${className || ''}`}>
      {children}
    </div>
  );
};

export default GlassmorphismCard;

