import { Activity } from 'lucide-react';
import Button from '../ui/Button';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo avec effet de hover */}
        <a 
          href="#accueil" 
          className="flex items-center group"
        >
          <span className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent ${
            scrolled ? 'group-hover:from-blue-500 group-hover:to-blue-300' : 'group-hover:from-blue-500 group-hover:to-blue-300'
          } transition-all duration-300`}>
            SmartFit.
          </span>
        </a>
        

        
        {/* Version mobile du bouton (plus petit) */}
        <Button 
          label="Contact" 
          href="#contact" 
          variant={scrolled ? "primary" : "outline"}
          size="small"
          className="sm:hidden"
        />
      </div>
    </header>
  );
};

export default Header;