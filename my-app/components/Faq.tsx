"use client"
import React, { useState } from 'react';

// --- FaqItem Component (THE FIX IS HERE) ---

// 1. Define the interface for FaqItem props
interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

// 2. Use the interface to type the component arguments
const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg text-text-dark hover:text-primary-green transition duration-300"
      onClick={onClick}
    >
      {question}
      {/* Icon for open/close state */}
      <span className="text-2xl transition-transform duration-300">
        {isOpen ? '−' : '+'} 
      </span>
    </button>
    {isOpen && (
      <div className="pb-4 pr-6 text-text-light">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

// --- Main FAQ Page Component (No changes needed here) ---
export default function FaqPage() {
  // 1. STATE: Use useState to track the index of the currently open item.
  // We initialize it to -1, meaning no item is open by default.
  const [activeIndex, setActiveIndex] = useState(-1);

  // 2. HANDLER: Function to manage the click event.
  // Note: The original code had `(index: React.SetStateAction<number>)`. 
  // It's cleaner to explicitly type `index` as `number` for clarity.
  const handleClick = (index: number) => {
    // If the clicked item is already active, close it (set to -1).
    // Otherwise, set the new index as the active one.
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const faqContent = [
    // --- Logistics & Access ---
    {
      question: "What happens if my dog is outside during the service?",
      answer: "We love meeting your dog! However, for their safety and our efficiency, we ask that all dogs be kept secured inside the house or garage while we are working in the yard. Our scoopers will announce their arrival if you are home.",
    },
    {
      question: "What if my gate is locked or blocked?",
      answer: "We require unrestricted access to the yard on your scheduled service day. If the gate is locked, blocked, or not working, we will proceed with the accessible areas only. We cannot issue refunds for areas we couldn't reach, so please ensure the gate is unlocked!",
    },
    {
      question: "Do I need to be home for the service?",
      answer: "No, you do not! As long as we have clear, safe access to the yard (unlocked gate, no pets outside), we can perform the service while you are away. We handle the dirty work discreetly.",
    },
    
    // --- Service & Scheduling ---
    {
      question: "How long does a typical cleanup take?",
      answer: "The duration depends on the size of your yard and the frequency of service (weekly, bi-weekly, etc.). A typical weekly cleaning for a standard yard usually takes 15–30 minutes.",
    },
    {
      question: "What happens during holidays or bad weather?",
      answer: "We monitor the weather closely. For minor holidays, we generally run as scheduled. For major holidays or severe weather (heavy snow, lightning), we may delay service by one day and will always notify you immediately via email or text.",
    },
    {
      question: "How do you dispose of the waste?",
      answer: "All waste is double-bagged and removed from your property. We dispose of the waste according to local regulations, ensuring it's handled safely and hygienically.",
    },
    
    // --- Pricing & Contracts ---
    {
      question: "Is there an initial cleaning fee?",
      answer: "Yes, for first-time customers, we require an 'Initial Clean' to bring the yard up to our standard. This one-time fee is based on the accumulation and yard size. After the initial clean, regular weekly or bi-weekly pricing applies.",
    },
    {
      question: "Are there contracts or cancellation fees?",
      answer: "Absolutely not. We believe our service should earn your business every week. All services are month-to-month, and you can cancel or pause anytime with simple notice.",
    },
    
    // --- Extra Services ---
    {
      question: "What is the Yard Deodorizing service?",
      answer: "Our deodorizing service uses a safe, pet-friendly enzymatic spray that neutralizes odors caused by waste, urine, and organic matter, rather than just masking them. It's highly recommended, especially in hot weather.",
    },
  ];

  return (
    <div id="faq" className="bg-white">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-primary-green mb-4">
            Common Questions
          </h2>
          <p className="text-xl text-text-light">
            Everything you need to know about our service, access, and schedule.
          </p>
        </header>

        <div className="border-t border-gray-200">
          {/* Map over the content to create the collapsible FAQ items */}
          {faqContent.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              // 3. PROP: Pass down if the current item is the active one.
              isOpen={index === activeIndex} 
              // 4. PROP: Pass down the handler with the current index.
              onClick={() => handleClick(index)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}