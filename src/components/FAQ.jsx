"use client";

import { useState } from 'react';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("MEDICAL CARE");
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    "MEDICAL CARE": [
      {
        question: "What is integrative primary care?",
        answer: "Integrative primary care combines conventional medicine with evidence-based complementary therapies. We focus on the whole person, addressing physical, emotional, and lifestyle factors to promote optimal health and healing."
      },
      {
        question: "Can I get lab work done at the center?",
        answer: "Yes, we offer on-site laboratory services for many common tests, providing a convenient experience for our patients during their visits."
      },
      {
        question: "Can you refill my prescriptions? Or help me get a new prescription?",
        answer: "Refills can typically be requested through the patient portal or by having your pharmacy send a request to us. New prescriptions require a consultation to ensure the most appropriate treatment plan."
      }
    ],
    "APPOINTMENTS": [
      {
        question: "Which appointment type should I use?",
        answer: "We offer several types of visits including New Patient Consultations, Follow-up visits, and Acute Care. If you're unsure, our patient coordinators can help determine the best appointment for your needs."
      },
      {
        question: "How do I choose a provider?",
        answer: "We recommend reviewing our team's bios to see their areas of expertise and approach to care. You can also call us to discuss which provider might be the best match for your specific health goals."
      },
      {
        question: "How can I contact my primary care provider?",
        answer: "You can communicate with your provider through our secure patient portal, by calling our office during business hours, or during your scheduled appointments."
      }
    ],
    "BILLING & INSURANCE": [
      {
        question: "Do you take my insurance?",
        answer: "We do not accept insurance and are a self-pay facility. However, many of our patients have out-of-network benefits and are able to get reimbursed for our services. We provide a detailed invoice (superbill) with all the necessary codes for you to submit to your insurance company."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, as well as FSA (Flexible Spending Account) and HSA (Health Savings Account) cards for our services."
      }
    ]
  };

  const categories = Object.keys(faqData);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setOpenIndex(null); // Reset open question when changing categories
  };

  const currentFaqs = faqData[activeCategory];

  return (
    <section className="bg-[var(--gw-secondary-light)] min-h-screen pb-32">
      {/* Top Banner */}
      <div className="w-full bg-[var(--gw-primary)] py-8 mb-16 relative overflow-hidden flex items-center justify-center shadow-inner">
        {/* Subtle decorative background layers */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/pattern.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-[0.1em] drop-shadow-md">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[var(--sw-solitude)] tracking-widest uppercase text-sm md:text-base font-medium font-sans">
            Here to help you navigate your journey
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-20">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group relative px-6 py-3 md:px-8 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase transition-all duration-300 focus:outline-none overflow-hidden ${
                  isActive 
                    ? "text-white shadow-md transform -translate-y-1 bg-[var(--gw-primary)] border-[var(--gw-primary)]" 
                    : "bg-white text-[var(--gw-text-muted)] border border-gray-200 hover:border-[var(--gw-secondary)] hover:text-[var(--gw-primary)] hover:shadow-sm"
                }`}
              >
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif text-[var(--gw-primary)] tracking-wide">
            {activeCategory}
          </h3>
          <div className="w-20 h-1 md:w-24 md:h-1.5 bg-[var(--gw-accent)] mx-auto mt-6 opacity-80"></div>
        </div>

        {/* FAQ Accordion List Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-xl shadow-[var(--gw-primary)]/5 border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {currentFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`group transition-all duration-500 ease-in-out ${
                    isOpen ? 'bg-[var(--sw-hazel)]/70' : 'hover:bg-gray-50/50'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-6 px-6 md:px-10 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span 
                      className={`text-sm md:text-base font-bold tracking-wider pr-8 transition-colors duration-300 font-sans uppercase text-[var(--gw-primary)]`}
                    >
                      {faq.question}
                    </span>
                    
                    {/* Clean arrow icon with circle background */}
                    <div 
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isOpen 
                          ? 'bg-[var(--gw-blue)] text-white rotate-180 shadow-md' 
                          : 'bg-gray-50 text-[var(--gw-text-muted)] group-hover:bg-[var(--gw-blue)]/10 group-hover:text-[var(--gw-blue)]'
                      }`}
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base md:text-lg text-gray-600 leading-relaxed font-sans px-6 md:px-10 pb-8 md:pb-10 pr-12 md:pr-24">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
