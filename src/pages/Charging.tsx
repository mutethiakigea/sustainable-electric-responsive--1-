import React from 'react';
import { Zap, MapPin, Clock, Shield, Battery, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Charging: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{background: '#000000'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#ffffff'}}>
            EV Charging Solutions
          </h1>
          <p className="text-xl mb-8" style={{color: '#ffffff'}}>
            Professional Charger Installations & Public Charging Network
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#000000'}}>
            Our Charging Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border" style={{borderColor: '#000000'}}>
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#000000'}}>
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#000000'}}>Home Installation</h3>
                <p style={{color: '#000000'}}>Professional installation of home charging stations for convenient overnight charging.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border" style={{borderColor: '#000000'}}>
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#000000'}}>
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#000000'}}>Fast Charging</h3>
                <p style={{color: '#000000'}}>High-speed DC charging stations for quick top-ups during your daily activities.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center border" style={{borderColor: '#000000'}}>
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#000000'}}>
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#000000'}}>Public Network</h3>
                <p style={{color: '#000000'}}>Access to our growing network of public charging points across Kenya.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Charger Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{color: '#000000'}}>
            Charging Solutions We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border" style={{borderColor: '#000000'}}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Battery className="h-8 w-8 mr-3" style={{color: '#000000'}} />
                  <h3 className="text-2xl font-bold" style={{color: '#000000'}}>Level 2 AC Chargers</h3>
                </div>
                <ul className="space-y-2" style={{color: '#000000'}}>
                  <li>• Perfect for home and workplace charging</li>
                  <li>• 7kW - 22kW charging power</li>
                  <li>• Full charge in 4-8 hours</li>
                  <li>• Cost-effective installation</li>
                  <li>• Compatible with all EV models</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border" style={{borderColor: '#000000'}}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 mr-3" style={{color: '#000000'}} />
                  <h3 className="text-2xl font-bold" style={{color: '#000000'}}>DC Fast Chargers</h3>
                </div>
                <ul className="space-y-2" style={{color: '#000000'}}>
                  <li>• Rapid charging for commercial use</li>
                  <li>• 50kW - 150kW charging power</li>
                  <li>• 80% charge in 30-60 minutes</li>
                  <li>• Ideal for public locations</li>
                  <li>• Multiple connector types</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Public Charging Network */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#000000'}}>
            Public Charging Network
          </h2>
          <p className="text-lg mb-8" style={{color: '#000000'}}>
            We operate a growing network of public charging stations across Kenya, making it convenient 
            for EV owners to charge their vehicles while shopping, working, or traveling.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-2" style={{color: '#000000'}} />
              <h3 className="font-semibold mb-1" style={{color: '#000000'}}>24/7 Access</h3>
              <p className="text-sm" style={{color: '#000000'}}>Available round the clock</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-2" style={{color: '#000000'}} />
              <h3 className="font-semibold mb-1" style={{color: '#000000'}}>Secure & Safe</h3>
              <p className="text-sm" style={{color: '#000000'}}>Well-lit and monitored locations</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-2" style={{color: '#000000'}} />
              <h3 className="font-semibold mb-1" style={{color: '#000000'}}>Prime Locations</h3>
              <p className="text-sm" style={{color: '#000000'}}>Malls, offices, and key destinations</p>
            </div>
          </div>
          
          <p className="text-lg mb-8" style={{color: '#000000'}}>
            Our charging points are open to the general public - you don't need to purchase a vehicle from us to use our network. 
            We believe in supporting all EV owners in Kenya's transition to sustainable transportation.
          </p>
          

          <Button 
            size="lg" 
            className="text-white font-semibold px-8 py-3 hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#000000' }}
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.namp.echarge", "_blank")}
          >
            Find Charging Stations
          </Button>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Charging;