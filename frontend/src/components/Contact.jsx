import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f5f5f5] mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#10b981] mx-auto"></div>
          <p className="text-[#a3a3a3] mt-4 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Email */}
          <Card className="bg-[#1a1a1b] border-[#404040] hover:border-[#10b981] transition-all duration-300 p-6 text-center hover:scale-[1.02]">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#10b981]/10 rounded-full mb-4">
                <Mail size={28} className="text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#a3a3a3] hover:text-[#10b981] transition-colors text-sm break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </Card>

          {/* Phone */}
          <Card className="bg-[#1a1a1b] border-[#404040] hover:border-[#10b981] transition-all duration-300 p-6 text-center hover:scale-[1.02]">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#10b981]/10 rounded-full mb-4">
                <Phone size={28} className="text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">Phone</h3>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-[#a3a3a3] hover:text-[#10b981] transition-colors text-sm"
              >
                {personalInfo.phone}
              </a>
            </div>
          </Card>

          {/* Location */}
          <Card className="bg-[#1a1a1b] border-[#404040] hover:border-[#10b981] transition-all duration-300 p-6 text-center hover:scale-[1.02]">
            <div className="flex flex-col items-center">
              <div className="p-4 bg-[#10b981]/10 rounded-full mb-4">
                <MapPin size={28} className="text-[#10b981]" />
              </div>
              <h3 className="text-lg font-semibold text-[#f5f5f5] mb-2">Location</h3>
              <p className="text-[#a3a3a3] text-sm">{personalInfo.location}</p>
            </div>
          </Card>
        </div>

        {/* Social Links & CTA */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#1a1a1b] border border-[#404040] rounded-lg text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#1a1a1b] border border-[#404040] rounded-lg text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <Button
            size="lg"
            className="bg-[#10b981] hover:bg-[#059669] text-white transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = `mailto:${personalInfo.email}`}
          >
            <Send className="mr-2 h-5 w-5" />
            Send Me an Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
