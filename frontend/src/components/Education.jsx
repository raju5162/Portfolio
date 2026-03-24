import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f10]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Education</h2>
          <div className="w-16 h-1 bg-[#10b981]"></div>
        </div>

        <div className="space-y-4">
          {education.map((edu) => (
            <Card key={edu.id} className="bg-[#1a1a1b] border-[#262626] p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap size={20} className="text-[#10b981] mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-[#f5f5f5] mb-1">{edu.institution}</h3>
                      <p className="text-[#10b981] font-medium text-sm">
                        {edu.degree}{edu.field && <span className="text-[#a3a3a3]"> - {edu.field}</span>}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 ml-8 text-[#a3a3a3] text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <div className="inline-block bg-[#10b981]/10 border border-[#10b981]/30 rounded px-4 py-2">
                    <p className="text-[#10b981] font-semibold text-sm">{edu.grade}</p>
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