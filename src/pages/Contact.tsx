import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwltIWUgtpQ7Wxr3L0FL3TVKvjpi1eytitY-WfHG67YcXEUv0Z0cXZbUFPZ1LqAE9EOlQ/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      if (result.result === 'success') {
        alert('✅ Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        alert('⚠️ Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Failed to submit form.');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" style={{ background: '#000000' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Contact Us</h1>
          <p className="text-xl text-white">
            Get in touch with our team for inquiries about electric vehicles and charging solutions
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-black">Get In Touch</h2>
            <div className="space-y-6">
              <Card className="border border-black">
                <CardContent className="p-6 flex items-center">
                  <MapPin className="h-8 w-8 mr-4 text-black" />
                  <div>
                    <h3 className="font-semibold text-black">Location</h3>
                    <p className="text-black">Great Jubilee Centre, Karen<br />Opposite Galleria Mall, Karen</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-black">
                <CardContent className="p-6 flex items-center">
                  <Phone className="h-8 w-8 mr-4 text-black" />
                  <div>
                    <h3 className="font-semibold text-black">Phone</h3>
                    <p className="text-black">+254 706 189873</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-black">
                <CardContent className="p-6 flex items-center">
                  <Clock className="h-8 w-8 mr-4 text-black" />
                  <div>
                    <h3 className="font-semibold text-black">Business Hours</h3>
                    <p className="text-black">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-black">Send us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border border-black" required />
                <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border border-black" required />
              </div>
              <Input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" className="border border-black" required />
              <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="border border-black" />
              <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="border border-black" required />
              <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={6} className="border border-black" required />
              <Button 
                type="submit" 
                className="w-full text-white font-semibold py-3 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#000000' }}
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
