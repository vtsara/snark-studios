
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface HexagonProps {
  className?: string;
  size?: number;
  color?: string;
  speed?: number;
  delay?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Hexagon = ({ 
  className, 
  size = 20, 
  color = "#3dace2", 
  speed = 1,
  delay = 0,
  top,
  left,
  right,
  bottom
}: HexagonProps) => {
  const hexRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const hex = hexRef.current;
    if (!hex) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * speed * 0.05;
      hex.style.transform = `translateY(${offset}px) rotate(${offset * 0.5}deg)`;
    };

    setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, delay);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, delay]);

  return (
    <div 
      ref={hexRef}
      className={cn("absolute", className)}
      style={{ 
        width: `${size}px`, 
        height: `${size}px`, 
        backgroundColor: color,
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        top,
        left,
        right,
        bottom
      }}
    />
  );
};

export default Hexagon;
