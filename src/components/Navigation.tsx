import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo1.png';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PRODUCTS', href: '#products' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-sharp' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => scrollToSection('#home')}
          >
            <img 
              src={logo} 
              alt="Logo" 
              className="w-12 h-12 mr-3 transition-transform duration-500 group-hover:rotate-180" 
            />
            <span className="font-playfair text-xl font-bold text-foreground tracking-wider">
              PURE SPICES
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-muted-foreground transition-colors font-medium tracking-widest text-sm relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="hero"
              className="tracking-wider"
            >
              ORDER
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-muted-foreground transition-colors font-medium tracking-widest text-sm text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="hero"
                className="w-full tracking-wider"
              >
                ORDER NOW
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;