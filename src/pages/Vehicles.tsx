import React from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleCard from '@/components/VehicleCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { vehicles } from '@/data/vehicles';

const Vehicles: React.FC = () => {
  const navigate = useNavigate();

  const handleMoreDetails = (vehicleId: string) => {
    navigate(`/vehicle/${vehicleId}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
                Our Electric Fleet
              </h1>
              <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                Discover our premium collection of electric vehicles. Each model is carefully selected 
                for performance, efficiency, and suitability for Kenyan roads and climate.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles.map((vehicle, index) => (
                <div key={vehicle.id} className="slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <VehicleCard
                    name={vehicle.name}
                    image={vehicle.image}
                    range={vehicle.range}
                    battery={vehicle.battery}
                    price={vehicle.price}
                    year={vehicle.year}
                    onMoreDetails={() => handleMoreDetails(vehicle.id)}
                  />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-black">Can't Find What You're Looking For?</h3>
                <p className="text-gray-600 mb-6">We're constantly expanding our fleet. Contact us for special orders and upcoming models.</p>
                <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vehicles;