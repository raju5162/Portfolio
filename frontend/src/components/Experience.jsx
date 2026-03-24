import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Experience & Training</h2>
          <div className="w-16 h-1 bg-[#10b981]"></div>
        </div>

        <div className="space-y-6">
          {experience.map((exp) => (
            <Card key={exp.id} className="bg-[#1a1a1b] border-[#262626] p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={18} className="text-[#10b981]" />
                    <h3 className="text-xl font-bold text-[#f5f5f5]">{exp.role}</h3>
                  </div>
                  <p className="text-lg text-[#10b981] mb-2">{exp.organization}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-4 text-[#a3a3a3] text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4">{exp.description}</p>

              <div className="mb-4">
                <p className="text-[#f5f5f5] text-sm font-semibold mb-2">Key Achievements:</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-[#a3a3a3] text-sm flex items-start">
                      <span className="text-[#10b981] mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
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

export default Experience;