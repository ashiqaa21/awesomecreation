"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServiceCard = ({ title, imageUrl, category }) => (
  <div className="group relative overflow-hidden h-[500px] rounded-t-full transition-all duration-700 ease-in-out hover:rounded-lg">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Soft Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
    </div>

    {/* Content Container */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
      {/* <span className="text-xs uppercase tracking-[0.3em] text-amber-200 mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
        {category}
      </span> */}
      <h3 className="text-2xl md:text-3xl font-redrose text-white mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
        {title}
      </h3>
      
      {/* Decorative Button */}
      <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
        <button className="px-6 py-2 border border-transparent text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
          
        </button>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [



  { category: 'Bespoke', title: 'Personalized Love', imageUrl: '/1.png' },
  { category: 'Corporate', title: 'Big Impact', imageUrl: '/12.JPEG' },
  { category: 'Intimate', title: 'Handcrafted Heart', imageUrl: '/3.png' },
  // { category: 'Creative', title: 'Creative Ideas', imageUrl: '/1.PNG' },
  { category: 'Luxury', title: 'Designed Delight', imageUrl: '/6.PNG' },
  { category: 'Professional', title: 'Precise Details', imageUrl: '/7.JPEG' },
  { category: 'Social', title: 'Captured Memories', imageUrl: '/8.JPEG' },
  { category: 'Entertainment', title: 'Inspiring Art', imageUrl: '/9.png' },
  { category: 'Formal', title: 'Told Stories', imageUrl: '/13.JPEG' },
  { category: 'Formal', title: 'Crafted Happiness', imageUrl: '/14.JPEG' },
  { category: 'Formal', title: 'Creative Love', imageUrl: '/22.JPG' },
  { category: 'Formal', title: 'Unique Souls', imageUrl: '/16.JPEG' },
  { category: 'Formal', title: 'Tactile Art', imageUrl: '/17.JPEG' },
  // { category: 'Formal', title: 'Handmade Heart', imageUrl: '/18.JPG' },
  { category: 'Formal', title: 'Treasured Creation', imageUrl: '/19.JPEG' },
  { category: 'Formal', title: 'Purely Handmade', imageUrl: '/20.JPG' },
  { category: 'Formal', title: 'Soulful Craft', imageUrl: '/21.PNG' },
  { category: 'Formal', title: 'Handmade Joy', imageUrl: '/15.JPEG' },
  { category: 'Formal', title: 'Happy Place', imageUrl: '/23.JPEG' },
]


  return (
    <section className="py-24 bg-[#FAF9F6]"> {/* Off-white "Paper" background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Design */}
        <div className="text-center mb-16 space-y-4">
          {/* <span className="text-[#b57c6b] uppercase tracking-[0.4em] text-sm font-semibold" data-aos="fade-up">
            Exquisite Offerings
          </span> */}
          <h2 className="text-4xl md:text-6xl font-monte text-black leading-tight" data-aos="fade-up" data-aos-delay="100">
            Elevating Every <br /> <span className="italic font-light">Celebration</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#b57c6b] mx-auto mt-4"></div>
        </div>

        {/* Swiper implementation */}
        <div data-aos="fade-up" data-aos-delay="300">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 4 },
            }}
            // pagination={{ clickable: true, dynamicBullets: true }}
            className="pb-14 "
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