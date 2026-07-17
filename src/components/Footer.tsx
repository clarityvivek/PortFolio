// import React from 'react';
import { portfolioMetadata } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 border-t border-gray-900 mt-24 py-8 px-6 text-center text-xs text-gray-600">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} {portfolioMetadata.name}. Built with React, TypeScript, and Tailwind v4.</p>
        <div className="flex gap-6 font-bold text-gray-500">
          <a href={portfolioMetadata.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href={portfolioMetadata.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};