import React from 'react';
import { Menu, X } from 'lucide-react'; // Assuming lucide-react is used for icons

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionClick,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'technologies', label: 'AEGIS-Ω' },
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'impact', label: 'Impact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400">Or4cl3 AI</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSectionClick(link.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${activeSection === link.id
                  ? 'bg-cyan-500 text-white'
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onSectionClick(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${activeSection === link.id
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
