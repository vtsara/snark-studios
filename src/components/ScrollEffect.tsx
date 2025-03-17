
import { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollEffectProps {
  children: ReactNode;
  speed?: number;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollEffect = ({ 
  children, 
  speed = 0.5, 
  delay = 0,
  className,
  direction = 'up'
}: ScrollEffectProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Initial position
    element.style.opacity = '0';
    
    let directionMultiplier = 1;
    let transformProperty = 'translateY';
    
    switch (direction) {
      case 'down':
        directionMultiplier = -1;
        transformProperty = 'translateY';
        break;
      case 'left':
        directionMultiplier = 1;
        transformProperty = 'translateX';
        break;
      case 'right':
        directionMultiplier = -1;
        transformProperty = 'translateX';
        break;
      default: // 'up'
        directionMultiplier = 1;
        transformProperty = 'translateY';
    }
    
    element.style.transform = `${transformProperty}(${30 * directionMultiplier}px)`;
    
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (rect.top < windowHeight * 0.85) {
        element.style.opacity = '1';
        element.style.transform = `${transformProperty}(0)`;
      }
    };
    
    // Initial check
    setTimeout(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }, delay);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, delay, direction]);
  
  return (
    <div 
      ref={elementRef} 
      className={cn("transition-all", className)}
      style={{ transitionDuration: `${0.6 / speed}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollEffect;
