"use client"
import React from 'react';
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

// Icon component for contact details with explicit TypeScript typing
const InfoIcon = ({ type }: { type: 'website' | 'phone' | 'address' }) => {
    const icons = {
        website: (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="h-5 w-5 text-white"
            >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
        ),
        phone: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
        ),
        address: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        ),
    };
    return <div className="mr-2 flex-shrink-0">{icons[type]}</div>;
};

// FIX: Using Omit to prevent conflict with standard HTML 'title' attribute
interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
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

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
    ({ className, logo, slogan, title, subtitle, callToAction, backgroundImage, contactInfo, ...props }, ref) => {

        const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                },
            },
        };

        const itemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.5,
                    ease: "easeOut",
                },
            },
        };

        return (
            <motion.section
                ref={ref}
                className={cn(
                    "relative flex w-full flex-col overflow-hidden bg-black text-foreground md:flex-row",
                    className
                )}
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                {...props}
            >
                {/* Left Side: Content */}
                <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
                    <div>
                        <motion.header className="mb-12" variants={itemVariants}>
                            {logo && (
                                <div className="flex items-center">
                                    <img src={logo.url} alt={logo.alt} className="mr-3 h-14 rounded-full" />
                                    <div>
                                        {logo.text && <p className="text-lg font-light text-white">{logo.text}</p>}
                                        {slogan && <p className="text-md tracking-wider font-light text-muted-foreground">{slogan}</p>}
                                    </div>
                                </div>
                            )}
                        </motion.header>

                        <motion.main variants={containerVariants}>
                            <motion.h1 className="text-4xl font-monte text-white md:text-7xl tracking-wider" variants={itemVariants}>
                                {title}
                            </motion.h1>
                            <motion.div className="my-6 h-1 w-20 bg-[#b57c6b]" variants={itemVariants}></motion.div>
                            <motion.p className="mb-8 max-w-lg text-lg font-light tracking-wide leading-relaxed text-muted-foreground" variants={itemVariants}>
                                {subtitle}
                            </motion.p>
                            
                            {/* CTA Link implementation */}
                            <motion.div variants={itemVariants}>
                                <a 
                                    href={callToAction.href}
                                    className="inline-block bg-white px-8 py-3 text-black font-medium rounded-full hover:bg-[#b57c6b] hover:text-white transition-colors duration-300"
                                >
                                    {callToAction.text}
                                </a>
                            </motion.div>
                        </motion.main>
                    </div>

                    {/* Bottom Section: Footer Info */}
                    <motion.footer className="mt-12 w-full" variants={itemVariants}>
                        <div className="grid grid-cols-1 gap-6 text-sm md:text-lg text-muted-foreground sm:grid-cols-3">
                            <div className="flex items-center">
                                <InfoIcon type="website" />
                                <a href="https://www.instagram.com/awesome__creation" target='_blank' rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    <span>{contactInfo.website}</span>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <InfoIcon type="phone" />
                                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                                    <span>{contactInfo.phone}</span>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <InfoIcon type="address" />
                                <span>{contactInfo.address}</span>
                            </div>
                        </div>
                    </motion.footer>
                </div>

                {/* Right Side: Image with Clip Path Animation */}
                <motion.div 
                    className="w-full min-h-[400px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5"
                    style={{ 
                        backgroundImage: `url(${backgroundImage})`,
                    }}
                    initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
                    animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    transition={{ duration: 1.5, ease: "circOut", delay: 0.5 }}
                />
            </motion.section>
        );
    }
);

HeroSection.displayName = "HeroSection";

export { HeroSection };