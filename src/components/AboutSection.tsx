import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Leaf, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            About Drivelectric
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading Kenya's transition to sustainable electric mobility since 2010
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Drivelectric has been at the forefront of Kenya's electric vehicle revolution 
                since 2010, operating through our parent company Knights Energy. We recognized 
                early on that sustainable transportation would be crucial for Kenya's future.
              </p>
              <p>
                Our mission is simple: to make electric vehicles accessible, affordable, and 
                practical for every Kenyan. We believe that clean transportation is not just 
                an environmental necessity, but an economic opportunity.
              </p>
              <p>
                From our base in Kenya, we serve customers across East Africa, providing 
                not just vehicles but complete electric mobility solutions including charging 
                infrastructure, maintenance, and support.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-2xl text-green-800 mb-2">13+</h4>
              <p className="text-gray-600">Years of Experience</p>
            </Card>
            
            <Card className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-2xl text-green-800 mb-2">500+</h4>
              <p className="text-gray-600">Happy Customers</p>
            </Card>
            
            <Card className="text-center p-6">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-2xl text-green-800 mb-2">100%</h4>
              <p className="text-gray-600">Clean Energy Focus</p>
            </Card>
            
            <Card className="text-center p-6">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-bold text-2xl text-green-800 mb-2">3</h4>
              <p className="text-gray-600">Countries Served</p>
            </Card>
          </div>
        </div>
        
        <div className="mt-16 bg-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
            Our Vision for Kenya
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Clean Air</h4>
              <p className="text-gray-600">
                Reducing urban pollution through zero-emission transportation
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Energy Independence</h4>
              <p className="text-gray-600">
                Leveraging Kenya's renewable energy for sustainable mobility
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Economic Growth</h4>
              <p className="text-gray-600">
                Creating jobs and opportunities in the green economy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;