import { TechnologyCardProps } from '../components/TechnologyCard'; // This might cause an issue if TechnologyCardProps is not exported, or if paths are tricky.
                                                                    // Let's define the type inline for now to be safe.

interface Technology {
  name: string;
  description: string;
  iconName: 'Brain' | 'Zap' | 'Shield' | 'Network' | 'Users' | 'Cpu';
}

export const technologies: Technology[] = [
  {
    name: 'ASTRÆA System',
    description: 'Advanced Sentient Textual & Reasoning AI Engine, providing unparalleled natural language understanding and generation.',
    iconName: 'Brain',
  },
  {
    name: 'Quantum Synapse',
    description: 'Quantum-classical hybrid processing units enabling breakthroughs in complex problem-solving and simulation.',
    iconName: 'Cpu',
  },
  {
    name: 'SOLUS OS',
    description: 'A decentralized operating system for AI agents, ensuring secure and autonomous operation across networks.',
    iconName: 'Network',
  },
  {
    name: 'AEGIS-Ω Privacy Engine',
    description: 'Adaptive Ethical General Intelligence Shield - Omega level. Ensures ethical AI behavior and robust data privacy using advanced cryptographic methods.',
    iconName: 'Shield',
  },
  {
    name: 'Synergy Matrix',
    description: 'Facilitates seamless collaboration between human users and AI agents, enhancing collective intelligence.',
    iconName: 'Users',
  },
  {
    name: 'Chrono-Shift Modulators',
    description: 'Speculative temporal processing units for predictive analysis and anomaly detection in vast datasets.',
    iconName: 'Zap',
  },
];
