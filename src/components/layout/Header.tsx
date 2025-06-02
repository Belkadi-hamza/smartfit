import { useState } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import Button from '../ui/Button';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#a-propos' },
    { label: 'Produits', href: '#produits' },
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Témoignages', href: '#temoignages' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo et bouton mobile en ligne sur mobile */}
        <div className="w-full md:w-auto flex justify-between items-center">
          <a href="#accueil" className="flex items-center text-2xl font-bold text-blue-600">
            <span>SmartFit.</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation - Centrée */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          {navigationItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`px-1 py-2 text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-500'
              } relative group`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
        
        {/* Bouton CTA - Aligné à droite */}
        <div className="hidden md:block">
          <Button 
            label="Nous contacter" 
            href="#contact" 
            variant={scrolled ? "primary" : "outline"}
          />
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-6 flex flex-col items-center space-y-5">
            {navigationItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-lg text-gray-800 hover:text-blue-600 py-2 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              label="Nous contacter" 
              href="#contact" 
              variant="primary"
              className="mt-4"
              onClick={() => setMobileMenuOpen(false)} 
              fullWidth 
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;