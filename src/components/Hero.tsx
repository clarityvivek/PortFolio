// import React from 'react';
import { portfolioMetadata } from '../data/portfolioData';

export const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-6 w-full">
      
      <div className="flex flex-col gap-4 max-w-2xl w-full">
        <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
          {portfolioMetadata.institution} • {portfolioMetadata.department}
        </span>
        
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
          Making Full-Stack & ML Workflows.
        </h1>
        
        <p className="text-gray-400 text-base leading-relaxed mt-2">
          A developer focusing on frontend components, backend via FastAPI, and pipeline model lifecycles.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-4">
          <a href="#projects" className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-semibold text-xs uppercase tracking-wider transition-all hover:bg-blue-500 active:scale-95 shadow-lg shadow-blue-600/20">
            Explore Project Work
          </a>
          <a href={portfolioMetadata.resumeUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-gray-900 text-gray-300 border border-gray-800 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all hover:text-white hover:border-gray-700">
            Access Resume (PDF)
          </a>
        </div>
      </div>

      <div className="relative shrink-0 group">
        <div className="absolute inset-0 bg-blue-500 rounded-2xl opacity-10 blur-xl group-hover:opacity-25 transition-opacity duration-300"></div>
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-blue-500 shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
          <img 
            src={portfolioMetadata.profileImg} 
            alt={portfolioMetadata.name}
            className="w-full h-full object-cover select-none"
          />
        </div>
      </div>

    </div>
  );
};