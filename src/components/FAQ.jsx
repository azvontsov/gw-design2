"use client";

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is integrative primary care?",
      answer: "Integrative primary care combines conventional medicine with evidence-based complementary therapies. We focus on the whole person, addressing physical, emotional, and lifestyle factors to promote optimal health and healing."
    },
    {
      question: "Do you take my insurance?",
      answer: "We do not accept insurance and are a self-pay facility. However, many of our patients have out-of-network benefits and are able to get reimbursed for our services. We provide a detailed invoice (superbill) with all the necessary codes for you to submit to your insurance company."
    },
    {
      question: "How can I contact my primary care provider?",
      answer: "You can communicate with your provider through our secure patient portal, by calling our office during business hours, or during your scheduled appointments."
    },
    {
      question: "Can I get lab work done at the center?",
      answer: "Yes, we offer on-site laboratory services for many common tests, providing a convenient experience for our patients during their visits."
    },
    {
      question: "Which appointment type should I use?",
      answer: "We offer several types of visits including New Patient Consultations, Follow-up visits, and Acute Care. If you're unsure, our patient coordinators can help determine the best appointment for your needs."
    },
    {
      question: "Can you refill my prescriptions? Or help me get a new prescription?",
      answer: "Refills can typically be requested through the patient portal or by having your pharmacy send a request to us. New prescriptions require a consultation to ensure the most appropriate treatment plan."
    },
    {
      question: "How do I choose a provider?",
      answer: "We recommend reviewing our team's bios to see their areas of expertise and approach to care. You can also call us to discuss which provider might be the best match for your specific health goals."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-serif text-[var(--gw-primary)] mb-12 leading-tight">
            Frequently asked <br /> questions
          </h2>

          <div className="divide-y divide-gray-100 border-t border-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-8 flex items-center justify-between text-left hover:text-[var(--gw-secondary)] transition-colors"
                >
                  <span className="text-xl md:text-[22px] font-serif text-[var(--gw-primary)] pr-8 group-hover:text-[var(--gw-secondary)] transition-colors leading-tight">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 relative">
                    {/* Horizontal line (always visible) */}
                    <span className={`absolute top-1/2 left-0 w-full h-[2px] bg-current transition-transform duration-300`}></span>
                    {/* Vertical line (visible only when closed) */}
                    <span className={`absolute top-0 left-1/2 w-[2px] h-full bg-current transition-all duration-300 ${openIndex === index ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}></span>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-8' : 'max-h-0'
                  }`}
                >
                  <p className="text-lg text-gray-600 leading-relaxed font-sans">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
