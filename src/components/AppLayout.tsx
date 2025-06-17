import React from 'react';
import Header from './Header';
import Hero from './Hero';
import VehiclesSection from './VehiclesSection';
import ChargingSection from './ChargingSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <VehiclesSection />
        <ChargingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;