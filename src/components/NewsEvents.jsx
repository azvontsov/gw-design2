"use client";

import { useState, useRef, useEffect } from 'react';

export default function NewsEvents() {
  const originalItems = [
    {
      id: 1,
      category: "Mindfulness",
      title: "A Mindfulness Experience",
      image: "/images/feeling-better.png",
      link: "#",
      description: "Discover the power of mindfulness in your daily life with our comprehensive guide to staying present."
    },
    {
      id: 2,
      category: "Healing Foods",
      title: "Emergency Chicken Soup: Healing in a Bowl",
      image: "/images/live-well.png",
      link: "#",
      description: "Learn about the restorative properties of this classic comfort food and how it boosts immunity."
    },
    {
      id: 3,
      category: "Long COVID",
      title: "What Can You Do About Long COVID?",
      image: "/images/mindset.png",
      link: "#",
      description: "Understanding symptoms and integrative treatment strategies for long-term recovery."
    },
    {
      id: 4,
      category: "NUTRITION",
      title: "Gut Health and its impact on Immunity",
      image: "/images/image3.png",
      link: "#",
      description: "Exploring the critical link between your gut microbiome and your overall immune system health."
    },
    {
      id: 5,
      category: "WELLNESS",
      title: "Modern Acupuncture: Bridging Tradition and Science",
      image: "/images/image4.png",
      link: "#",
      description: "How ancient techniques are being validated by modern medical science for pain relief and more."
    }
  ];

  // Logic to separate Featured vs Blog
  // First 3 items as Featured
  const featuredItems = originalItems.slice(0, 3);
  // All items for the carousel (or a subset if preferred)
  const carouselItems = originalItems;

  // Carousel Logic for "Second Line"
  // Triple for infinite smooth scroll + manual jumps
  const displayItems = [...carouselItems, ...carouselItems, ...carouselItems];
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    
    const card = container.firstElementChild;
    const itemWidth = card ? card.offsetWidth : container.offsetWidth / 3;
    const scrollAmount = direction === 'next' ? itemWidth : -itemWidth;
    const targetScroll = container.scrollLeft + scrollAmount;

    // Custom smooth scroll to avoid conflict with auto-scroll loop
    const start = container.scrollLeft;
    const distance = targetScroll - start;
    const duration = 600;
    let startTime = null;

    const smoothScrollStep = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      
      container.scrollLeft = start + (distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(smoothScrollStep);
      }
    };

    requestAnimationFrame(smoothScrollStep);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrame;
    const scrollSpeed = 0.5; // Slower, smooth rotation

    const animate = () => {
      if (!isPaused) {
        container.scrollLeft += scrollSpeed;
        
        // Infinite loop logic
        const totalWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= totalWidth * 2) {
          container.scrollLeft -= totalWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += totalWidth;
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-[52px] md:text-[72px] leading-[1.1] md:leading-[72px] font-medium tracking-normal text-[var(--gw-primary)] mb-4">
            News & Events
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stay up to date with the latest updates, upcoming events, and health tips from our team:
          </p>

           {/* CTA Link */}
           <a
            href="/news"
            className="inline-flex items-center pt-8 gap-2 text-lg font-bold text-[var(--gw-secondary)] hover:text-[var(--gw-primary)] transition-colors group"
          >
            See all news & events
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* --- LINE 1: FEATURED POSTS (Stationary, Large) --- */}
        <div className="mb-20">
           <h3 className="text-2xl font-bold tracking-[0.2em] uppercase text-[var(--gw-secondary)] mb-8 px-2">Featured Stories</h3>
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {featuredItems.map((item) => (
                <div key={item.id} className="group cursor-pointer flex flex-col">
                    {/* Image Container - Large & Specific */}
                    <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-3xl shadow-lg">
                        <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Overlay Tag */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[var(--gw-primary)] shadow-sm">
                            {item.category}
                        </div>
                    </div>
                    
                    {/* Content */}
                    <div className="px-2">
                        <h3 className="text-3xl lg:text-4xl font-serif text-[var(--gw-primary)] mb-4 leading-tight group-hover:text-[var(--gw-secondary)] transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-lg text-[var(--gw-text-muted)] leading-relaxed mb-4 line-clamp-3">
                            {item.description}
                        </p>
                         <span className="inline-flex items-center text-[var(--gw-accent)] font-bold tracking-wider uppercase text-sm border-b-2 border-transparent group-hover:border-[var(--gw-accent)] transition-all">
                            Read Full Story
                        </span>
                    </div>
                </div>
              ))}
           </div>
        </div>
      </div>

       {/* --- LINE 2: BLOG / ALL EVENTS (Carousel, Smaller) --- */}
        <div className="relative border-t border-gray-100 pt-16 w-full">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24 mb-10 flex items-end justify-between">
                 <h3 className="text-2xl font-bold tracking-[0.2em] uppercase text-[var(--gw-secondary)]">Latest from the Blog</h3>
                 
                 {/* Navigation Controls for Carousel */}
                 <div className="flex gap-4">
                    <button 
                      onClick={() => scroll('prev')}
                      className="w-12 h-12 rounded-2xl border border-[var(--gw-primary)] flex items-center justify-center text-[var(--gw-primary)] hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300 group z-20"
                      aria-label="Previous slide"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-active:-translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button 
                      onClick={() => scroll('next')}
                      className="w-12 h-12 rounded-2xl border border-[var(--gw-primary)] flex items-center justify-center text-[var(--gw-primary)] hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300 group z-20"
                      aria-label="Next slide"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-active:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
            </div>

            {/* Carousel Container */}
            <div 
                ref={scrollContainerRef}
                className="flex overflow-hidden relative w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {displayItems.map((item, idx) => (
                <div 
                    key={`${item.id}-${idx}`} 
                    className="w-[85vw] md:w-[45vw] lg:w-[25vw] flex-shrink-0 px-4"
                >
                    <div className="group cursor-pointer flex flex-col h-full bg-transparent">
                        <div className="relative aspect-[4/3] w-full mb-4 overflow-hidden rounded-2xl bg-gray-100 shadow-md">
                            <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />
                        </div>
                        
                        <div className="flex flex-col flex-1">
                            <p className="text-[var(--gw-secondary)] text-[10px] font-bold uppercase tracking-wider mb-2">
                                {item.category}
                            </p>
                            <h3 className="text-xl font-serif text-[var(--gw-primary)] mb-3 leading-snug group-hover:text-[var(--gw-secondary)] transition-colors line-clamp-2">
                                {item.title}
                            </h3>
                             {/* Simple Text Link */}
                            <span className="mt-auto text-sm text-[var(--gw-text-muted)] font-medium group-hover:text-[var(--gw-primary)] transition-colors block">
                                Read More &rarr;
                            </span>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>

    </section>
  );
}
