import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import VehicleCard from './VehicleCard';
import { vehicles } from '@/data/vehicles';

const VehiclesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleMoreDetails = (vehicleId: string) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  const handleViewAll = () => {
    navigate('/vehicles');
  };

  // Show only first 6 vehicles on home page
  const featuredVehicles = vehicles.slice(0, 6);

  return (
    <section id="vehicles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Electric Vehicles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of electric vehicles designed for the Kenyan market
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              name={vehicle.name}
              image={vehicle.image}
              range={vehicle.range}
              battery={vehicle.battery}
              price={vehicle.price}
              year={vehicle.year}
              onMoreDetails={() => handleMoreDetails(vehicle.id)}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleViewAll}
            className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
          >
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehiclesSection;