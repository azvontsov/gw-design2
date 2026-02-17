import React from 'react';

const reviews = [
  {
    text: "The comprehensive care I received at GW Center for Integrative Medicine has been life-changing. The team truly listens to your concerns and addresses the root cause of health issues.",
    author: "Sarah M.",
    role: "Patient"
  },
  {
    text: "Dr. Kogan and his staff are incredible. They combine the best of modern medicine with holistic approaches. I finally feel heard and understood by my healthcare providers.",
    author: "James T.",
    role: "Patient"
  },
  {
    text: "A refreshing approach to healthcare. The environment is healing, and the practitioners are knowledgeable and compassionate. Highly recommend for anyone seeking true wellness.",
    author: "Emily R.",
    role: "Patient"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24">
        <h2 className="text-5xl md:text-6xl font-serif text-[var(--gw-primary)] mb-16 text-center leading-tight">
          What our patients say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col gap-6 p-10 bg-[var(--gw-cream)] border border-gray-100 hover:border-gray-200 transition-colors">
              <div className="flex text-[#D4AF37] gap-1">
                 {[...Array(5)].map((_, i) => (
                   <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 ))}
              </div>
              <p className="text-[17px] text-[var(--gw-slate-blue)] font-serif italic leading-[1.8]">
                "{review.text}"
              </p>
              <div className="mt-auto pt-6 border-t border-gray-200/60">
                <p className="font-bold text-[var(--gw-primary)]">{review.author}</p>
                <p className="text-sm text-gray-500 mt-0.5">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
