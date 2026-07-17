// import React from 'react';
import { projectsData } from '../data/portfolioData';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const ProjectsGrid = () => {
  const { activeFilter, setActiveFilter } = usePortfolioStore();

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-extrabold text-white tracking-tight">System Deployments</h2>
        <p className="text-gray-400 text-xs mt-1">Filtered matrices mapping full stack, validation lifecycles, and machine systems.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["All", "Full-Stack", "ML-Systems", "Hardware-IoT"] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
              activeFilter === filter
                ? "bg-blue-950/60 border-blue-500 text-blue-400 scale-102 shadow-md shadow-blue-500/5"
                : "bg-gray-900 border-gray-800 text-gray-400 hover:text-gray-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-gray-900/30 border border-gray-900 p-6 rounded-2xl flex flex-col justify-between hover:border-gray-800 transition-all group duration-300">
            <div>
              <span className="text-[10px] uppercase font-black text-blue-400 bg-blue-950/40 px-2 py-0.5 border border-blue-900/40 rounded">
                {project.category}
              </span>
              <h3 className="text-lg font-bold text-white mt-4 group-hover:text-blue-400 transition-colors tracking-tight">{project.title}</h3>
              <p className="text-gray-400 text-xs mt-2 leading-relaxed">{project.description}</p>
              
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-1 mt-3">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-[10px] font-semibold bg-gray-950 text-gray-500 px-2 py-0.5 rounded border border-gray-900/40">{tech}</span>
                ))}
              </div>
              <div className="pt-4 mt-4 border-t border-gray-900 flex gap-4 text-xs font-bold">
                {project.category !== "Hardware-IoT" ? (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">
                    📁 Public Git Vault
                    </a>
                ) : (
                <span className="text-gray-500 select-none">🔒 Firmware Local Deployment Only</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};