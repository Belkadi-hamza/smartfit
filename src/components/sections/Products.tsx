import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import ProductCard from '../ui/ProductCard';

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Pyjama Bébé",
      description: "Suivi des paramètres vitaux des bébés durant leur sommeil, avec alertes en temps réel pour les parents.",
      image: "https://i.ibb.co/Tz1Sx0N/Whats-App-Image-2025-06-02-at-19-10-05-d73d1881.jpg",
      features: [
        "Suivi de la température corporelle",
        "Monitoring de la respiration",
        "Tissu hypoallergénique",
        "Lavable en machine"
      ]
    },
    {
      id: 2,
      title: "T-shirt Connecté",
      description: "Idéal pour les adultes, intégrant des capteurs pour le suivi de la santé et le soulagement des douleurs chroniques.",
      image: "https://i.ibb.co/WvzCyXgg/Whats-App-Image-2025-06-02-at-19-13-01-27b3a216.jpg",
      features: [
        "Électrostimulation intégrée",
        "Suivi cardiaque",
        "Monitoring de l'activité",
        "Connexion Bluetooth"
      ]
    }
  ];

  return (
    <section id="produits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos Produits"
          subtitle="INNOVATION TEXTILE"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            label="Découvrez tous nos produits" 
            href="#contact"
            variant="primary"
            icon={<ArrowRight size={18} />}
            iconPosition="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Products;