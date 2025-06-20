interface EcosystemItem {
  name: string;
  description: string;
  iconName: 'Users' | 'BookOpen' | 'Globe' | 'Zap'; // Should match EcosystemCard
}

export const ecosystemData: EcosystemItem[] = [
  {
    name: 'CSN Platform',
    description: 'Creative Synthesis Network - A collaborative platform for artists, scientists, and AI to co-create innovative projects.',
    iconName: 'Users',
  },
  {
    name: 'Neural Academy',
    description: 'An open learning environment for understanding and interacting with AEGIS-Ω, fostering AI literacy and ethical development.',
    iconName: 'BookOpen',
  },
  {
    name: 'Recursive OS Labs',
    description: 'Community-driven labs for experimenting with and extending the capabilities of the underlying AI operating systems.',
    iconName: 'Globe',
  },
  {
    name: 'SYNTH3SIS Initiative',
    description: 'A global initiative to synthesize knowledge across disciplines, powered by our advanced AI frameworks.',
    iconName: 'Zap',
  },
];
