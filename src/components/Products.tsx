import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import coffeeImage from '@/assets/spice-coffee.jpg';
import cinnamonImage from '@/assets/spice-cinnamon.jpg';
import cardamomImage from '@/assets/spice-cardamom-raw.jpg';
import pepperImage from '@/assets/spice-pepper.jpg';
import clovesImage from '@/assets/spice-cloves.jpg';
import greenTeaImage from '@/assets/spice-greentea.jpg';
import ceylonTeaImage from '@/assets/spice-ceylontea.jpg';

gsap.registerPlugin(ScrollTrigger);

const spices = [
  {
    name: 'Coffee',
    latin: 'Coffea arabica',
    description:
      'Premium roasted coffee beans with rich, bold flavor and aromatic qualities. Known for its energizing properties and complex taste profile.',
    origin: 'Srilanka',
    uses: 'Espresso, Brewed coffee, Cold brew, Coffee-based desserts',
    image: coffeeImage,
  },
  {
    name: 'Cinnamon',
    latin: 'Cinnamomum verum',
    description:
      'Sweet, warming spice from the inner bark of trees. Known for blood sugar regulation and antioxidant properties with distinctive aroma.',
    origin: 'Sri Lanka',
    uses: 'Baking, Beverages, Stews, Spice blends',
    image: cinnamonImage,
  },
  {
    name: 'Cardamom',
    latin: 'Elettaria cardamomum',
    description:
      'The queen of spices with an intense, slightly sweet flavor. Prized for its aromatic qualities in both sweet and savory dishes.',
    origin: 'Srilanka',
    uses: 'Desserts, Chai tea, Rice dishes, Meat marinades',
    image: cardamomImage,
  },
  {
    name: 'Pepper Seed',
    latin: 'Piper nigrum',
    description:
      'The king of spices with a sharp, pungent flavor. Essential for countless cuisines and known for aiding digestion and enhancing flavors.',
    origin: 'Srilanka',
    uses: 'Universal seasoning, Pepper sauces, Meat rubs, Pickling',
    image: pepperImage,
  },
  {
    name: 'Cloves',
    latin: 'Syzygium aromaticum',
    description:
      'Aromatic dried flower buds with intense, warm flavor. Rich in antioxidants and used in both culinary and medicinal applications.',
    origin: 'Srilanka',
    uses: 'Spice blends, Baking, Mulled beverages, Meat dishes',
    image: clovesImage,
  },
  {
    name: 'Green Tea',
    latin: 'Camellia sinensis',
    description:
      'Premium green tea leaves with delicate, fresh flavor. Rich in antioxidants and known for numerous health benefits and calming properties.',
    origin: 'Srilanka',
    uses: 'Hot tea, Iced tea, Matcha lattes, Tea ceremonies',
    image: greenTeaImage,
  },
  {
    name: 'Ceylon Tea',
    latin: 'Camellia sinensis',
    description:
      'Premium black tea from Sri Lanka with bright, citrusy notes. Known for its distinctive flavor profile and rich amber color.',
    origin: 'Sri Lanka',
    uses: 'Hot tea, Iced tea, Tea blends, Chai',
    image: ceylonTeaImage,
  },
];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animations
      gsap.from('.products-heading', {
        scrollTrigger: { trigger: '.products-heading', start: 'top 80%' },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.products-subtitle', {
        scrollTrigger: { trigger: '.products-subtitle', start: 'top 80%' },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Animate each spice card with connecting lines
      spices.forEach((_, index) => {
        const card = `.spice-card-${index}`;
        const line = linesRef.current[index];

        // Animate connecting line
        if (line) {
          gsap.from(line, {
            scrollTrigger: { trigger: card, start: 'top 85%', scrub: 1 },
            scaleY: 0,
            transformOrigin: 'top center',
            duration: 1.2,
            ease: 'power3.out',
          });
        }

        // Animate card
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 30%', scrub: 0.5 },
          opacity: 0,
          y: 100,
          x: index % 2 === 0 ? -30 : 30,
          duration: 1,
          ease: 'power3.out',
        });

        // Animate image with parallax
        gsap.from(`${card} .spice-image`, {
          scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 30%', scrub: 0.8 },
          scale: 0.9,
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: 'power2.out',
        });

        // Animate content
        gsap.from(`${card} .spice-content`, {
          scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 35%', scrub: 0.6 },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="products-heading text-6xl md:text-7xl font-bold text-foreground tracking-tight mb-6">
            OUR COLLECTION
          </h2>
          <div className="h-px bg-foreground w-32 mx-auto mb-8"></div>
          <p className="products-subtitle text-xl text-muted-foreground max-w-3xl mx-auto tracking-wide">
            Each spice tells a story of tradition, carefully sourced and processed to preserve its authentic character
          </p>
        </div>

        {/* Spice Cards */}
        <div className="max-w-6xl mx-auto space-y-24">
          {spices.map((spice, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < spices.length - 1 && (
                  <div
                    ref={(el) => (linesRef.current[index] = el)}
                    className="absolute left-1/2 bottom-0 w-px h-32 bg-foreground/20 transform translate-y-full hidden md:block"
                  ></div>
                )}

                <div
                  className={`spice-card-${index} grid md:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-none"></div>
                      <img
                        src={spice.image}
                        alt={spice.name}
                        className="spice-image w-full h-[500px] object-cover shadow-card hover-glow transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-6 py-2">
                        <span className="text-5xl font-bold text-foreground">0{index + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`spice-content ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
                          {spice.name}
                        </h3>
                        <p className="text-sm text-muted-foreground italic mb-6">{spice.latin}</p>
                        <div className="h-px bg-foreground w-16 mb-6"></div>
                      </div>

                      <p className="text-lg text-foreground/80 leading-relaxed">{spice.description}</p>

                      <div className="space-y-4 pt-4">
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-foreground uppercase tracking-wider min-w-[100px]">
                            Origin
                          </span>
                          <span className="text-sm text-muted-foreground">{spice.origin}</span>
                        </div>
                        <div className="flex gap-4">
                          <span className="text-sm font-semibold text-foreground uppercase tracking-wider min-w-[100px]">
                            Uses
                          </span>
                          <span className="text-sm text-muted-foreground">{spice.uses}</span>
                        </div>
                      </div>

                      <div className="pt-6">
                        <div className="h-px bg-border w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
