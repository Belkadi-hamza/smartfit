import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section 
      id="accueil" 
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%)',
      }}
    >
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-blue-100 rounded-bl-full opacity-40 transform translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Votre Santé Connectée
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Alliez confort et innovation pour un suivi santé au quotidien !
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                label="Découvrir nos produits" 
                href="#produits" 
                variant="primary"
                size="large"
              />
              <Button 
                label="En savoir plus" 
                href="#a-propos" 
                variant="outline"
                size="large"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img 
                  src="https://i.ibb.co/WvzCyXgg/Whats-App-Image-2025-06-02-at-19-13-01-27b3a216.jpg" 
                  alt="SmartFit wearable technology" 
                  className="rounded-lg shadow-lg object-cover w-full h-auto aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;