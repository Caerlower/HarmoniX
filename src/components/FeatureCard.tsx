
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="glass-card rounded-xl p-6 transition-all hover:scale-105 hover:shadow-xl hover:shadow-harmonix-purple/10 group">
      <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-harmonix-purple to-harmonix-teal/80">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="text-xl font-display font-bold mb-2 group-hover:gradient-text">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
