import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f10]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Get In Touch</h2>
          <div className="w-16 h-1 bg-[#10b981]"></div>
          <p className="text-[#a3a3a3] mt-4">
            I'm currently looking for new opportunities. Feel free to reach out if you have a question or just want to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="bg-[#1a1a1b] border-[#262626] p-6 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#10b981]/10 rounded-lg mb-3">
                <Mail size={24} className="text-[#10b981]" />
              </div>
              <h3 className="text-base font-semibold text-[#f5f5f5] mb-2">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#a3a3a3] hover:text-[#10b981] transition-colors text-sm break-all"
              >
                {personalInfo.email}
              </a>
            </div>
          </Card>

          <Card className="bg-[#1a1a1b] border-[#262626] p-6 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#10b981]/10 rounded-lg mb-3">
                <Phone size={24} className="text-[#10b981]" />
              </div>
              <h3 className="text-base font-semibold text-[#f5f5f5] mb-2">Phone</h3>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-[#a3a3a3] hover:text-[#10b981] transition-colors text-sm"
              >
                {personalInfo.phone}
              </a>
            </div>
          </Card>

          <Card className="bg-[#1a1a1b] border-[#262626] p-6 text-center">
            <div className="flex flex-col items-center">
              <div className="p-3 bg-[#10b981]/10 rounded-lg mb-3">
                <MapPin size={24} className="text-[#10b981]" />
              </div>
              <h3 className="text-base font-semibold text-[#f5f5f5] mb-2">Location</h3>
              <p className="text-[#a3a3a3] text-sm">{personalInfo.location}</p>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1a1b] border border-[#404040] rounded text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href={`https://${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1a1a1b] border border-[#404040] rounded text-[#a3a3a3] hover:text-[#10b981] hover:border-[#10b981] transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <Button
            className="bg-[#10b981] hover:bg-[#059669] text-white"
            onClick={() => window.location.href = `mailto:${personalInfo.email}`}
          >
            Send Email
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;