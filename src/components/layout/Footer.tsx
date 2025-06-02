import { Activity, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Activity className="mr-2" size={32} />
              <span className="text-2xl font-bold">SmartFit</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              SmartFit est un vêtement intelligent connecté qui allie technologie textile et suivi physiologique pour le soulagement des douleurs chroniques.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 SmartFit. Tous droits réservés.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors"
            aria-label="Retour en haut"
          >
            <span className="mr-2">Retour en haut</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;