
import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  twitterHandle?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, bio, imageUrl, twitterHandle }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-1">{name}</h3>
        <p className="text-harmonix-teal mb-3">{role}</p>
        <p className="text-gray-400 mb-4 text-sm">{bio}</p>
        {twitterHandle && (
          <a 
            href={`https://twitter.com/${twitterHandle}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-harmonix-purple hover:underline"
          >
            @{twitterHandle}
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
