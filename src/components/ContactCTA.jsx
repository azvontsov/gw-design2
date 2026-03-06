"use client";

import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[var(--gw-primary)] py-20 px-6 overflow-hidden relative">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[var(--sw-solitude)] opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[var(--sw-hazel)] opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Label */}
        <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--gw-gold)] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gw-gold)] inline-block" />
          Ready to Begin?
        </p>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-tight"
          style={{ fontFamily: "var(--font-gt-super)" }}
        >
          Start Your Healing Journey
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Our care coordinators are here to guide you — whether you're a new patient or returning for continued care.
        </p>

        {/* Primary Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-[var(--gw-gold)] text-[var(--gw-primary)] text-[13px] font-bold uppercase tracking-widest px-8 py-4 hover:brightness-110 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            New Patient Inquiry Form
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-[13px] font-bold uppercase tracking-widest px-8 py-4 hover:bg-white/10 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Sign Up For Our Newsletter
          </Link>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-xs mx-auto mb-12">
          <div className="flex-1 h-px bg-white/15" />
          <span className="text-white/30 text-[11px] uppercase tracking-widest font-bold">or</span>
          <div className="flex-1 h-px bg-white/15" />
        </div>

        {/* Contact info */}
        <p className="text-white/50 text-[11px] uppercase tracking-[0.25em] font-bold mb-5">Contact Us Now!</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:2028335055"
            className="group inline-flex items-center gap-3 text-white hover:text-[var(--gw-gold)] transition-colors duration-300"
          >
            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[var(--gw-gold)] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
              </svg>
            </span>
            <span className="text-xl font-semibold tracking-wide">202-833-5055</span>
          </a>

          <div className="w-px h-8 bg-white/15 hidden sm:block" />

          <a
            href="mailto:info@gwcim.com"
            className="group inline-flex items-center gap-3 text-white hover:text-[var(--gw-gold)] transition-colors duration-300"
          >
            <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[var(--gw-gold)] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <span className="text-xl font-semibold tracking-wide">info@gwcim.com</span>
          </a>
        </div>

      </div>
    </section>
  );
}
