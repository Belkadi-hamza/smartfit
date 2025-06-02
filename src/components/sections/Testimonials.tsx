import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Mère de famille",
      text: "Le pyjama intelligent SmartFit nous a changé la vie. Pour la première fois, nous pouvons dormir sereinement en sachant que notre bébé est surveillé en permanence.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 2,
      name: "Thomas Martin",
      role: "Sportif professionnel",
      text: "J'utilise le t-shirt connecté lors de mes entraînements et récupérations. La stimulation électrique a considérablement réduit mes douleurs musculaires chroniques.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Legrand",
      role: "Kinésithérapeute",
      text: "Je recommande régulièrement les produits SmartFit à mes patients souffrant de douleurs chroniques. Les résultats sont vraiment impressionnants.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    },
    {
      id: 4,
      name: "Paul Dupont",
      role: "Cadre en entreprise",
      text: "Après des années de douleurs dorsales dues à ma position assise, le t-shirt SmartFit m'apporte un soulagement que je n'avais pas connu auparavant.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextTestimonial();
    }
    
    if (isRightSwipe) {
      prevTestimonial();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section 
      id="temoignages" 
      className="py-20 bg-gray-50"
      style={{
        backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0%, rgba(233, 226, 226, 0.28) 90.2%)'
      }}
    >
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Ce que nos utilisateurs disent"
          subtitle="TÉMOIGNAGES"
        />
        
        <div className="relative max-w-4xl mx-auto mt-12">
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="mb-6 md:mb-0 md:mr-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18} 
                              className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 md:-translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none z-10"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={24} className="text-blue-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 md:translate-x-8 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none z-10"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={24} className="text-blue-600" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Voir témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;