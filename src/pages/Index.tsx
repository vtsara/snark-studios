
import { Code, Monitor, PenTool } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HireButton from '@/components/HireButton';
import Hexagon from '@/components/Hexagon';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import ScrollEffect from '@/components/ScrollEffect';
import ParallaxSection from '@/components/ParallaxSection';

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-[#cede54] flex items-center overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollEffect speed={0.8} direction="left">
                <div className="w-32 h-32 bg-black mb-6"></div> {/* Logo placeholder */}
                <h1 className="font-bebas text-7xl md:text-9xl leading-none mb-4">
                  FRONT-END<br />
                  DEVELOPER
                </h1>
                <div className="space-y-2 mb-8">
                  <h2 className="font-courier text-xl">CREATIVE</h2>
                  <h2 className="font-courier text-xl ml-8">RELIABLE</h2>
                  <h2 className="font-courier text-xl ml-16">EFFICIENT</h2>
                </div>
                <HireButton />
              </ScrollEffect>
            </div>
            
            <div className="relative">
              <ScrollEffect speed={0.6} delay={200} direction="right">
                <div className="w-full aspect-square bg-black border-8 border-white relative overflow-hidden">
                  {/* Headshot placeholder */}
                  <div className="absolute inset-0 bg-[#3dace2] opacity-10"></div>
                </div>
              </ScrollEffect>
            </div>
          </div>
        </div>
        
        {/* Decorative hexagons with parallax effect */}
        <Hexagon size={15} top="15%" left="10%" speed={0.8} color="#3dace2" />
        <Hexagon size={24} top="25%" left="30%" speed={0.5} delay={100} color="#3dace2" />
        <Hexagon size={12} top="65%" left="15%" speed={1.2} delay={150} color="#3dace2" />
        <Hexagon size={20} top="80%" left="40%" speed={0.7} delay={200} color="#3dace2" />
        <Hexagon size={18} top="10%" right="25%" speed={0.9} delay={50} color="#3dace2" />
        <Hexagon size={14} top="40%" right="18%" speed={1.1} delay={120} color="#3dace2" />
        <Hexagon size={22} top="70%" right="12%" speed={0.6} delay={180} color="#3dace2" />
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollEffect>
            <h2 className="font-bebas text-5xl md:text-6xl mb-16 text-center">SERVICES</h2>
          </ScrollEffect>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollEffect delay={100} direction="up">
              <ServiceCard 
                title="WEB DESIGN" 
                description="Creative and responsive designs that engage your audience and reflect your brand's unique identity."
                icon={<PenTool size={48} />}
              />
            </ScrollEffect>
            
            <ScrollEffect delay={200} direction="up">
              <ServiceCard 
                title="FRONT-END DEVELOPMENT" 
                description="Clean, efficient code that brings designs to life with smooth interactions and optimal performance."
                icon={<Code size={48} />}
              />
            </ScrollEffect>
            
            <ScrollEffect delay={300} direction="up">
              <ServiceCard 
                title="RESPONSIVE INTERFACES" 
                description="Websites that work flawlessly across all devices and provide exceptional user experiences."
                icon={<Monitor size={48} />}
              />
            </ScrollEffect>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <ParallaxSection 
        speed={0.3} 
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayColor="rgba(61, 172, 226, 0.85)"
        className="py-32"
        id="about"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <ScrollEffect speed={0.7}>
              <h2 className="font-bebas text-5xl md:text-6xl mb-8 text-white">
                I REALLY WANNA<br />HELP YOU
              </h2>
              
              <div className="font-courier text-white space-y-4">
                <p>
                  I'm a passionate front-end developer with over 5 years of experience 
                  creating stunning, functional websites and web applications.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving,
                  ensuring that every project I work on not only looks great but also 
                  performs exceptionally well. I specialize in creating responsive, 
                  user-friendly interfaces that make meaningful connections with your audience.
                </p>
                <p>
                  Let's collaborate to bring your vision to life!
                </p>
              </div>
            </ScrollEffect>
          </div>
        </div>
      </ParallaxSection>
      
      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-[#cede54] overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <ScrollEffect>
            <h2 className="font-bebas text-5xl md:text-6xl mb-16 text-center">GET IN TOUCH</h2>
          </ScrollEffect>
          
          <div className="flex justify-center">
            <ScrollEffect delay={150}>
              <ContactForm />
            </ScrollEffect>
          </div>
        </div>
        
        {/* Decorative hexagons with parallax effect */}
        <Hexagon size={15} top="15%" left="10%" speed={0.8} color="#3dace2" />
        <Hexagon size={24} top="25%" left="30%" speed={0.5} delay={100} color="#3dace2" />
        <Hexagon size={12} top="65%" left="15%" speed={1.2} delay={150} color="#3dace2" />
        <Hexagon size={20} top="80%" left="40%" speed={0.7} delay={200} color="#3dace2" />
        <Hexagon size={18} top="10%" right="25%" speed={0.9} delay={50} color="#3dace2" />
        <Hexagon size={14} top="40%" right="18%" speed={1.1} delay={120} color="#3dace2" />
        <Hexagon size={22} top="70%" right="12%" speed={0.6} delay={180} color="#3dace2" />
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="font-courier">&copy; {new Date().getFullYear()} - Designed & Developed with passion</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
