import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, ShoppingBag, Store } from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-heading', {
        scrollTrigger: {
          trigger: '.contact-heading',
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.contact-line', {
        scrollTrigger: {
          trigger: '.contact-line',
          start: 'top 80%',
        },
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      gsap.from('.contact-info', {
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
        },
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello! I'm interested in placing an order.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/773800558?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="contact-heading text-6xl md:text-7xl font-bold text-foreground tracking-tight mb-8">
            GET IN TOUCH
          </h2>
          <div className="contact-line h-px bg-foreground w-32 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto tracking-wide">
            Ready to experience premium quality? Contact us today to place your order
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="contact-info space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-8 tracking-tight">
                CONTACT INFORMATION
              </h3>
              <div className="h-px bg-foreground w-16 mb-8"></div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors duration-500">
                    <Mail className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 tracking-wider uppercase text-sm">Email</p>
                    <a 
                      href="mailto:spiceaurainternational25@gmail.com" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      spiceaurainternational25@gmail.com
                    </a>
                  </div>
                </div>

                {/* Shopify */}
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-border flex items-center justify-center group-hover:bg-foreground transition-colors duration-500">
                    <Store className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 uppercase text-sm">Shopify</p>
                    <a href="https://yourstore.myshopify.com" target="_blank" className="text-muted-foreground hover:text-foreground">
                      Visit our Shopify Store
                    </a>
                  </div>
                </div>

                {/* eBay */}
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors duration-500">
                    <ShoppingBag className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 tracking-wider uppercase text-sm">eBay</p>
                    <a
                      href="https://www.ebay.com"
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Visit our eBay Store
                    </a>
                  </div>
                </div>

                
                {/* Instagram */}
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors duration-500">
                    <Instagram className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 tracking-wider uppercase text-sm">Instagram</p>
                    <a
                      href="https://www.instagram.com/royalauraspeices?igsh=MnN2ZGE0NWo1aTY%3D&utm_source=qr"
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Follow us on Instagram
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors duration-500">
                    <Facebook className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 tracking-wider uppercase text-sm">Facebook</p>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Like us on Facebook
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors duration-500">
                    <Phone className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 tracking-wider uppercase text-sm">Phone</p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +94 77 380 0558
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-16 h-16 border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground transition-colors duration-500">
                    <MapPin className="w-6 h-6 text-foreground group-hover:text-background transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2 tracking-wider uppercase text-sm">Location</p>
                    <p className="text-muted-foreground">
                      Srilanka<br />
                      Kandy, Velamboda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-foreground text-background p-10">
              <h4 className="text-xl font-bold mb-4 tracking-wider">WHY CHOOSE US</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1">—</span>
                  <span>100% Organic & Natural</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">—</span>
                  <span>Direct from Farm</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">—</span>
                  <span>Premium Quality Guaranteed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">—</span>
                  <span>Sustainable Practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">—</span>
                  <span>Fast Delivery Worldwide</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 tracking-wider uppercase">
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="h-14 border-border focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 tracking-wider uppercase">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="h-14 border-border focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 tracking-wider uppercase">
                  Phone
                </label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  required
                  className="h-14 border-border focus:border-foreground transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 tracking-wider uppercase">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  required
                  rows={6}
                  className="resize-none border-border focus:border-foreground transition-colors"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                variant="hero"
                className="w-full h-14 tracking-wider"
              >
                SEND INQUIRY <Send className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;