import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Leaf, Zap, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Leaf className="w-8 h-8" />
            </div>
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Zap className="w-8 h-8" />
            </div>
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Shield className="w-8 h-8" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Drive the Future
        </h1>
        <p className="text-2xl md:text-3xl mb-4 font-light">
          Clean • Smart • Electric
        </p>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
          Leading Kenya's transition to sustainable transportation with premium electric vehicles
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-xl"
            onClick={() => navigate('/vehicles')}
          >
            Explore Vehicles
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-4"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;