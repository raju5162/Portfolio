import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f5f5f5] mb-4">Experience & Training</h2>
          <div className="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experience.map((exp) => (
            <Card
              key={exp.id}
              className="bg-[#1a1a1b] border-[#404040] hover:border-[#10b981] transition-all duration-300 p-8"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={20} className="text-[#10b981]" />
                    <h3 className="text-2xl font-bold text-[#f5f5f5]">{exp.role}</h3>
                  </div>
                  <p className="text-xl text-[#10b981] mb-2">{exp.organization}</p>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 mb-6 text-[#a3a3a3] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#a3a3a3] leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-[#f5f5f5] font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-[#a3a3a3] flex items-start">
                      <span className="text-[#10b981] mr-2">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    className="bg-[#10b981]/10 text-[#10b981] border-0"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
