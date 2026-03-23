import React from 'react';
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0b] border-t border-[#404040] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Copyright */}
          <p className="text-[#a3a3a3] text-sm text-center">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Built with love */}
          <p className="text-[#a3a3a3] text-sm flex items-center gap-2">
            Built with <Heart size={16} className="text-[#10b981]" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
