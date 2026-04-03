import React from 'react';
import { ChevronRight } from 'lucide-react';

const ContactParallax = () => {
  return (
    <section className="relative h-[30vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
      {/* --- VIDEO BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
<img 
  src="images/f.jpeg" 
  alt="Calligraphy detail" 
  className="w-full h-auto rotate object-cover   shadow-2xl " 
/>
        
        {/* Dark Overlay - Keeps text readable over moving video */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[3px]"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 container mx-auto px-4 text-center space-y-8" data-aos="fade-up">
        <div className="space-y-4">
          <span className="text-amber-200 uppercase tracking-[0.6em] text-xs font-sans font-bold">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-7xl font-monte text-white ">
            Ready to Surprise <br /> 
            <span className="italic font-light">Someone Special?</span>
          </h2>
          <p className="text-gray-200 font-light text-lg md:text-xl max-w-2xl mx-auto ">
            Looking for the perfect gift? We’re here to create something truly special for you.
            From initial concept to the final toast, we handle it all.
          </p>
        </div>

      
      </div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default ContactParallax;