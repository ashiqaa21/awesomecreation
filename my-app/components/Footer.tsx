import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 font-sans overflow-hidden">
      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("images/abt.jpg")', // Replace with your desired image path
        }}
      >
        {/* The Opacity Overlay: 85% black makes text pop */}
        <div className="absolute inset-0 bg-black/100"></div> 
      </div>

      {/* --- CONTENT (Wrapped in relative z-10 to stay above image) --- */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Narrative */}
          <div className="space-y-6">
            <img className='h-12 md:h-16 lg:h-21 ' src="images/logo1.jpeg" alt="Logo" />
            <p className="text-gray-300 font-light leading-relaxed text-sm">
              Architecting immersive atmospheres and timeless celebrations for a decade. We believe in the magic of details.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 border border-white/50 rounded-full hover:bg-[#b57c6b] hover:border-[#b57c6b] transition-all">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="p-2 border border-white/50 rounded-full hover:bg-[#b57c6b] hover:border-[#b57c6b] transition-all">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="p-2 border border-white/50 rounded-full hover:bg-[#b57c6b] hover:border-[#b57c6b] transition-all">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Boutique Services */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-[#b57c6b]">The Services</h4>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Wedding Gifts</li>
              <li className="hover:text-white transition-colors cursor-pointer">Birthday Gifts</li>
              <li className="hover:text-white transition-colors cursor-pointer">Anniversary Gifts</li>
              <li className="hover:text-white transition-colors cursor-pointer">Engagement and Others</li>
              {/* <li className="hover:text-white transition-colors cursor-pointer">Immersive Set Building</li> */}
            </ul>
          </div>

          {/* Studio Location */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-[#b57c6b]">The Studio</h4>
            <div className="space-y-4 text-sm text-gray-300 font-light">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#b57c6b] shrink-0" />
                <p>Panemangalore , BC Road, 574231</p>
              </div>
            </div>
          </div>

          {/* Contact & RSVP */}
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.4em] font-bold text-[#b57c6b]">Say Hello</h4>
            <div className="space-y-4 text-sm text-gray-300 font-light">
              <a href="mailto:info@leacsindus.com" className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail size={18} className="text-[#b57c6b]" />
                <span>ashikahaneef62@gmail.com</span>
              </a>
              <a href="tel:917411074379" className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone size={18} className="text-[#b57c6b]" />
                <span>+91 7411074379</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-400">
          <p>© 2026 Copyright. All Rights Reserved.</p>
          <p>
            Designed by  
            <a 
              href="https://wa.me/7411074379" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-[#b57c6b] transition-colors ml-1"
            >
              Ashika NH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
