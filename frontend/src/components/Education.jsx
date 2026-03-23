import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f5f5f5] mb-4">Education</h2>
          <div className="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu) => (
            <Card
              key={edu.id}
              className="bg-[#1a1a1b] border-[#404040] hover:border-[#10b981] transition-all duration-300 p-8 hover:scale-[1.01]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  {/* Institution */}
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap size={24} className="text-[#10b981] mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-[#f5f5f5] mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-[#10b981] font-semibold">
                        {edu.degree}
                        {edu.field && <span className="text-[#a3a3a3]"> - {edu.field}</span>}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 ml-9 text-[#a3a3a3] text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Grade */}
                <div className="mt-4 md:mt-0 md:text-right">
                  <div className="inline-block bg-[#10b981]/10 border border-[#10b981] rounded-lg px-4 py-2">
                    <p className="text-[#10b981] font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
