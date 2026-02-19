import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A365D] text-white pt-24 pb-12 font-sans relative overflow-hidden">
      {/* Subtle Top Gradient for depth */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 2xl:px-24 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Link href="/" className="block w-48 opacity-90 hover:opacity-100 transition-opacity">
                <img src="/icons/logo.svg" alt="GW Center for Integrative Medicine" className="w-full h-auto brightness-0 invert" />
            </Link>
            <p className="text-white/70 text-sm leading-7 max-w-sm font-light">
              Since 1998, we have been bridging the gap between modern science and wisdom traditions, providing personalized, holistic care in the heart of Washington DC.
            </p>
            
            {/* Social Icons - Refined */}
            <div className="flex gap-4 mt-2">
               <SocialIcon href="#">
                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
               </SocialIcon>
               <SocialIcon href="#">
                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
               </SocialIcon>
               <SocialIcon href="#">
                   <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
               </SocialIcon>
               <SocialIcon href="#">
                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
               </SocialIcon>
            </div>
          </div>
          
          {/* Navigation (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-8">Menu</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'Services', 'Our Team', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                    <Link href="#" className="text-[14px] font-medium text-white/80 hover:text-white transition-colors relative group inline-flex items-center">
                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 mr-0 group-hover:mr-2 border-t border-white/50"></span>
                        {item}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Span 3) */}
          <div className="lg:col-span-3">
             <h4 className="font-serif text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-8">Contact Us</h4>
             <div className="flex flex-col gap-6 text-[14px] text-white/80 font-light leading-relaxed">
                 <div>
                    <strong className="block text-white font-medium mb-1">Address</strong>
                    <p>908 New Hampshire Ave NW #200<br/>Washington, DC 20037</p>
                    <a href="#" className="inline-block mt-2 text-[11px] font-bold uppercase tracking-wider text-white/60 hover:text-white border-b border-white/20 hover:border-white transition-all pb-0.5">Get Directions</a>
                 </div>
                 <div>
                    <strong className="block text-white font-medium mb-1">Hours</strong>
                    <p>Monday – Friday<br/>9:00am – 5:00pm</p>
                 </div>
                 <div className="flex flex-col gap-1">
                    <a href="tel:2028335055" className="hover:text-white transition-colors">202-833-5055</a>
                    <a href="mailto:info@gwcim.com" className="hover:text-white transition-colors">info@gwcim.com</a>
                 </div>
             </div>
          </div>

          {/* Patient Center (Span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
             <h4 className="font-serif text-[11px] font-bold tracking-[0.2em] uppercase text-white/40 mb-4">Patient Center</h4>
             
             {/* CTA 1 */}
             <Link href="#" className="group relative block w-full">
                <div className="absolute inset-0 bg-white/5 border border-white/20 rounded-xl group-hover:bg-white group-hover:border-white transition-all duration-300"></div>
                <div className="relative px-6 py-5 flex items-center justify-between">
                    <span className="font-bold text-xs tracking-[0.2em] uppercase text-white group-hover:text-[#1A365D] transition-colors">New Patient Form</span>
                    <svg className="w-4 h-4 text-white group-hover:text-[#1A365D] transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
             </Link>

             {/* CTA 2 */}
             <Link href="#" className="group relative block w-full">
                <div className="absolute inset-0 bg-white border border-transparent rounded-xl group-hover:bg-white/90 transition-all duration-300"></div>
                <div className="relative px-6 py-5 flex items-center justify-between">
                    <span className="font-bold text-xs tracking-[0.2em] uppercase text-[#1A365D]">Patient Portal</span>
                     <svg className="w-4 h-4 text-[#1A365D] transition-all transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </div>
             </Link>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 font-medium tracking-widest uppercase gap-4">
            <p>© {new Date().getFullYear()} GW Center for Integrative Medicine.</p>
            <div className="flex gap-8">
                <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Careers</Link>
            </div>
        </div>

      </div>
    </footer>
  );
}

function SocialIcon({ href, children }) {
    return (
        <a href={href} className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">{children}</svg>
        </a>
    )
}
