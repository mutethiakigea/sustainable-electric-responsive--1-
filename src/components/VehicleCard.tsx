import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Battery, Gauge, DollarSign } from 'lucide-react';

interface VehicleCardProps {
  name: string;
  image: string;
  range: string;
  battery: string;
  price: string;
  year?: string;
  onMoreDetails: () => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  name,
  image,
  range,
  battery,
  price,
  year,
  onMoreDetails
}) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white dark:bg-gray-900 hover:-translate-y-2">
      <CardHeader className="p-0 relative">
        <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
          {year && (
            <Badge className="absolute top-4 left-4 bg-black dark:bg-white text-white dark:text-black border-0 shadow-lg">
              {year}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <CardTitle className="text-2xl mb-4 text-black dark:text-white font-bold group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {name}
        </CardTitle>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-2">
              <Gauge className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Range</span>
            </div>
            <span className="font-semibold text-black dark:text-white">{range}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center space-x-2">
              <Battery className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Battery</span>
            </div>
            <span className="font-semibold text-black dark:text-white">{battery}</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-black dark:bg-white rounded-lg">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-4 w-4 text-white dark:text-black" />
              <span className="text-sm text-white dark:text-black">Starting Price</span>
            </div>
            <span className="font-bold text-white dark:text-black">{price}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={onMoreDetails}
          className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium py-3 transition-all duration-200 group/button"
        >
          View Details 
          <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;