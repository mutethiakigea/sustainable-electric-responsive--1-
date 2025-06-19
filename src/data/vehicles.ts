export interface Vehicle {
  id: string;
  name: string;
  image: string;
  range: string;
  battery: string;
  price: string;
  year?: string;
  description: string;
  features: string[];
  specs: {
    acceleration?: string;
    topSpeed?: string;
    chargingTime?: string;
    seating?: string;
    driveType?: string;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: 'mg4',
    name: 'MG4',
    image: 'https://drivezeewebsite.blob.core.windows.net/deaccesssconta/MG4 (1).png',
    range: '350-450 km',
    battery: '51-64 kWh',
    price: 'From $25,000',
    year: '2024',
    description: 'The MG4 is a revolutionary compact electric hatchback that redefines urban mobility. With its sleek aerodynamic design and cutting-edge technology, it delivers exceptional performance while maintaining zero emissions. Perfect for navigating Kenyan cities with style and efficiency.',
    features: ['Fast Charging', 'Smart Connectivity', 'Advanced Safety Systems', 'Spacious Interior', 'Regenerative Braking', 'Digital Dashboard', 'Wireless Phone Charging'],
    specs: {
      acceleration: '0-100 km/h in 7.9s',
      topSpeed: '160 km/h',
      chargingTime: '35 min (10-80%)',
      seating: '5 passengers',
      driveType: 'RWD'
    }
  },
  {
    id: 'nissan-leaf',
    name: 'Nissan Leaf',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
    range: '243 km',
    battery: '40 kWh',
    price: '$6,320 – $11,372',
    year: '2018',
    description: 'The Nissan Leaf stands as one of the world\'s most trusted electric vehicles, pioneering the EV revolution. With proven reliability and affordability, it\'s the perfect choice for daily commuting in Kenya. Its refined design and advanced features make every journey comfortable and eco-friendly.',
    features: ['e-Pedal Technology', 'NissanConnect Services', 'Intelligent Key System', 'LED Headlights', 'ProPILOT Assist', 'Smartphone Integration', 'Climate Control'],
    specs: {
      acceleration: '0-100 km/h in 7.9s',
      topSpeed: '144 km/h',
      chargingTime: '60 min (10-80%)',
      seating: '5 passengers',
      driveType: 'FWD'
    }
  },
  {
    id: 'tesla-model-3',
    name: 'Tesla Model 3',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    range: '491 km',
    battery: '75 kWh',
    price: 'From $35,000',
    year: '2018',
    description: 'The Tesla Model 3 represents the pinnacle of electric vehicle innovation. With industry-leading range, performance, and autonomous driving capabilities, it sets the standard for premium electric sedans. Experience the future of driving with unmatched technology and luxury.',
    features: ['Autopilot', 'Over-the-Air Updates', 'Supercharging Network', 'Premium Audio', 'Glass Roof', 'Mobile Connector', 'Sentry Mode'],
    specs: {
      acceleration: '0-100 km/h in 5.3s',
      topSpeed: '225 km/h',
      chargingTime: '25 min (10-80%)',
      seating: '5 passengers',
      driveType: 'RWD/AWD'
    }
  },
  {
    id: 'bmw-i3',
    name: 'BMW i3',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    range: '260 km',
    battery: '42.2 kWh',
    price: 'From $28,000',
    year: '2018',
    description: 'The BMW i3 showcases innovative design and sustainable materials in a compact luxury package. Built with carbon fiber and renewable materials, it offers a unique driving experience with BMW\'s signature performance and premium comfort.',
    features: ['Carbon Fiber Body', 'Sustainable Materials', 'BMW ConnectedDrive', 'Rear-Hinged Doors', 'Adaptive LED Lights', 'Harman Kardon Audio'],
    specs: {
      acceleration: '0-100 km/h in 7.3s',
      topSpeed: '150 km/h',
      chargingTime: '40 min (10-80%)',
      seating: '4 passengers',
      driveType: 'RWD'
    }
  },
  {
    id: 'hyundai-kona',
    name: 'Hyundai Kona Electric',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
    range: '415 km',
    battery: '64 kWh',
    price: 'From $32,000',
    year: '2018',
    description: 'The Hyundai Kona Electric combines SUV versatility with electric efficiency. Perfect for families who need space and range without compromising on environmental responsibility. Its bold design and advanced features make it ideal for both city and highway driving.',
    features: ['All-Weather Capability', 'Wireless Charging Pad', 'Head-Up Display', 'Smart Cruise Control', 'Lane Keep Assist', 'Blind Spot Monitoring'],
    specs: {
      acceleration: '0-100 km/h in 7.6s',
      topSpeed: '167 km/h',
      chargingTime: '47 min (10-80%)',
      seating: '5 passengers',
      driveType: 'FWD'
    }
  },
  {
    id: 'volkswagen-id4',
    name: 'Volkswagen ID.4',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&h=600&fit=crop',
    range: '400 km',
    battery: '77 kWh',
    price: 'From $38,000',
    year: '2018',
    description: 'The Volkswagen ID.4 represents German engineering excellence in electric mobility. This spacious SUV offers premium comfort, advanced technology, and impressive range, making it perfect for families transitioning to electric vehicles.',
    features: ['ID.Light LED Strip', 'Augmented Reality HUD', 'Travel Assist', 'IQ.Drive Safety', 'Wireless App Connect', 'Three-Zone Climate'],
    specs: {
      acceleration: '0-100 km/h in 8.5s',
      topSpeed: '160 km/h',
      chargingTime: '38 min (5-80%)',
      seating: '5 passengers',
      driveType: 'RWD/AWD'
    }
  },
  {
    id: 'audi-etron',
    name: 'Audi e-tron',
    image: 'https://images.unsplash.com/photo-1606016159991-8b4d3c1a8e84?w=800&h=600&fit=crop',
    range: '436 km',
    battery: '95 kWh',
    price: 'From $65,000',
    year: '2018',
    description: 'The Audi e-tron delivers luxury and performance in an all-electric SUV package. With quattro all-wheel drive and premium Audi craftsmanship, it offers an uncompromising electric driving experience for discerning customers.',
    features: ['Virtual Cockpit Plus', 'Matrix LED Headlights', 'Air Suspension', 'Bang & Olufsen Audio', 'MMI Touch Response', 'Audi Connect'],
    specs: {
      acceleration: '0-100 km/h in 5.7s',
      topSpeed: '200 km/h',
      chargingTime: '30 min (10-80%)',
      seating: '5 passengers',
      driveType: 'AWD'
    }
  },
  {
    id: 'polestar-2',
    name: 'Polestar 2',
    image: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=800&h=600&fit=crop',
    range: '470 km',
    battery: '78 kWh',
    price: 'From $45,000',
    year: '2018',
    description: 'The Polestar 2 combines Scandinavian design with cutting-edge electric technology. This premium fastback offers exceptional performance, advanced Google-based infotainment, and sustainable luxury materials.',
    features: ['Google Built-in', 'Pilot Assist', 'Harman Kardon Audio', 'Panoramic Roof', 'Pixel LED Headlights', 'Vegan Interior Options'],
    specs: {
      acceleration: '0-100 km/h in 4.7s',
      topSpeed: '205 km/h',
      chargingTime: '35 min (10-80%)',
      seating: '5 passengers',
      driveType: 'AWD'
    }
  }
];