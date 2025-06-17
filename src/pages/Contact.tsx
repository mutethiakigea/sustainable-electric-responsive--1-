import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(135deg, #36ac43 0%, #ffffff 100%)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#000000'}}>
            Contact Us
          </h1>
          <p className="text-xl" style={{color: '#000000'}}>
            Get in touch with our team for inquiries about electric vehicles and charging solutions
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{color: '#000000'}}>Get In Touch</h2>
            <div className="space-y-6">
              <Card className="border" style={{borderColor: '#36ac43'}}>
                <CardContent className="p-6 flex items-center">
                  <MapPin className="h-8 w-8 mr-4" style={{color: '#36ac43'}} />
                  <div>
                    <h3 className="font-semibold" style={{color: '#000000'}}>Location</h3>
                    <p style={{color: '#000000'}}>Great Jubilee Centre, Karen<br />Opposite Galleria Mall, Karen</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border" style={{borderColor: '#36ac43'}}>
                <CardContent className="p-6 flex items-center">
                  <Phone className="h-8 w-8 mr-4" style={{color: '#36ac43'}} />
                  <div>
                    <h3 className="font-semibold" style={{color: '#000000'}}>Phone</h3>
                    <p style={{color: '#000000'}}>+254 706 189873</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border" style={{borderColor: '#36ac43'}}>
                <CardContent className="p-6 flex items-center">
                  <Clock className="h-8 w-8 mr-4" style={{color: '#36ac43'}} />
                  <div>
                    <h3 className="font-semibold" style={{color: '#000000'}}>Business Hours</h3>
                    <p style={{color: '#000000'}}>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8" style={{color: '#000000'}}>Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border" style={{borderColor: '#36ac43'}} />
                <Input placeholder="Last Name" className="border" style={{borderColor: '#36ac43'}} />
              </div>
              <Input placeholder="Email" type="email" className="border" style={{borderColor: '#36ac43'}} />
              <Input placeholder="Phone Number" className="border" style={{borderColor: '#36ac43'}} />
              <Input placeholder="Subject" className="border" style={{borderColor: '#36ac43'}} />
              <Textarea placeholder="Your Message" rows={6} className="border" style={{borderColor: '#36ac43'}} />
              <Button 
                type="submit" 
                className="w-full text-white font-semibold py-3 hover:opacity-90 transition-opacity"
                style={{backgroundColor: '#36ac43'}}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;