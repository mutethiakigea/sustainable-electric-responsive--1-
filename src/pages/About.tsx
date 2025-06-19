import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{background: ' #000000'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#ffffff'}}>
            About Drivelectric
          </h1>
          <p className="text-xl mb-8" style={{color: '#ffffff'}}>
            Pioneering Electric Mobility in Kenya Since 2010
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{color: '#000000'}}>
            Who We Are
          </h2>
          <div className="prose prose-lg mx-auto" style={{color: '#000000'}}>
            <p className="text-lg mb-6">
              Drivelectric is Kenya's leading electric vehicle dealership, operating under Knights Energy since 2010. 
              We are passionate advocates for sustainable transportation and have been at the forefront of introducing 
              electric mobility solutions to the Kenyan market.
            </p>
            <p className="text-lg mb-6">
              Our team of experienced professionals combines deep automotive knowledge with a commitment to environmental 
              sustainability. We understand the unique challenges and opportunities of the Kenyan automotive landscape 
              and are dedicated to making electric vehicles accessible, affordable, and practical for all Kenyans.
            </p>
            <p className="text-lg">
              From our base in Nairobi, we serve customers across Kenya and East Africa, providing not just vehicles 
              but complete electric mobility solutions including charging infrastructure, maintenance, and ongoing support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{backgroundColor: '#f8f9fa'}}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border" style={{borderColor: '#000000'}}>
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#000000'}}>
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#000000'}}>Our Mission</h3>
                <p style={{color: '#000000'}}>
                  To accelerate Kenya's transition to sustainable transportation by providing world-class electric vehicles 
                  and supporting infrastructure that make clean mobility accessible to everyone.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border" style={{borderColor: '#000000'}}>
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#000000'}}>
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#000000'}}>Our Vision</h3>
                <p style={{color: '#000000'}}>
                  To be East Africa's most trusted partner in electric mobility, leading the region towards a cleaner, 
                  more sustainable future where electric vehicles are the preferred choice for all transportation needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border" style={{borderColor: '#000000'}}>
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#000000'}}>
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{color: '#000000'}}>Our Values</h3>
                <p style={{color: '#000000'}}>
                  Sustainability, Innovation, Integrity, and Customer Excellence. We believe in doing business responsibly 
                  while delivering exceptional value to our customers and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{color: '#000000'}}>
            Our Commitment to Kenya
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#000000'}}>Environmental Leadership</h3>
              <p className="mb-6" style={{color: '#000000'}}>
                We're committed to reducing Kenya's carbon footprint by promoting zero-emission vehicles 
                and supporting renewable energy charging solutions.
              </p>
              
              <h3 className="text-xl font-semibold mb-4" style={{color: '#000000'}}>Economic Impact</h3>
              <p style={{color: '#000000'}}>
                By reducing dependence on imported fuel and creating local jobs in the green economy, 
                we contribute to Kenya's economic growth and energy independence.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{color: '#00000'}}>Community Development</h3>
              <p className="mb-6" style={{color: '#000000'}}>
                We actively support local communities through education programs about sustainable transportation 
                and partnerships with local businesses and institutions.
              </p>
              
              <h3 className="text-xl font-semibold mb-4" style={{color: '#000000'}}>Innovation Hub</h3>
              <p style={{color: '#000000'}}>
                As pioneers in Kenya's EV market, we continue to innovate and adapt solutions 
                that meet the unique needs of African consumers and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;