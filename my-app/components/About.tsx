"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const CompanyIntro: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: true,
      easing: 'ease-in-out-cubic',
    });
  }, []);

  // Replace these with your actual event decoration images
  const slidingImages = [
    "/2.PNG",
    "/3.png",
    "/5.JPEG",
    "/14.JPEG",
    // "/4.jpeg",
    "/13.jpeg",
    "/6.png",
    "/7.jpeg",
    "/8.jpeg",
    "/9.png",
    "/11.jpeg",
    "/22.jpg",
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 lg:py-14 overflow-hidden bg-[#fcfaf8]"
    >
      {/* --- Static Background Texture --- */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.2]" 
        style={{ 
          backgroundImage: 'url("/images/5.JPG")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 top-0 w-1/3  bg-black opacity-40 z-0 hidden lg:block" 
           style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Sliding Artistic Image Layout */}
          <div className="relative" data-aos="fade-right">
            
            {/* The Main Image Frame - Now a Slider */}
            <div className="relative z-20 w-full aspect-[4/5] overflow-hidden shadow-2xl rounded-sm border-[12px] border-white bg-white">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade" 
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {slidingImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={src} 
                      alt={`Event Showcase ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Decorative Floating Box (Remains static while images slide) */}
            <div 
              className="absolute -bottom-10 -right-6 lg:-right-10 z-30 bg-black text-white p-8 rounded-full shadow-xl hidden md:block"
              data-aos="zoom-in" 
              data-aos-delay="400"
            >
              <p className="text-4xl font-redrose font-bold">12+</p>
              <p className="text-sm uppercase tracking-widest font-light">Years of Magic</p>
            </div>

            {/* Accent Line */}
            <div className="absolute -left-4 top-10 w-20 h-[2px] bg-black z-10"></div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-4">
              <span className="text-black uppercase tracking-[0.3em] text-sm font-semibold font-sans">
                Since 2012 — The Art of Event Design
              </span>
              <h2 className="text-4xl lg:text-6xl font-monte font-medium text-gray-900 leading-tight">
                Our Passion is Bringing <br /><span className="italic text-[#b57c6b]"> Your Vision to Life</span>
              </h2>
              <div className="w-20 h-1 bg-black"></div>
            </div>

            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg font-sans">
              <p>
                At <span className="font-semibold text-gray-800">Our Events</span>, we believe every celebration tells a unique story. We specialize in bespoke floral arrangements, immersive set designs, and seamless coordination that captivates every detail.
              </p>
              <p>
                From intimate candlelit dinners to grand corporate galas, our team of creative designers works tirelessly to ensure your environment is not just decorated, but transformed into an unforgettable experience.
              </p>
            </div>

            {/* <div className="pt-4">
              <a 
                href="/demo/portfolio" 
                className="inline-flex items-center group text-gray-900 font-bold tracking-widest uppercase text-xs"
              >
               
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;