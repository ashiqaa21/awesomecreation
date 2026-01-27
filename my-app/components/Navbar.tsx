"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header 
      className="sticky top-0 z-50 border-b border-zinc-200 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/e.jpg')" }} // Replace with your path
    >
      {/* Overlay to ensure text remains readable */}
      <div className="bg-white/80 backdrop-blur-[3px] w-full h-full">
        <nav className="mx-auto flex flex-col items-center justify-center px-6 py-4 gap-6">
          
          <Link href="/">
            <img 
              className="h-[65px] transition-transform duration-300 hover:scale-105" 
              src="images/logo.jpeg" 
              alt="Logo" 
            />
          </Link>

         
        </nav>
      </div>
    </header>
  );
}