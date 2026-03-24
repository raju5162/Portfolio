import React from 'react';
import { Award, CheckCircle2, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { certifications } from '../data/mock';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Certifications</h2>
          <div className="w-16 h-1 bg-[#10b981]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <Card key={cert.id} className="bg-[#1a1a1b] border-[#262626] p-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#10b981]/10 rounded flex-shrink-0">
                  <Award size={20} className="text-[#10b981]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#f5f5f5] mb-1">{cert.name}</h3>
                  <p className="text-[#10b981] font-medium text-sm mb-1">{cert.issuer}</p>
                  <p className="text-[#a3a3a3] text-xs mb-2">{cert.date}</p>
                  
                  <Badge className={`${
                    cert.status === 'Completed'
                      ? 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/30'
                      : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30'
                  } border text-xs`}>
                    {cert.status === 'Completed' ? (
                      <CheckCircle2 size={12} className="mr-1" />
                    ) : (
                      <Clock size={12} className="mr-1" />
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