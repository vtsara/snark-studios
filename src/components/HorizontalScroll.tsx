
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  className?: string;
}

const HorizontalScroll = ({ className }: HorizontalScrollProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    const horizontal = horizontalRef.current;

    if (!section || !trigger || !horizontal) return;

    // Get the width of the horizontal content
    const horizontalWidth = horizontal.scrollWidth;

    // Create the horizontal scrolling effect
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top top',
        end: () => `+=${horizontalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });

    // Animate the horizontal container
    tl.to(horizontal, {
      x: () => -(horizontalWidth - window.innerWidth),
      ease: 'none'
    });

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={cn("relative overflow-hidden bg-black text-white", className)}
    >
      <div 
        ref={triggerRef}
        className="absolute top-0 left-0 w-full h-full"
      ></div>
      <div 
        ref={horizontalRef}
        className="flex flex-nowrap h-screen"
      >
        {[...Array(10)].map((_, index) => (
          <div 
            key={index} 
            className="flex-none w-screen h-full flex flex-col items-center justify-center border-l border-white/10 first:border-l-0"
          >
            <div className="w-full max-w-xl mx-auto p-12">
              <div 
                className={cn(
                  "text-[12vw] md:text-[8vw] font-bebas leading-none",
                  index % 2 === 0 ? "text-[#3dace2]" : "text-[#cede54]"
                )}
              >
                {`0${index + 1}`}
              </div>
              <h3 className="font-bebas text-4xl md:text-5xl mt-4 mb-6">
                {`PROJECT ${index + 1}`}
              </h3>
              <p className="font-courier text-white/70">
                A brief description of project {index + 1} and the technologies used. Each section showcases a different project in the developer's portfolio.
              </p>
              <div className="mt-8">
                <button className="bg-[#3dace2] text-white font-bebas px-8 py-3 text-xl relative ss-btn overflow-hidden">
                  VIEW PROJECT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
