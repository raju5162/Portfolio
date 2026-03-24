import React from 'react';
import { Card } from './ui/card';
import { about } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f10]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">About Me</h2>
          <div className="w-16 h-1 bg-[#10b981]"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Main About Text */}
          <div className="md:col-span-3">
            <Card className="bg-[#1a1a1b] border-[#262626] p-8">
              <div className="text-[#a3a3a3] text-base leading-relaxed space-y-4">
                {about.summary.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Card>
          </div>

          {/* Highlights */}
          <div className="md:col-span-1">
            {about.highlights && about.highlights.length > 0 && (
              <Card className="bg-[#1a1a1b] border-[#262626] p-6">
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="text-center">
                    <p className="text-[#a3a3a3] text-sm mb-2">{highlight.label}</p>
                    <p className="text-[#10b981] text-4xl font-bold">{highlight.value}</p>
                  </div>
                ))}
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;