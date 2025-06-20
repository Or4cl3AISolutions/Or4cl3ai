import React from 'react';
import { Users, BookOpen, Globe, Zap } from 'lucide-react'; // Example icons

interface EcosystemCardProps {
  name: string;
  description: string;
  iconName: 'Users' | 'BookOpen' | 'Globe' | 'Zap'; // Example icon names
  index: number;
}

const iconComponents = {
  Users,
  BookOpen,
  Globe,
  Zap,
};

const EcosystemCard: React.FC<EcosystemCardProps> = ({ name, description, iconName, index }) => {
  const IconComponent = iconComponents[iconName] || Users; // Default icon
  const animationDelay = `${index * 100}ms`; // For staggered animation if used

  return (
    <div
      className="bg-purple-800/60 p-6 rounded-xl shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-purple-600/20 rounded-full mr-4">
          <IconComponent className="w-8 h-8 text-purple-300" />
        </div>
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default EcosystemCard;
