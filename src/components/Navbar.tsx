
import { useState, useEffect } from 'react';
import { Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky after scrolling past hero section
      const heroHeight = document.getElementById('hero')?.offsetHeight || 0;
      setIsSticky(window.scrollY > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
        isSticky ? "bg-white shadow-md" : "bg-transparent pointer-events-none"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <span className={cn(
            "transition-opacity duration-300",
            isSticky ? "opacity-100" : "opacity-0"
          )}>
            <Code className="h-8 w-8 mr-2 text-[#3dace2]" />
            <span className="font-bebas text-black">DEV</span>
          </span>
        </div>
        
        <div className={cn(
          "flex gap-6 transition-opacity duration-300",
          isSticky ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <a href="#services" className="font-courier text-black hover:text-[#3dace2] transition-colors">Services</a>
          <a href="#about" className="font-courier text-black hover:text-[#3dace2] transition-colors">About</a>
          <a href="#contact" className="font-courier text-black hover:text-[#3dace2] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
