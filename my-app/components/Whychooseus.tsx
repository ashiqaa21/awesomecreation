"use client"
import React from 'react';
import { Sparkles, Heart, Crown, Camera, MapPin, PenTool, Scissors } from 'lucide-react';
import { video } from 'framer-motion/client';

const WhyChooseUsSingle = () => {
  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Large Featured Image with Overlapping Detail */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
              <div className="relative z-10  rounded-b-2xl rounded-t-[150px] overflow-hidden shadow-2xl">
  <video 
    src="/mov1.mp4" 
    width="640" 
    height="440" 
    autoPlay // Starts video automatically
    muted    // Required for autoPlay to work in most browsers
    loop     // Keeps it playing
    playsInline // Required for iOS support
    className="w-full h-[800px]  object-cover"
  >
    Your browser does not support the video tag.
  </video>
  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
</div>
            {/* Small Floating "Detail" Image */}
            <div 
              className="absolute -bottom-10 -right-6 lg:-right-12 w-48 h-56 z-20 rounded-2xl overflow-hidden shadow-2xl border-8 border-white hidden md:block"
              data-aos="zoom-in" 
              data-aos-delay="400"
            >
              <img src="/16.jpeg" alt="Detail" className="w-full h-full object-cover" />
            </div>

            {/* Aesthetic Background Shapes */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#b57c6b]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Right Side: Single Narrative Column */}
          <div className="w-full lg:w-1/2 space-y-12" data-aos="fade-left">
            <div className="space-y-6">
              <h4 className="text-[#b57c6b] uppercase tracking-[0.5em] text-xs font-bold font-sans">
                The Studio Signature
              </h4>
              <h2 className="text-5xl md:text-7xl font-monte text-gray-900 leading-[1.1]">
                Where Every Detail <br /> 
                <span className="italic font-light text-[#b57c6b]">Whispers Luxury</span>
              </h2>
              <div className="w-20 h-[1.5px] bg-[#b57c6b]/30"></div>
            </div>

            <div className="space-y-8">
              <p className="text-xl text-gray-700  font- italic leading-relaxed">
                "We don't just decorate spaces; we architect immersive experiences that blend avant-garde lighting with floral sculpture."
              </p>
              
              <p className="text-gray-600 font-light  leading-relaxed text-lg">
                With over 12 years of perfecting the 'wow' factor, our team manages the technical complexities so you can focus on the memories. From the scent of fresh peonies to the warm glow of custom-engineered lighting, we ensure every guest feels the magic the moment they step into your world.
              </p>
            </div>

            {/* Value Props - Streamlined */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6 pt-10 border-t border-gray-200">
  <div className="space-y-3">
    {/* Swapped Crown for Pen Tool / Nib icon */}
    <PenTool size={24} className="text-[#b57c6b]" />
    <h5 className="font-redrose text-xl text-gray-900">Artisanal Script</h5>
    <p className="text-sm text-gray-500 font-light leading-relaxed">
      Hand-lettered calligraphy that captures the rhythmic grace of ink on parchment.
    </p>
  </div>
  <div className="space-y-3">
    {/* Swapped Camera for Scissors or Layers icon */}
    <Scissors size={24} className="text-[#b57c6b]" />
    <h5 className="font-redrose text-xl text-gray-900">Precision Craft</h5>
    <p className="text-sm text-gray-500 font-light leading-relaxed">
      Meticulously hand-assembled details using premium materials for a tactile experience.
    </p>
  </div>
</div>

            
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSingle;