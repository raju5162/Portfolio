import React from 'react';
import { Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f10]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Featured Projects</h2>
          <div className="w-16 h-1 bg-[#10b981]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-[#1a1a1b] border-[#262626] p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-[#f5f5f5] flex-1">{project.title}</h3>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#a3a3a3] hover:text-[#10b981] transition-colors ml-2">
                  <Github size={20} />
                </a>
              </div>
              <p className="text-[#10b981] text-sm mb-4">{project.date}</p>
              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-[#f5f5f5] text-sm font-semibold mb-2">Key Features:</p>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-[#a3a3a3] text-sm flex items-start">
                      <span className="text-[#10b981] mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} className="bg-[#10b981]/10 text-[#10b981] border-0 text-xs">{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;