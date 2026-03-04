import Link from "next/link";

export default function OurServices() {

  // Expand the data array with up to 6 items per category so the responsive grid can actually display 4 or 5 cards!
  const servicesData = {
    "Consultations": [
      { id: 1, icon: "/images/doodles/icon-1.png", title: "Integrative Geriatrics" },
      { id: 2, icon: "/images/doodles/icon-2.png", title: "Naturopathic Medicine" },
      { id: 3, icon: "/images/doodles/icon-3.png", title: "Functional Medicine" },
      { id: 4, icon: "/images/doodles/icon-4.png", title: "Integrative Mental Health" },
      { id: 5, icon: "/images/doodles/icon-5.png", title: "Sarno/Mind-Body Method" },
      { id: 6, icon: "/images/doodles/icon-6.png", title: "Pediatric and Adolescent Integrative Medicine" },
      { id: 7, icon: "/images/doodles/icon-7.png", title: "Medical Cannabis" },
      { id: 8, icon: "/images/doodles/icon-8.png", title: "Nutritional Counseling" }
    ],
    "Treatments": [
      { id: 11, icon: "/images/doodles/icon-11.png", title: "Intravenouse Therapy" },
      { id: 12, icon: "/images/doodles/icon-12.png", title: "Mistletoe Injection Therapy for Cancer" },
      { id: 13, icon: "/images/doodles/icon-13.png", title: "Acupuncture and Chinese medicine" },
      { id: 14, icon: "/images/doodles/icon-14.png", title: "Microneedling and Facial Acupuncture" },
      { id: 15, icon: "/images/doodles/icon-15.png", title: "Reiki" },
      { id: 16, icon: "/images/doodles/icon-16.png", title: "Somatic Experiencing" },
      { id: 17, icon: "/images/doodles/icon-17.png", title: "KAP Assisted Psychotherapy" }
    ],
    "Programs": [
      { id: 21, icon: "/images/doodles/icon-21.png", title: "Concierge Integrative Medicine Care" },
      { id: 22, icon: "/images/doodles/icon-22.png", title: "Reversal of Cognitive Decline ReCODE (TM)" },
      { id: 23, icon: "/images/doodles/icon-23.png", title: "Long Covid" },
      { id: 24, icon: "/images/doodles/icon-24.png", title: "Shoemaker Protocol for CIRS and Mold Toxicity" },
      { id: 25, icon: "/images/doodles/icon-25.png", title: "Mindfulness Based Stress Reduction MBSR" },
      { id: 26, icon: "/images/doodles/icon-26.png", title: "Weight/Body Composition" },
      { id: 27, icon: "/images/doodles/icon-27.png", title: "Executive Coaching" }
    ],
    "Ongoing Groups": [
      { id: 31, icon: "/images/doodles/icon-31.png", title: "Long COVID Medical online Groups" },
      { id: 32, icon: "/images/doodles/icon-32.png", title: "ReCODE Support Group" }
    ]
  };

  const categories = Object.keys(servicesData);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Consultations": return "bg-[var(--sw-hazel)]/50"; // #B9C1B3
      case "Treatments": return "bg-[var(--sw-privilege)]/50"; // #7A8775
      case "Programs": return "bg-[var(--sw-solitude)]/90"; // #99A7B8
      case "Ongoing Groups": return "bg-[var(--sw-searching)]/80"; // #6C7F9A
      default: return "bg-gray-200";
    }
  };

  return (
    <section className="pt-12 bg-white">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[72px] leading-[72px] font-medium tracking-normal text-[var(--gw-primary)] mb-4 uppercase"
          style={{ 
            fontFamily: 'var(--font-gt-super)', 
            fontWeight: 700,
            lineHeight: '1.2'
          }}
          >
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We provide holistic medicine in DC via over 25 services:
          </p>
        </div>
      </div>

      {/* Layout: Rows of Categories (Edge to Edge) */}
      <div className="flex flex-col w-full">
        {categories.map((category) => {
          
          // Using exact hex codes because Tailwind does not compile opacity modifiers like `/20` 
          // on dynamic CSS variables unless they are defined explicitly as RGB values in globals.css!
          let rightBgColor = "bg-transparent";
          if (category === "Consultations") rightBgColor = "bg-[#B9C1B3]/20";
          if (category === "Treatments") rightBgColor = "bg-[#7A8775]/20";
          if (category === "Programs") rightBgColor = "bg-[#99A7B8]/20";
          if (category === "Ongoing Groups") rightBgColor = "bg-[#6C7F9A]/20";

          return (
            <div key={category} className="flex flex-col md:flex-row w-full mb-0 overflow-hidden relative">
              
              {/* Category Left Block */}
              <div className={`w-full md:w-[30%] lg:w-[30%] flex flex-col items-center md:items-end justify-center px-6 py-4 md:py-5 lg:py-6 md:pl-4 md:pr-8 lg:pl-6 lg:pr-10 xl:pr-16 transition-colors duration-300 ${getCategoryColor(category)}`}>
                <h3 
                  className="text-4xl md:text-[24px] lg:text-[28px] xl:text-4xl 2xl:text-4xl font-medium text-[var(--gw-primary)] text-center md:text-right tracking-wide"
                  style={{ fontFamily: 'var(--font-gt-super)' }}
                >
                  {category}
                </h3>
                  
                {/* See More Button Moved Here */}
                <a
                  href="#"
                  className="mt-4 lg:mt-6 inline-flex items-center text-[var(--gw-primary)] font-bold text-sm hover:text-[var(--gw-blue)] transition-colors duration-300 group"
                >
                  See more 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              </div>

              {/* Services Grid Right Block */}
              <div className={`w-full md:w-[70%] lg:w-[75%] ${rightBgColor} pt-6 md:pt-8 lg:pt-10 pb-0 px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col justify-end`}>
                
                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 lg:gap-y-10 gap-x-4 sm:gap-x-8 md:gap-x-10">
                  {servicesData[category].map((service, index) => (
                    <div 
                      key={service.id} 
                      className="relative pt-4 flex-col items-stretch group h-full flex min-w-0"
                      style={{ clipPath: "inset(-60px -60px 0 -60px)" }}
                    >
                      {/* The Manila Folder */}
                      <div className="relative w-full flex-1 hover:bg-[#E7DBB2] border-t border-l border-r border-[var(--gw-primary)] rounded-t-[8px] p-4 lg:p-6 pb-4 lg:pb-8 transform translate-y-6 group-hover:translate-y-1 shadow-[0_-2px_10px_rgba(0,0,0,0.02)] group-hover:shadow-[0_-8px_20px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col cursor-pointer z-10 min-w-0 bg-[#fdfdfc]/60 hover:bg-[#E7DBB2]/50 backdrop-blur-sm">
                        
                        {/* Folder Tab */}
                        <div className="absolute -top-[13px] left-4 w-[60px] h-[14px] border-t border-l border-r border-[var(--gw-primary)] rounded-t-[6px] z-20 bg-[#fdfdfc]/60 group-hover:bg-[#E7DBB2]/50 backdrop-blur-sm transition-colors duration-500" />

                        {/* Title */}
                        <h4
                          className="text-[14px] md:text-[16px] font-semibold text-[var(--gw-primary)] leading-snug group-hover:text-[var(--gw-blue)] transition-colors duration-300 relative z-30 pb-6 break-words"
                          style={{ fontFamily: "Ginto, Helvetica, sans-serif" }}
                        >
                          {service.title}
                        </h4>
                      </div>

                      {/* Slot Opening Line */}
                      {/* <div className="absolute bottom-0 left-[-2px] right-[-2px] h-[3px] bg-[var(--gw-primary)]/10 rounded-full z-20 shadow-[0_1px_0_rgba(255,255,255,0.4)] pointer-events-none" /> */}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
