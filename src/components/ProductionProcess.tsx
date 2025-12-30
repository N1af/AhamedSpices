import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sprout, Sun, Settings, Package, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Sprout,
    number: '01',
    title: 'Organic Cultivation',
    description: 'We begin with carefully selected seeds planted in certified organic farms. Our spices grow naturally without synthetic pesticides or fertilizers, nurtured by traditional farming wisdom passed through generations.',
  },
  {
    icon: Sun,
    number: '02',
    title: 'Natural Sun Drying',
    description: 'After harvest, spices are spread on traditional bamboo mats under the golden sun. This time-honored method preserves natural flavors, aromatic oils, and nutritional values that modern processing cannot match.',
  },
  {
    icon: Settings,
    number: '03',
    title: 'Precision Processing',
    description: 'Using state-of-the-art grinding technology combined with artisanal techniques, we achieve perfect consistency. Temperature-controlled processing ensures no loss of essential oils or flavor compounds.',
  },
  {
    icon: Package,
    number: '04',
    title: 'Premium Packaging',
    description: 'Each batch is carefully packaged in airtight containers to lock in freshness and aroma. Our packaging protects against moisture, light, and oxidation, ensuring every pinch delivers maximum flavor.',
  },
];

const ProductionProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-heading', {
        scrollTrigger: {
          trigger: '.process-heading',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.process-line', {
        scrollTrigger: {
          trigger: '.process-line',
          start: 'top 80%',
        },
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Animate vertical timeline
      if (timelineRef.current) {
        gsap.from(timelineRef.current, {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
          scaleY: 0,
          transformOrigin: 'top center',
          ease: 'none',
        });
      }

      steps.forEach((_, index) => {
        gsap.from(`.step-${index}`, {
          scrollTrigger: {
            trigger: `.step-${index}`,
            start: 'top 85%',
          },
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 1,
          ease: 'power3.out',
        });

        gsap.from(`.step-icon-${index}`, {
          scrollTrigger: {
            trigger: `.step-${index}`,
            start: 'top 85%',
          },
          scale: 0,
          rotation: 180,
          duration: 1,
          delay: 0.3,
          ease: 'back.out(2)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="process-heading text-6xl md:text-7xl font-bold text-foreground tracking-tight mb-8">
            OUR PROCESS
          </h2>
          <div className="process-line h-px bg-foreground w-32 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto tracking-wide">
            From seed to shelf, every step is carefully orchestrated to deliver unparalleled quality
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block">
            <div 
              ref={timelineRef}
              className="absolute inset-0 bg-foreground origin-top"
            ></div>
          </div>

          <div className="space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`step-${index} relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 justify-start md:justify-end">
                        <span className="text-6xl font-bold text-foreground/10">{step.number}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                        {step.title}
                      </h3>
                      
                      <div className={`h-px bg-border w-24 ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}></div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className={`step-icon-${index} relative z-10 flex-shrink-0`}>
                    <div className="w-24 h-24 bg-background border-2 border-foreground flex items-center justify-center group hover:bg-foreground transition-all duration-500">
                      <Icon className="w-12 h-12 text-foreground group-hover:text-background transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              );
            })}
          </div>

          {/* Final Arrow */}
          <div className="flex justify-center mt-20">
            <ArrowRight className="w-12 h-12 text-foreground animate-pulse" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionProcess;