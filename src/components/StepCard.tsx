
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 md:items-start md:text-left animate-float">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-harmonix-purple to-harmonix-teal mb-4 text-white">
        <Icon size={28} />
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-harmonix-pink flex items-center justify-center text-white text-xs font-bold">
        {number}
      </div>
      <h3 className="text-xl font-display font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default StepCard;
