import React from 'react';
import { Code2, Boxes, Wrench, Users } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    { title: 'Programming Languages', icon: Code2, items: skills.languages },
    { title: 'Frameworks & Libraries', icon: Boxes, items: skills.frameworks },
    { title: 'Tools & Platforms', icon: Wrench, items: skills.tools },
    { title: 'Soft Skills', icon: Users, items: skills.softSkills }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-[#10b981]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="bg-[#1a1a1b] border-[#262626] p-6">
                <div className="flex items-center gap-3 mb-5">
                  <IconComponent size={20} className="text-[#10b981]" />
                  <h3 className="text-lg font-semibold text-[#f5f5f5]">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="border-[#404040] text-[#a3a3a3] bg-[#0f0f10] px-3 py-1.5 text-sm">
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