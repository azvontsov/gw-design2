import React from 'react';

const googleReviews = [
  {
    text: "As a Family Nurse Practitioner with complex medical conditions in my family, Ashley & her team have been amazing in thinking outside the box with testing & with more natural treatments for our individual medical needs. It’s well worth paying outside of insurance to get to a diagnosis & treatment that work.",
    author: "Shannon Hewitt",
    role: "Local Guide",
    platform: "Google Review",
    rating: 5
  },
  {
    text: "The long covid clinic has been the most helpful medical treatment I have received after seeing 15+ other doctors and specialists. I wish I'd started with the GWCIM long covid clinic instead of spending a year trying to convince other doctors that long covid is real and was ruling my life. Now with help from dr drapeau I'm seeing substantial positive change for the first time in years.",
    author: "Becca Rose",
    role: "Patient",
    platform: "Google Review",
    rating: 5
  },
  {
    text: "After 6 years of CRPS (aka The Suicide Disease), I was losing all hope when my POTS doctor told me about GWCIM because no one would manage my pain. And we couldn't manage POTS without controlling pain. Ashley Drapeau is a life saver!! She recommended a battery of tests that no one else had done. Those tests identified that I had no good bacteria left in my gut due to repeated rounds of antibiotics for an infected tooth while I waited months to get in to see a dentist.\n\nThat one discovery unlocked answers to other untreated issues that I've had. Since I started her regimen, I am sleeping well, my brain fog is 99% better and so is incontinence, both of which I've suffered with for years.\n\nGWCIM offers many options, and they are very thorough. I just completed my first infusion treatment this week, and am seeing more improvements. I couldn't be happier to have found GWCIM. I recommend them 1000%!!",
    author: "Christina Drake",
    role: "Local Guide",
    platform: "Google Review",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--gw-primary)] mb-6">
            What our patients say
          </h2>
          <p className="text-[var(--gw-text-muted)] text-lg max-w-2xl mx-auto">
            Real experiences from our community of patients who have found healing and balance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {googleReviews.map((review, index) => (
            <a 
              key={index}
              href="https://www.google.com/search?q=gwcim+google+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col h-full p-10 bg-white rounded-sm shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 border border-gray-50 group cursor-pointer"
            >
              
              {/* Decorative Quote Mark */}
              <div className="absolute top-8 right-8 text-6xl font-serif text-[var(--gw-primary)] opacity-5 pointer-events-none leading-none group-hover:opacity-10 transition-opacity">
                &rdquo;
              </div>

              {/* Stars */}
              <div className="flex text-[#C5A065] gap-1 mb-6">
                 {[...Array(review.rating || 5)].map((_, i) => (
                   <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 ))}
              </div>

              {/* Review Text */}
              <p className="whitespace-pre-line text-lg md:text-[19px] text-[var(--gw-primary)] font-serif italic leading-relaxed mb-8 flex-grow line-clamp-[8]">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="pt-6 border-t border-gray-100 flex justify-between items-end shrink-0">
                <div>
                  <p className="font-bold text-[var(--gw-primary)] tracking-wide uppercase text-sm group-hover:text-[var(--gw-blue)] transition-colors">{review.author}</p>
                  <p className="text-xs text-[var(--gw-text-muted)] mt-1 font-medium tracking-wider uppercase opacity-70 flex items-center gap-1">
                    {review.role} 
                    <span className="opacity-50 mx-1">•</span> 
                    <span className="group-hover:underline underline-offset-2">Read Full Review</span>
                  </p>
                </div>
                {/* Optional Google Logo or indication if it comes from Google */}
                {review.platform === "Google Review" && (
                  <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
