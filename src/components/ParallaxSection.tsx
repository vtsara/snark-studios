
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  className?: string;
  speed?: number;
  children: React.ReactNode;
  backgroundImage?: string;
  overlayColor?: string;
  id?: string; // Added id prop to the interface
}

const ParallaxSection = ({ 
  className, 
  speed = 0.5,
  children,
  backgroundImage,
  overlayColor,
  id
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;
    
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const offset = scrollPosition * speed;
      
      // Only apply parallax effect when the section is in view
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        content.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return (
    <div 
      ref={sectionRef}
      id={id}
      className={cn("relative overflow-hidden", className)}
    >
      {backgroundImage && (
        <div 
          ref={contentRef}
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateY(0)'
          }}
        />
      )}
      
      {overlayColor && (
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ backgroundColor: overlayColor }}
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
