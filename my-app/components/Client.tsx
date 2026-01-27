"use client"
import React, { useEffect, useState, useRef } from 'react';
import { animate, useMotionValue, useTransform, useInView } from "framer-motion";
import { PenTool, Scissors, Scroll, Sparkles } from 'lucide-react';

// 1. Defined TypeScript Interface for Props
interface CounterProps {
  from: number;
  to: number;
  duration?: number;
}

function Counter({ from, to, duration = 2 }: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest: number) => Math.round(latest));
  const [display, setDisplay] = useState<number>(from);
  
  // 2. Added explicit HTMLSpanElement type to the ref
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { 
        duration: duration,
        ease: "easeOut" 
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  useEffect(() => {
    // 3. Typed the change listener value
    return rounded.on("change", (v: number) => setDisplay(v));
  }, [rounded]);

  return <span ref={ref}>{display}</span>;
}

const QualitySection = () => {
  const pillars = [
    {
      title: "The Written Legacy",
      desc: "Ink is the fingerprint of the soul. We breathe life into every letter, ensuring your story is told with the permanence and elegance it deserves.",
      icon: <PenTool size={24} />
    },
    {
      title: "Tactile Storytelling",
      desc: "True luxury is felt. We select materials that speak to the senses, turning every invitation and commission into a tangible memory.",
      icon: <Scroll size={24} />
    },
    {
      title: "The Alchemist's Detail",
      desc: "Where math meets magic. Our precision ensures that every structural element is as strong as it is beautiful, built for a lifetime of display.",
      icon: <Scissors size={24} />
    },
    {
      title: "The Final Benediction",
      desc: "A masterpiece is finished only when the last seal is pressed. We add the quiet, golden details that turn paper into a cherished heirloom.",
      icon: <Sparkles size={24} />
    }
  ];

  return (
    <section 
      className="relative py-24 font-sans bg-cover bg-center bg-no-repeat overflow-hidden" 
      style={{ backgroundImage: "url('images/e1.jpg')" }}
    >
      {/* The Backdrop Blur Layer */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[6px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[#b57c6b] uppercase tracking-[0.4em] text-xs font-bold block">
                The Artisanal Standard
              </span>
              <h2 className="text-4xl md:text-6xl font-monte text-black">
                Ink on Paper, <br /> 
                <span className="italic font-light text-[#b57c6b]">Soul on Surface</span>
              </h2>
              <p className="text-black font-light text-lg leading-relaxed max-w-lg">
                In a world of mass production, we celebrate the slow, the deliberate, and the hand-made. Every commission is a collaboration between heritage techniques and modern aesthetic vision.
              </p>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="text-center space-y-2">
                <span className="text-5xl font-redrose text-[#b57c6b]">
                  <Counter from={0} to={4000} />+
                </span>
                <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Instagram Followers</p>
              </div>
              <div className="text-center space-y-2 border-l border-gray-100 pl-12">
                <span className="text-5xl font-redrose text-[#b57c6b]">
                  <Counter from={0} to={1400} />+
                </span>
                <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Instagram Posts</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="group p-6 border border-white/20 rounded-2xl bg-white/40 backdrop-blur-sm hover:bg-[#FAF9F6] transition-all duration-500 cursor-default shadow-sm"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-monte text-gray-800 group-hover:text-[#b57c6b] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-[#b57c6b] opacity-20 group-hover:opacity-100 transition-opacity">
                    {pillar.icon}
                  </div>
                </div>
                <p className="text-gray-500 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default QualitySection;