import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section bg-[#1A365D] text-[var(--gw-light-blue)] pt-24 pb-12 font-sans overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 mb-20">
          
          {/* Brand Section - Spans 4 columns */}
          <div className="lg:col-span-4 flex flex-col gap-8 pr-4">
            <Link href="/" className="inline-block">
              <img src="/icons/logo.svg" alt="GW Center for Integrative Medicine" className="h-[48px] w-auto brightness-0 invert" />
            </Link>
            <p className="text-[16px] leading-relaxed text-[var(--gw-light-blue)] font-sans max-w-[360px]">
              Empowering your health journey through integrative medicine. We combine conventional and alternative therapies for holistic wellness.
            </p>
            {/* Social Icons */}
            <div className="flex gap-5 items-center mt-2">
               <a href="#" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                         <a href="#" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        </a>
            </div>
               
          </div>

          {/* Quick Links Column - Spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h3 className="text-[18px] font-bold font-sans tracking-tight text-[var(--gw-light-blue)]">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Services', 'Our Team', 'New Patients', 'Blog', 'Careers', 'Podcasts & Audio'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-[15px] text-[var(--gw-light-blue)] hover:opacity-100 opacity-80 transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column - Spans 3 columns */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-[18px] font-bold font-sans tracking-tight text-[var(--gw-light-blue)]">Contact Us</h3>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-[var(--gw-light-blue)] opacity-50 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[15px] leading-tight text-[var(--gw-light-blue)]">GW Center for Integrative Medicine</p>
                  <p className="text-[15px] text-[var(--gw-light-blue)] leading-relaxed font-sans opacity-80">908 New Hampshire Ave NW #200<br/>Washington, DC 20037</p>
                  <a href="#" className="text-[14px] font-bold text-[var(--gw-light-blue)] hover:opacity-70 transition-opacity mt-1 inline-flex items-center gap-1">
                    Get Directions 
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--gw-light-blue)] opacity-50 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.143-7.143c-.155-.44.01-.927.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg>
                <a href="tel:2028335055" className="text-[15px] font-bold text-[var(--gw-light-blue)] hover:opacity-80 transition-colors">202-833-5055</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--gw-light-blue)] opacity-50 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg>
                <a href="mailto:info@gwcim.com" className="text-[15px] font-bold text-[var(--gw-light-blue)] hover:opacity-80 transition-colors">info@gwcim.com</a>
              </div>
            </div>
          </div>

          {/* CTA Column - Spans 3 columns */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-[18px] font-bold font-sans tracking-tight text-[var(--gw-light-blue)]">Schedule an Appointment</h3>
            <p className="text-[15px] text-[var(--gw-light-blue)] leading-relaxed font-sans opacity-80">
              Ready to take charge of your health? Contact us today to schedule a consultation.
            </p>
            <Link 
              href="#" 
              className="bg-[var(--gw-light-blue)] text-[#1A365D] font-bold text-[14px] text-center py-4 px-8 hover:bg-white transition-all uppercase tracking-widest"
            >
              Book Now
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[var(--gw-light-blue)]/10 flex flex-col md:flex-row justify-center items-center">
          <p className="text-[14px] text-[var(--gw-light-blue)] opacity-40 font-sans tracking-wide">
            © {new Date().getFullYear()} GW Center for Integrative Medicine. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
