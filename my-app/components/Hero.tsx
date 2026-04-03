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
            Handcrafted Gifts <br />
            <span className="text-white">Made With Love</span>
          </>
        }
        subtitle="Personalized bouquets, hampers & custom creations for your special moments."
        callToAction={{
          text: "Contact Us ",
          href: "/contact",
        }}
        backgroundImage="images/4.jpeg"
        contactInfo={{
            website: "awesome__creation",
            address: "Panemangalore , BC Road, 574231",
        }}
      />
    </div>
  );
}
export default  HeroSectionDemo;