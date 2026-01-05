import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Leaf, Users, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import sriLankaMap from "../assets/srilanka.png";

import coffeeImage from "@/assets/spice-coffee.jpg";
import cinnamonImage from "@/assets/spice-cinnamon.jpg";
import cardamomImage from "@/assets/spice-cardamom-raw.jpg";
import pepperImage from "@/assets/spice-pepper.jpg";
import clovesImage from "@/assets/spice-cloves.jpg";
import greenTeaImage from "@/assets/spice-greentea.jpg";
import ceylonTeaImage from "@/assets/spice-ceylontea.jpg";

gsap.registerPlugin(ScrollTrigger);

/* 📍 Product locations positioned inside Sri Lanka shape */
const spices = [
  { name: "Coffee", slug: "coffee", top: "65%", left: "65%", image: coffeeImage },
  { name: "Cinnamon", slug: "cinnamon", top: "55%", left: "40%", image: cinnamonImage },
  { name: "Cardamom", slug: "cardamom", top: "35%", left: "40%", image: cardamomImage },
  { name: "Pepper Seed", slug: "pepper-seed", top: "40%", left: "50%", image: pepperImage },
  { name: "Cloves", slug: "cloves", top: "20%", left: "48%", image: clovesImage },
  { name: "Green Tea", slug: "green-tea", top: "70%", left: "47%", image: greenTeaImage },
  { name: "Ceylon Tea", slug: "ceylon-tea", top: "50%", left: "55%", image: ceylonTeaImage },
];

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Hand-selected spices meeting the highest standards of purity and authenticity",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    description:
      "Sustainably sourced from certified organic farms with zero chemicals",
  },
  {
    icon: Users,
    title: "Traditional Methods",
    description:
      "Time-honored processing techniques preserving natural flavor and aroma",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Delivering authentic spices to customers worldwide with care",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".map-heading", {
        scrollTrigger: { trigger: ".map-heading", start: "top 80%" },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".spice-marker", {
        scrollTrigger: { trigger: ".spice-marker", start: "top 85%" },
        opacity: 0,
        scale: 0.5,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      gsap.from(".about-heading", {
        scrollTrigger: { trigger: ".about-heading", start: "top 80%" },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-line", {
        scrollTrigger: { trigger: ".about-line", start: "top 80%" },
        scaleX: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".about-text", {
        scrollTrigger: { trigger: ".about-text", start: "top 80%" },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      features.forEach((_, index) => {
        gsap.from(`.feature-${index}`, {
          scrollTrigger: { trigger: `.feature-${index}`, start: "top 85%" },
          opacity: 0,
          y: 50,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">

        {/* 🇱🇰 Sri Lanka Shape Map */}
        <div className="max-w-6xl mx-auto mb-32 text-center">
          <h2 className="map-heading text-5xl md:text-6xl font-bold text-foreground mb-12 tracking-tight">
            Spices of Sri Lanka
          </h2>

          <div className="relative w-full max-w-2xl mx-auto">
            {/* MAP IMAGE */}
            <img
              src={sriLankaMap}
              alt="Sri Lanka Map"
              className="w-full h-auto select-none relative z-0 pointer-events-none"
            />

            {/* PRODUCT MARKERS */}
            {spices.map((spice, index) => (
              <div
                key={index}
                className="spice-marker absolute z-10 flex flex-col items-center cursor-pointer"
                style={{
                  top: spice.top,
                  left: spice.left,
                  transform: "translate(-50%, -50%)",
                }}
         
              >
                <img
                  src={spice.image}
                  alt={spice.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md mb-2"
                />
                <span className="text-xs font-medium text-foreground">{spice.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* OUR STORY */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="about-heading text-6xl md:text-7xl font-bold text-foreground mb-8 tracking-tight">
            OUR STORY
          </h2>

          <div className="about-line h-px bg-foreground w-32 mx-auto mb-12"></div>

          <div className="about-text space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              For over three generations, we have been crafting the finest spices with unwavering
              dedication to quality and authenticity. Our journey began in the fertile lands where
              tradition meets innovation.
            </p>
            <p>
              Every spice we produce tells a story – from careful cultivation on organic farms
              to meticulous processing that preserves natural essence and aromatic richness.
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={`feature-${index} group`}>
                <div className="relative p-8 bg-background border border-border hover:shadow-card transition-all duration-500 h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <Icon className="w-12 h-12 text-foreground mb-6" strokeWidth={1.5} />

                  <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
