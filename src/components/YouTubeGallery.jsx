'use client';

import { useState } from 'react';

export default function YouTubeGallery({ videos, title = "Videos", subtitle = "Watch & Learn" }) {
  const [openVideoId, setOpenVideoId] = useState(null);

  if (!videos || videos.length === 0) return null;

  return (
    <>
      <section className="py-12 border-b border-gray-200 scroll-mt-24">
        {subtitle && (
            <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--gw-blue)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-blue)] inline-block" />
            {subtitle}
            </p>
        )}
        <h2 className="text-[28px] md:text-[34px] font-medium text-[var(--gw-primary)] leading-snug mb-6 font-serif">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {videos.map((vid) => (
            <button
              key={vid.videoId}
              onClick={() => setOpenVideoId(vid.videoId)}
              className="group text-left relative overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 rounded-2xl bg-white"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${vid.videoId}/maxresdefault.jpg`}
                  alt={vid.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => { e.target.src = `https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg`; }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-[#FF0000] group-hover:border-[#FF0000] transition-all duration-300 shadow-xl">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
                  <svg className="w-4 h-4 text-[#FF0000]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                    <path fill="white" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-white text-[10px] font-bold tracking-wide">YouTube</span>
                </div>
              </div>
              {/* Card body */}
              <div className="p-4 px-6">
                <h4 className="text-[15px] font-semibold text-[var(--gw-primary)] leading-snug mb-1 group-hover:text-[var(--gw-blue)] transition-colors">{vid.title}</h4>
                <p className="text-[12px] text-[var(--gw-text-muted)] leading-relaxed line-clamp-2">{vid.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── VIDEO LIGHTBOX ────────────────────────────── */}
      {openVideoId && (
        <div
          className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setOpenVideoId(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenVideoId(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${openVideoId}?autoplay=1`}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
