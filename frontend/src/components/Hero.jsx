import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Profile Photo */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#f5f5f5] leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl text-[#10b981] font-medium">
                {personalInfo.title}
              </h2>
              <div className="w-16 h-1 bg-[#10b981]"></div>
            </div>

            {/* Description */}
            <p className="text-[#a3a3a3] text-base leading-relaxed">
              Passionate computer science student specializing in software development and data analysis. 
              Building data-driven solutions and solving complex problems using modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                className="bg-[#10b981] hover:bg-[#059669] text-white"
                onClick={scrollToContact}
              >
                Contact Me
              </Button>
              <Button
                variant="outline"
                className="border-[#404040] text-[#f5f5f5] hover:bg-[#1a1a1b]"
                onClick={() => window.open(personalInfo.resumeLink, '_blank')}
              >
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1a1a1b] border border-[#404040] rounded text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#1a1a1b] border border-[#404040] rounded text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-[#1a1a1b] border border-[#404040] rounded text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;