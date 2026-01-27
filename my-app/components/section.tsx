"use client"
import React from 'react';
import { cn } from "@/lib/utils";
import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { InfoIcon, Instagram, Locate, Phone } from 'lucide-react';

// ... InfoIcon remains the same ...

// FIX: Extend HTMLMotionProps instead of React.HTMLAttributes
// This ensures all spread props are compatible with Framer Motion
interface HeroSectionProps extends Omit<HTMLMotionProps<"section">, 'title'> {
    logo?: {
        url: string;
        alt: string;
        text?: string;
    };
    slogan?: string;
    title: React.ReactNode; 
    subtitle: string;
    callToAction: {
        text: string;
        href: string;
    };
    backgroundImage: string;
    contactInfo: {
        website: string;
        phone: string;
        address: string;
    };
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
    ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {

        return (
            <motion.section
                ref={ref}
                className={cn(
                    "relative flex w-full min-h-[500px] flex-col overflow-hidden bg-black text-foreground md:flex-row ",
                    className
                )}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                {...props} // Now safely spreading motion-compatible props
            >
                {/* Left Side: Content */}
                <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16 z-10">
                    <div>
                        <motion.header className="mb-12" variants={itemVariants}>
                            {logo && (
                                <div className="flex items-center">
                                    <img src={logo.url} alt={logo.alt} className="mr-3 h-14 w-14 rounded-full object-cover" />
                                    <div>
                                        {logo.text && <p className="text-lg font-light text-white">{logo.text}</p>}
                                        {slogan && <p className="text-sm tracking-[0.2em] font-light text-muted-foreground uppercase">{slogan}</p>}
                                    </div>
                                </div>
                            )}
                        </motion.header>

                        <div className="space-y-6">
                            <motion.h1 className="text-5xl font-monte text-white md:text-8xl tracking-tight leading-[0.9]" variants={itemVariants}>
                                {title}
                            </motion.h1>
                            <motion.div className="h-[2px] w-24 bg-[#b57c6b]" variants={itemVariants} />
                            <motion.p className="mb-8 max-w-md text-lg md:text-xl font-light tracking-wide leading-relaxed text-zinc-400" variants={itemVariants}>
                                {subtitle}
                            </motion.p>
                            <motion.div variants={itemVariants}>
                                <a 
                                    href={callToAction.href}
                                    className="inline-flex items-center justify-center bg-white px-10 py-4 text-black text-sm uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#b57c6b] hover:text-white transition-all duration-500 shadow-xl"
                                >
                                    {callToAction.text}
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    <motion.footer className="mt-16 border-t border-white/10 pt-8" variants={itemVariants}>
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-zinc-400">
                            <div className="flex items-center hover:text-[#b57c6b] transition-colors">
                                <Instagram type="website" /> 
                                <a href="https://instagram.com/awesome__creation" target="_blank" className="text-sm p-1 tracking-widest">{contactInfo.website}</a>
                            </div>
                            <div className="flex items-center hover:text-[#b57c6b] transition-colors">
                                <Phone type="phone" />
                                <a href={`tel:${contactInfo.phone}`} className="text-sm tracking-widest">{contactInfo.phone}</a>
                            </div>
                            <div className="flex items-center">
                                <Locate type="address" />
                                <span className="text-sm tracking-widest">{contactInfo.address}</span>
                            </div>
                        </div>
                    </motion.footer>
                </div>

                {/* Right Side Image */}
                <motion.div 
                    className="relative w-full h-[50vh] md:h-auto md:w-1/2 lg:w-2/5 overflow-hidden"
                    variants={{
                        hidden: { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' },
                        visible: { 
                            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
                            transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
                        }
                    }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-120"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                </motion.div>
            </motion.section>
        );
    }
);

HeroSection.displayName = "HeroSection";
export { HeroSection };