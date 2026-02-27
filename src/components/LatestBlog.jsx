"use client";

import { useState, useRef, useEffect } from 'react';

export default function LatestBlog() {
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

  // Touch/Swipe Logic
  const touchStart = useRef(null);
  const touchScrollStart = useRef(null);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStart.current = e.touches[0].clientX;
    if (scrollContainerRef.current) {
        touchScrollStart.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e) => {
    if (!touchStart.current || !scrollContainerRef.current) return;
    const touchCurrent = e.touches[0].clientX;
    const deltaX = touchStart.current - touchCurrent;
    scrollContainerRef.current.scrollLeft = touchScrollStart.current + deltaX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    touchStart.current = null;
    touchScrollStart.current = null;
  };

  return (
    <section className="bg-white overflow-hidden pb-16 lg:pb-24">
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
                className="flex overflow-hidden relative w-full cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
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
