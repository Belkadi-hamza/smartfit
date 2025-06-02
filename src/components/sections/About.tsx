import React from 'react';
import { Heart, Award, Users } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-10 h-10 text-blue-500" />,
      title: "Bien-être",
      description: "Nous plaçons votre santé et votre confort au cœur de nos innovations."
    },
    {
      icon: <Award className="w-10 h-10 text-blue-500" />,
      title: "Excellence",
      description: "Nos produits sont développés selon les plus hauts standards de qualité."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-500" />,
      title: "Accessibilité",
      description: "Nous rendons la technologie santé accessible à tous les âges et budgets."
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Qu'est-ce que SmartFit ?"
          subtitle="À PROPOS DE NOUS"
        />
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg text-gray-700">
            SmartFit est un vêtement intelligent connecté qui allie technologie textile et suivi physiologique pour le soulagement des douleurs chroniques. Conçu pour les bébés, enfants et adultes, il offre une alternative douce aux soins traditionnels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Notre Mission</h3>
            <p className="text-gray-700 mb-6">
              Nous sommes une équipe de jeunes entrepreneur(e)s passionné(e)s, déterminé(e)s à proposer des solutions innovantes pour le bien-être de tous. Notre vision est de rendre la santé connectée accessible à chaque utilisateur.
            </p>
            <p className="text-gray-700 mb-6">
              Grâce à des années de recherche et développement, nous avons créé une gamme de vêtements intelligents qui allient confort, esthétique et technologie avancée pour suivre vos paramètres vitaux et vous aider à prendre soin de votre santé au quotidien.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {values.map((value, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 text-center transform hover:scale-105 transition-transform">
                  <div className="flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3"></div>
              <img 
                src="https://i.ibb.co/WvzCyXgg/Whats-App-Image-2025-06-02-at-19-13-01-27b3a216.jpg" 
                alt="Notre équipe SmartFit" 
                className="relative rounded-lg shadow-lg z-10 object-cover w-full h-auto aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;