import React from 'react';
import { Trophy } from 'lucide-react';
import { Card } from './ui/card';
import { achievements } from '../data/mock';

const Achievements = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f5f5f5] mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-[#10b981] mx-auto"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="bg-[#1a1a1b] border-[#404040] hover:border-[#10b981] transition-all duration-300 p-6 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-4">
                {/* Trophy Icon */}
                <div className="p-4 bg-[#10b981]/10 rounded-full flex-shrink-0">
                  <Trophy size={28} className="text-[#10b981]" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-[#f5f5f5] mb-1">{achievement.title}</h3>
                  <p className="text-[#a3a3a3] text-sm">{achievement.platform}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
