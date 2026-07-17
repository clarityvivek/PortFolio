// import React from 'react';
import { coreSkillMatrix } from '../data/portfolioData';

export const TechMatrix = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-extrabold text-white tracking-tight">Technical Compilers & Competency Matrix</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/10 border border-gray-900 p-5 rounded-xl">
          <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 border-b border-gray-900 pb-2 mb-3">Languages Matrix</h3>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
            {coreSkillMatrix.languages.map(lang => (
              <span key={lang} className="bg-gray-900 border border-gray-800/60 px-2.5 py-1 rounded-md">{lang}</span>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/10 border border-gray-900 p-5 rounded-xl">
          <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 border-b border-gray-900 pb-2 mb-3">Stacks & Libraries</h3>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
            {coreSkillMatrix.frameworks.concat(coreSkillMatrix.dataStorage).map(tech => (
              <span key={tech} className="bg-gray-900 border border-gray-800/60 px-2.5 py-1 rounded-md">{tech}</span>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/10 border border-gray-900 p-5 rounded-xl">
          <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 border-b border-gray-900 pb-2 mb-3">Core Engineering Systems</h3>
          <ul className="flex flex-col gap-2 text-xs text-gray-400 leading-relaxed">
            {coreSkillMatrix.coursework.map(course => (
              <li key={course} className="truncate">• {course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};