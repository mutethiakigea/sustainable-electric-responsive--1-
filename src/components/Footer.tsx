import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/684fb66c73bee6d835ce6ff2_1750157130648_52098674.png" 
              alt="Drivelectric" 
              className="h-12 w-auto mb-4 filter invert dark:invert-0"
            />
            <p className="text-gray-300 dark:text-gray-700 mb-4">
              Leading the electric vehicle revolution in Kenya with premium, sustainable transportation solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors">About</Link>
              <Link to="/vehicles" className="block text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors">Vehicles</Link>
              <Link to="/charging" className="block text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors">Charging</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-700 text-sm">
                  Great Jubilee Centre, Karen<br />
                  Opposite Galleria Mall, Karen
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-700">+254 706 189873</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-600">
            © 2024 Drivelectric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;