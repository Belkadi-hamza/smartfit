import React, { useState } from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

interface ProductFeature {
  [key: string]: string | string[];
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface ProductCardProps {
  product: ProductFeature;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Conteneur d'image carré */}
      <div className="relative overflow-hidden w-full aspect-square">
        <img 
          src={product.image} 
          alt={product.title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
        </div>
      </div>
      
      {/* Contenu texte */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Fonctionnalités</h4>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <Button 
            label="En savoir plus" 
            href="#contact" 
            variant="outline" 
            fullWidth
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;