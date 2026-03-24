import React from 'react';
import { Card } from './ui/card';
import { about } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f5f5f5] mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main About Text */}
          <Card className="bg-[#1a1a1b] border-[#404040] p-8 hover:border-[#10b981] transition-all duration-300 mb-8">
            <p className="text-[#a3a3a3] text-lg leading-relaxed">
              {about.summary}
            </p>
          </Card>

          {/* Highlights */}
          {about.highlights && about.highlights.length > 0 && (
            <div className="flex justify-center">
              {about.highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="bg-[#1a1a1b] border-[#404040] p-6 hover:border-[#10b981] hover:scale-105 transition-all duration-300 max-w-xs"
                >
                  <div className="text-center">
                    <p className="text-[#a3a3a3] text-sm mb-1">{highlight.label}</p>
                    <p className="text-[#10b981] text-3xl font-bold">{highlight.value}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
