"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 1. Define the Interface to fix the Vercel Type Error
interface ServiceCardProps {
  title: string;
  imageUrl: string;
  category: string;
}

// 2. Apply the Interface to the component
const ServiceCard = ({ title, imageUrl, category }: ServiceCardProps) => (
  <div className="group relative overflow-hidden h-[500px] rounded-t-full transition-all duration-700 ease-in-out hover:rounded-lg">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Soft Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
    </div>

    {/* Content Container */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
      <h3 className="text-2xl md:text-3xl font-redrose text-white mb-6 transform transition-transform duration-500 group-hover:-translate-y-4">
        {title}
      </h3>
      
      {/* Decorative Button */}
      <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
        <button className="px-6 py-2 border border-white text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    { category: 'Bespoke', title: 'Personalized Love', imageUrl: 'images/1.png' },
    { category: 'Corporate', title: 'Big Impact', imageUrl: 'images/12.JPEG' },
    { category: 'Intimate', title: 'Handcrafted Heart', imageUrl: 'images/3.png' },
    { category: 'Luxury', title: 'Designed Delight', imageUrl: 'images/6.PNG' },
    { category: 'Professional', title: 'Precise Details', imageUrl: 'images/7.JPEG' },
    { category: 'Social', title: 'Captured Memories', imageUrl: 'images/8.JPEG' },
    { category: 'Entertainment', title: 'Inspiring Art', imageUrl: 'images/9.png' },
    { category: 'Formal', title: 'Told Stories', imageUrl: 'images/13.JPEG' },
    { category: 'Formal', title: 'Crafted Happiness', imageUrl: 'images/14.JPEG' },
    { category: 'Formal', title: 'Creative Love', imageUrl: 'images/22.JPG' },
    { category: 'Formal', title: 'Unique Souls', imageUrl: 'images/16.JPEG' },
    { category: 'Formal', title: 'Tactile Art', imageUrl: 'images/17.JPEG' },
    { category: 'Formal', title: 'Treasured Creation', imageUrl: 'images/19.JPEG' },
    { category: 'Formal', title: 'Purely Handmade', imageUrl: 'images/20.JPG' },
    { category: 'Formal', title: 'Soulful Craft', imageUrl: 'images/21.PNG' },
    { category: 'Formal', title: 'Handmade Joy', imageUrl: 'images/15.JPEG' },
    { category: 'Formal', title: 'Happy Place', imageUrl: 'images/23.JPEG' },
  ];

  return (
    <section id="services" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Design */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-monte text-black leading-tight">
            Elevating Every <br /> <span className="italic font-light text-[#b57c6b]">Celebration</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#b57c6b] mx-auto mt-4"></div>
        </div>

        {/* Swiper implementation */}
        <div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 15 },
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4.2 },
            }}
            className="pb-14"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;