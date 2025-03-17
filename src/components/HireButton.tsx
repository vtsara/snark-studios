
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface HireButtonProps {
  className?: string;
}

const HireButton = ({ className }: HireButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href="#contact"
      className={cn(
        "relative inline-block bg-[#3dace2] text-white px-10 py-5 overflow-hidden font-bebas text-2xl min-w-[180px] text-center",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">HIRE ME</div>
      <div 
        className={cn(
          "absolute inset-0 bg-[#3dace2] transform duration-300 ease-in-out",
          isHovered ? "translate-x-0" : "-translate-x-full"
        )}
      />
    </a>
  );
};

export default HireButton;
