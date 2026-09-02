import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language }) => {
  return (
    <div className="group p-6 rounded-2xl bg-[var(--surface)] hover:bg-[var(--card)] transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        <img 
          src={TechStackIcon} 
          alt={`${Language} icon`} 
          className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
        />
      </div>
      <span className="text-[var(--ink-soft)] font-semibold text-sm md:text-base tracking-wide group-hover:text-[var(--ink)] transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 