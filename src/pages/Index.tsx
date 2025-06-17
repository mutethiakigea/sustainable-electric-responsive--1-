import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Leaf, Shield, DollarSign, Car, Battery, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white leading-tight">
              Drive the <span className="bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">Future</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 font-light">
              Premium Electric Vehicles for Kenya
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed">
              Experience the revolution in sustainable mobility. Our curated selection of electric vehicles 
              combines cutting-edge technology with unmatched performance, designed for the modern Kenyan driver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/vehicles">
                <Button 
                  size="lg" 
                  className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Vehicles <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-8 py-4 text-lg font-medium transition-all duration-200"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black dark:bg-white text-white dark:text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="slide-up">
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-gray-300 dark:text-gray-700">Premium Electric Models</div>
            </div>
            <div className="slide-up">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300 dark:text-gray-700">Kilometers Range</div>
            </div>
            <div className="slide-up">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-300 dark:text-gray-700">Zero Emissions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Electric Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Why Choose Electric?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the advantages of electric mobility and join the sustainable transportation revolution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-8 w-8 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Cost Efficient</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Save up to 70% on fuel costs and enjoy minimal maintenance with our electric vehicles.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Leaf className="h-8 w-8 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Eco-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Zero emissions contribute to cleaner air and a healthier environment for Kenya.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Advanced Tech</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Experience cutting-edge technology with smart connectivity and innovative features.</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-900">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-black dark:bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Reliable</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Proven performance and reliability designed for Kenyan roads and conditions.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white">
            Ready to Go Electric?
          </h2>
          <p className="text-xl mb-12 text-gray-600 dark:text-gray-400 leading-relaxed">
            Join the electric revolution and experience the future of transportation. 
            Explore our premium collection of electric vehicles today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vehicles">
              <Button 
                size="lg" 
                className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 text-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Our Fleet <Car className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/charging">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black px-8 py-4 text-lg font-medium transition-all duration-200"
              >
                Charging Solutions <Battery className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;