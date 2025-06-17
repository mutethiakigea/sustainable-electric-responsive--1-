import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Battery, Sun, MapPin, Zap } from 'lucide-react';

const ChargingSection: React.FC = () => {
  return (
    <section id="charging" className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Charging & Sustainability
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Supporting Kenya's EV infrastructure with solar-powered charging solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <MapPin className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Charging Network</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Growing network of charging stations across Kenya's major cities
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Sun className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Solar Charging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Solar-powered home and fleet charging solutions for sustainable energy
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Battery className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Fast Charging</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Quick charging technology to keep you moving efficiently
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Smart Grid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Integration with Kenya's power grid for optimal energy management
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
            EV Infrastructure in Kenya
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Current Status</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Expanding charging network in Nairobi, Mombasa, and Kisumu</li>
                <li>• Government support for EV adoption policies</li>
                <li>• Growing awareness of environmental benefits</li>
                <li>• Partnerships with renewable energy providers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Our Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Home charging installation services</li>
                <li>• Solar panel integration for charging</li>
                <li>• Fleet charging solutions for businesses</li>
                <li>• 24/7 customer support and maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChargingSection;