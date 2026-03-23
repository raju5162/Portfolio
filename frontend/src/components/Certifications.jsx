import React from 'react';
import { Award, CheckCircle2, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { certifications } from '../data/mock';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f5f5f5] mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="bg-[#1a1a1b] border-[#404040] hover:border-[#10b981] transition-all duration-300 p-6 hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-[#10b981]/10 rounded-lg flex-shrink-0">
                  <Award size={24} className="text-[#10b981]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#f5f5f5] mb-2">{cert.name}</h3>
                  <p className="text-[#10b981] font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-[#a3a3a3] text-sm mb-3">{cert.date}</p>
                  
                  {/* Status Badge */}
                  <Badge
                    className={`${
                      cert.status === 'Completed'
                        ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]'
                        : 'bg-yellow-500/10 text-yellow-500 border-yellow-500'
                    } border`}
                  >
                    {cert.status === 'Completed' ? (
                      <CheckCircle2 size={14} className="mr-1" />
                    ) : (
                      <Clock size={14} className="mr-1" />
                    )}
                    {cert.status}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
