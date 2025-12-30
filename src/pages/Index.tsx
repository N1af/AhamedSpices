import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Products from '@/components/Products';
import ProductionProcess from '@/components/ProductionProcess';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <ProductionProcess />
      <Contact />
      
      <footer className="bg-foreground text-background py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="h-px bg-background/20 w-32 mb-4"></div>
            <p className="font-inter text-sm tracking-wider text-center">
              © 2025 PURE SPICES COMPANY
            </p>
            <p className="text-background/60 text-sm tracking-wide text-center">
              Bringing authentic flavors to your table since 1950
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;