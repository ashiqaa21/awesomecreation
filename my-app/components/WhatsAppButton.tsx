"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setCollapsed(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/917411074379"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-[999]
        h-10
        rounded-full
        bg-[#FAF9F6]
        border border-[#b57c6b]/20
        shadow-lg
        backdrop-blur-sm
        flex items-center
        px-2
        hover:shadow-xl
      "
    >
      <div className="text-[#b57c6b] flex-shrink-0">
  <FaWhatsapp size={18} />
</div>
      

      <span
        className={`
          overflow-hidden whitespace-nowrap
          text-[11px] uppercase
          tracking-[0.18em]
          text-[#b57c6b]
          transition-all duration-500 ease-out
          ${
            collapsed
              ? "max-w-0 opacity-0 ml-0 translate-x-2"
              : "max-w-[120px] opacity-100 ml-2 translate-x-0"
          }
        `}
      >
        Chat Now
      </span>
    </a>
  );
}