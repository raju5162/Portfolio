import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            {/* Greeting */}
            <div className="space-y-2 animate-fade-in">
              <p className="text-[#10b981] text-lg font-medium">Hi, my name is</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f5f5f5]">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#a3a3a3]">
                {personalInfo.title}
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-[#a3a3a3] text-lg leading-relaxed">
              I'm a passionate computer science student specializing in software development and data analysis.
              I build data-driven solutions and solve complex problems using modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start md:justify-start justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#10b981] hover:bg-[#059669] text-white transition-all duration-300 hover:scale-105 group"
                onClick={scrollToContact}
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#10b981] text-[#10b981] hover:bg-[#10b981] hover:text-white transition-all duration-300 hover:scale-105"
                onClick={() => window.open(personalInfo.resumeLink, '_blank')}
              >
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center md:justify-start justify-center gap-6 pt-8">
              <a
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-[#10b981] transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a3a3a3] hover:text-[#10b981] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#a3a3a3] hover:text-[#10b981] transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#10b981] to-[#059669] rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              <img
                src={personalInfo.profilePhoto}
                alt={personalInfo.name}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#1a1a1b] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
