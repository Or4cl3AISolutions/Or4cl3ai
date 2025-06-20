import React from 'react';
import { Shield, Zap, Users, Globe } from 'lucide-react'; // Example icons

interface ImpactCardProps {
  metric: string;
  value: string;
  description?: string; // Optional description
  iconName: 'Shield' | 'Zap' | 'Users' | 'Globe';
  index: number;
}

const iconComponents = {
  Shield,
  Zap,
  Users,
  Globe,
};

const ImpactCard: React.FC<ImpactCardProps> = ({ metric, value, description, iconName, index }) => {
  const IconComponent = iconComponents[iconName] || Zap; // Default icon
  const animationDelay = `${index * 100}ms`;

  return (
    <div
      className="bg-slate-800/70 p-6 rounded-lg shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay }}
    >
      <div className="flex items-center justify-center mb-4">
        <IconComponent className="w-10 h-10 text-green-400" />
      </div>
      <h3 className="text-4xl font-bold text-center text-white mb-2">{value}</h3>
      <p className="text-lg text-center text-green-400 mb-3">{metric}</p>
      {description && <p className="text-sm text-center text-gray-400">{description}</p>}
    </div>
  );
};

export default ImpactCard;
