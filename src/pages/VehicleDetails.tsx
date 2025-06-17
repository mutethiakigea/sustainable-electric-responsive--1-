import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Battery, Gauge, Clock, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VehicleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find(v => v.id === id);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black dark:text-white mb-4">Vehicle not found</h1>
            <Link to="/vehicles">
              <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
                Back to Vehicles
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/vehicles" className="inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Vehicles
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold text-black dark:text-white">{vehicle.name}</h1>
                {vehicle.year && <Badge className="bg-black dark:bg-white text-white dark:text-black text-sm">{vehicle.year}</Badge>}
              </div>
              
              <p className="text-xl font-bold text-black dark:text-white mb-6">{vehicle.price}</p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{vehicle.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="bg-white dark:bg-gray-900">
                  <CardContent className="p-4 flex items-center">
                    <Battery className="w-8 h-8 text-black dark:text-white mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Battery</p>
                      <p className="font-semibold text-black dark:text-white">{vehicle.battery}</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-900">
                  <CardContent className="p-4 flex items-center">
                    <Gauge className="w-8 h-8 text-black dark:text-white mr-3" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Range</p>
                      <p className="font-semibold text-black dark:text-white">{vehicle.range}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {vehicle.specs && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {vehicle.specs.acceleration && (
                    <Card className="bg-white dark:bg-gray-900">
                      <CardContent className="p-4 flex items-center">
                        <Zap className="w-8 h-8 text-black dark:text-white mr-3" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Acceleration</p>
                          <p className="font-semibold text-black dark:text-white">{vehicle.specs.acceleration}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  
                  {vehicle.specs.seating && (
                    <Card className="bg-white dark:bg-gray-900">
                      <CardContent className="p-4 flex items-center">
                        <Users className="w-8 h-8 text-black dark:text-white mr-3" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Seating</p>
                          <p className="font-semibold text-black dark:text-white">{vehicle.specs.seating}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2"></div>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link to="/contact">
                <Button className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-lg py-6">
                  Contact for Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VehicleDetails;