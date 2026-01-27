import React from 'react';
import { HeroSection } from '@/components/section'; // Adjust the import path as needed

 function HeroSectionDemo() {
  return (
    <div className="w-full">
      <HeroSection
        logo={{
            url: "images/img1.png",
            alt: "Company Logo",
            text: ""
        }}
        slogan="Awesome Creation"
        title={
          <>
            Each Peak <br />
            <span className="text-white">Teaches Something</span>
          </>
        }
        subtitle="Discover breathtaking landscapes and challenge yourself with our guided mountain expeditions. Join a community of adventurers."
        callToAction={{
          text: "Contact Us ",
          href: "/contact",
        }}
        backgroundImage="/4.jpeg"
        contactInfo={{
            website: "awesome__creation",
            phone: "+91 7411 074 379",
            address: "Panemangalore , BC Road, 574231",
        }}
      />
    </div>
  );
}
export default  HeroSectionDemo;