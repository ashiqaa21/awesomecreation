"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const CompanyIntro: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Increased slightly for better visibility
      once: true,
      easing: 'ease-in-out-cubic',
    });
  }, []);

  const slidingImages = [
    "images/2.png", "images/3.png", "images/5.jpeg", "images/14.jpeg",
    "images/13.jpeg", "images/6.png", "images/7.jpeg", "images/8.jpeg",
    "images/9.png", "images/11.jpeg", "images/22.jpg",
  ];

  return (
    <section id="about" className="relative py-20 lg:py-8  lg:mb-16 overflow-hidden bg-[#fcfaf8]">
      {/* Background Texture & Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.2]" style={{ backgroundImage: 'url("/images/5.JPG")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="absolute right-0 top-0 w-1/3 bg-black opacity-40 z-0 hidden lg:block" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUMN A: Image Slider */}
          {/* Mobile: Order 2 (Bottom) | Desktop: Order 1 (Left) */}
          <div className="relative order-2 lg:order-1" data-aos="fade-right">
            <div className="relative z-20 w-full aspect-[4/5] overflow-hidden  rounded-sm border-[12px] border-white bg-white">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {slidingImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img src={src} alt={`Event Showcase ${index + 1}`} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 z-30 bg-black text-white p-5 rounded-full   hidden md:block" data-aos="zoom-in" data-aos-delay="400">
              <p className="text-4xl font-bold text-center">3+</p>
              <p className="text-sm uppercase tracking-widest font-light">Years of Love & Smiles</p>
            </div>
            <div className="absolute -left-4 top-10 w-20 h-[2px] bg-black z-10"></div>
          </div>

          {/* COLUMN B: Content */}
          {/* Mobile: Order 1 (Top) | Desktop: Order 2 (Right) */}
          <div className="space-y-8 order-1 lg:order-2" data-aos="fade-left">
            <div className="space-y-4">
              <span className="text-black uppercase tracking-[0.3em] text-sm font-semibold">
                Handcrafted With Love
              </span>
              <h2 className="text-4xl font-monte lg:text-6xl font-medium text-gray-900 leading-tight">
                We Create Gifts That<br /><span className="italic text-[#b57c6b]"> Speak Your Heart</span>
              </h2>
              <div className="w-20 h-1 bg-black"></div>
            </div>

            <div className="space-y-4 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                At <span className="font-semibold text-gray-800">Awesome Creation </span>, we believe every gift is more than just a product it’s an emotion.
                From customized bouquets to surprise hampers, we design each piece with love, care, and creativity.
              </p>
              <p>
                  Whether it’s a birthday, anniversary, or a special surprise, we help you make every moment unforgettable 💖</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;