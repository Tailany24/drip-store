// Section.tsx
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="section">
      
      {children}
    </div>
  );
};

export default Section;
