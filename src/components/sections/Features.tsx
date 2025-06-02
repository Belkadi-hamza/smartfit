import React from 'react';
import { Activity, Zap, Smartphone, Heart, Clock, Shield } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Features = () => {
  const features = [
    {
      icon: <Activity className="w-10 h-10 text-blue-500" />,
      title: "Suivi en temps réel",
      description: "Monitoring constant des paramètres vitaux comme la température, la fréquence cardiaque et la tension artérielle."
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-500" />,
      title: "Stimulation électrique",
      description: "Technologie TENS/EMS intégrée pour soulager efficacement les douleurs chroniques de manière non-invasive."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-blue-500" />,
      title: "Application mobile",
      description: "Interface intuitive disponible sur iOS et Android pour suivre vos données et personnaliser votre expérience."
    },
    {
      icon: <Heart className="w-10 h-10 text-blue-500" />,
      title: "Confort optimal",
      description: "Tissus de haute qualité pour un confort quotidien, adaptés à une utilisation prolongée."
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: "Autonomie longue durée",
      description: "Batterie optimisée pour une utilisation continue sans recharge fréquente."
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-500" />,
      title: "Données sécurisées",
      description: "Protection avancée de vos données de santé avec chiffrement de bout en bout."
    }
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Pourquoi choisir SmartFit ?"
          subtitle="NOS FONCTIONNALITÉS"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center bg-blue-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-12 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Technologie brevetée</h3>
            <p className="max-w-2xl mx-auto mb-8">
              Notre technologie exclusive combine des capteurs avancés avec des tissus innovants pour créer des vêtements intelligents qui sont non seulement fonctionnels mais aussi confortables et élégants.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">99%</div>
                <div className="text-sm text-blue-100">Précision des capteurs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-blue-100">Suivi continu</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-sm text-blue-100">Réduction de la douleur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;