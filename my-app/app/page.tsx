import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Service from "../components/Service";
import Image from "next/image";
import About from "@/components/About";
import Why from '@/components/Whychooseus';
import Parallex from "@/components/Parallex";
import Client from "@/components/Client";
import Footer from "@/components/Footer";



export default function Home() {


  return (
    <>
    <Navbar/>
    <main className="bg-zinc-50 text-zinc-900">
      {/* HERO SECTION */}
  <Hero/>
  <About/>

<Service/>
<Why/>
<Parallex/>
<Client/>
<Footer/>





    </main>
    </>
  );
}
