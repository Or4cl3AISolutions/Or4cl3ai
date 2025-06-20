interface ImpactItem {
  metric: string;
  value: string;
  description?: string;
  iconName: 'Shield' | 'Zap' | 'Users' | 'Globe';
}

export const impactData: ImpactItem[] = [
  {
    metric: 'Ethical Compliance',
    value: '99.9%',
    description: 'Adherence to AEGIS-Ω ethical framework across all operations.',
    iconName: 'Shield',
  },
  {
    name: 'Innovation Velocity',
    value: '3x',
    description: 'Rate of new discoveries and solutions generated via AI collaboration.',
    iconName: 'Zap',
  },
  {
    name: 'Global Reach',
    value: '1M+',
    description: 'Individuals positively impacted by solutions from the CSN platform.',
    iconName: 'Users',
  },
  {
    name: 'Knowledge Synthesized',
    value: '10PB',
    description: 'Petabytes of cross-disciplinary data processed and integrated by SYNTH3SIS.',
    iconName: 'Globe',
  },
];
