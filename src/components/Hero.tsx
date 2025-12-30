import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-minimal.jpg';
import logo from '@/assets/logo.png';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from('.hero-logo', {
        scale: 0,
        rotation: 180,
        duration: 1.2,
        ease: 'elastic.out(1, 0.5)',
      })
      .from('.hero-line-1', {
        width: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.7')
      .from('.hero-line-2', {
        width: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.7')
      .from('.hero-cta', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'back.out(2)',
      }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium spices"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <img
            src={logo}
            alt="Spices Company Logo"
            className="hero-logo w-32 h-32 mx-auto"
          />
          
          <div className="hero-line-1 h-px bg-foreground mx-auto w-24"></div>
          
          <h1 className="hero-title text-6xl md:text-8xl font-bold text-foreground tracking-tight">
            PURE SPICES
          </h1>
          
          <div className="hero-line-2 h-px bg-foreground mx-auto w-48"></div>
          
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-inter font-light tracking-wide">
            Authentic • Natural • Premium Quality
          </p>
          
          <Button
            onClick={scrollToProducts}
            size="lg"
            variant="hero"
            className="hero-cta mt-12 px-12 py-8 text-lg tracking-wider"
          >
            EXPLORE COLLECTION
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProducts}
      >
        <ArrowDown className="w-8 h-8 text-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;