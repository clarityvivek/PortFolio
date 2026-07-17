// import React from 'react';
import { portfolioMetadata } from '../data/portfolioData';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-900 px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <span className="font-black text-sm tracking-widest text-blue-400 uppercase">
          {portfolioMetadata.name}
        </span>
        <div className="flex gap-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Capabilities</a>
        </div>
      </div>
    </nav>
  );
};