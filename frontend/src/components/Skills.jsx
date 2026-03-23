import React from 'react';
import { Code2, Boxes, Wrench, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      items: skills.languages,
      color: '#10b981'
    },
    {
      title: 'Frameworks & Libraries',
      icon: Boxes,
      items: skills.frameworks,
      color: '#10b981'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      items: skills.tools,
      color: '#10b981'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      items: skills.softSkills,
      color: '#10b981'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f5f5f5] mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="bg-[#1a1a1b] border-[#404040] p-8 hover:border-[#10b981] transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#10b981]/10 rounded-lg">
                    <IconComponent size={24} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f5f5f5]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-[#404040] text-[#a3a3a3] hover:border-[#10b981] hover:text-[#10b981] transition-colors px-4 py-2 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
