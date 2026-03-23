import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f5f5f5] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#10b981] mx-auto"></div>
          <p className="text-[#a3a3a3] mt-4 max-w-2xl mx-auto">
            Showcase of my recent work in data analysis and software development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#1a1a1b] border-[#404040] hover:border-[#10b981] transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#f5f5f5]">{project.title}</h3>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a3a3a3] hover:text-[#10b981] transition-colors"
                  >
                    <Github size={24} />
                  </a>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-[#a3a3a3] text-sm mb-4">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>

                {/* Description */}
                <p className="text-[#a3a3a3] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-[#f5f5f5] font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-[#a3a3a3] text-sm flex items-start">
                        <span className="text-[#10b981] mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      className="bg-[#10b981]/10 text-[#10b981] border-0"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* View Project Button */}
                <Button
                  className="w-full bg-transparent border border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white transition-all duration-300"
                  onClick={() => window.open(project.githubLink, '_blank')}
                >
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
