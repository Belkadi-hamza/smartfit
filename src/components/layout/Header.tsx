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
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#accueil" className="flex items-center text-2xl font-bold text-blue-600">
          <span>SmartFit.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigationItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-gray-800 hover:text-blue-500'
              }`}
            >
              {item.label}
            </a>
          ))}
          <Button label="Nous contacter" href="#contact" />
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-gray-800 hover:text-blue-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button label="Nous contacter" href="#contact" onClick={() => setMobileMenuOpen(false)} fullWidth />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;