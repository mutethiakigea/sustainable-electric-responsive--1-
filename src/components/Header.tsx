import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://drivezeewebsite.blob.core.windows.net/deaccesssconta/drivelectric black andwhite.png" 
              alt="Drivelectric" 
              className="h-28 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/vehicles', label: 'Vehicles' },
              { path: '/charging', label: 'Charging' },
              { path: '/contact', label: 'Contact' }
            ].map(({ path, label }) => (
              <Link 
                key={path}
                to={path} 
                className={`font-medium transition-all duration-200 hover:text-gray-600 dark:hover:text-gray-300 ${
                  isActive(path) 
                    ? 'text-black dark:text-white font-semibold border-b-2 border-black dark:border-white pb-1' 
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
            <div className="flex flex-col space-y-4">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/vehicles', label: 'Vehicles' },
                { path: '/charging', label: 'Charging' },
                { path: '/contact', label: 'Contact' }
              ].map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  className="font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;