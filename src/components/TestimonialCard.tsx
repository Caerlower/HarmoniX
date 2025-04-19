
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatarUrl }) => {
  return (
    <div className="glass-card rounded-xl p-6 relative">
      <div className="mb-4 text-3xl text-harmonix-purple">"</div>
      <p className="text-gray-300 italic mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-harmonix-purple">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-bold text-white">{name}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
