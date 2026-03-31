"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { supabase } from '@/lib/supabase'; // Adjust path if necessary

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  category: string;
}

const WHATSAPP_NUMBER = "917411074379"; // Replace with your number (country code first, no +)

const ServiceCard = ({ title, imageUrl, category }: ServiceCardProps) => {
  const handleWhatsAppClick = () => {
    const professionalText = `Hello! I'm interested in the "${title}" service from your "${category}" collection.\t Could you please provide more information?`;
    const encodedText = encodeURIComponent(professionalText);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="group relative overflow-hidden h-[500px] rounded-t-full transition-all duration-700 ease-in-out hover:rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
        <h3 className="text-2xl md:text-3xl font-redrose text-white mb-6 transform transition-transform duration-500 group-hover:-translate-y-4">
          {title}
        </h3>
        
        <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500">
          <button 
            onClick={handleWhatsAppClick}
            className="px-6 py-2 border border-white text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Inquire on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [services, setServices] = useState<ServiceCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from('services') // Assumes your table is named 'services'
        .select('*');

      if (error) {
        console.error('Error fetching from Supabase:', error);
      } else if (data) {
        setServices(data);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  if (loading) return <div className="py-20 text-center text-[#b57c6b]">Loading Collection...</div>;

  return (
    <section id="services" className="py-18 bg-[#FAF9F6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-monte text-black leading-tight">
            Elevating Every <br /> <span className="italic font-light text-[#b57c6b]">Celebration</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#b57c6b] mx-auto mt-4"></div>
        </div>

        <div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            loop={services.length > 4}
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