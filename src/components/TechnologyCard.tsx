import React from 'react';
import { Brain, Zap, Shield, Network, Users, Cpu } from 'lucide-react'; // Example icons

interface TechnologyCardProps {
  name: string;
  description: string;
  iconName: 'Brain' | 'Zap' | 'Shield' | 'Network' | 'Users' | 'Cpu'; // Or a more flexible type
  index: number;
}

const iconComponents = {
  Brain,
  Zap,
  Shield,
  Network,
  Users,
  Cpu,
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, description, iconName, index }) => {
  const IconComponent = iconComponents[iconName] || Cpu; // Default to Cpu icon if not found
  const animationDelay = `${index * 100}ms`;

  return (
    <div
      className="bg-slate-800/60 p-6 rounded-xl shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-cyan-600/20 rounded-full mr-4">
          <IconComponent className="w-8 h-8 text-cyan-400" />
        </div>
        <h3 className="text-2xl font-semibold text-white">{name}</h3>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default TechnologyCard;
