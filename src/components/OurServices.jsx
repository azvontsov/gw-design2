import Link from "next/link";

export default function OurServices() {

  // Expand the data array with up to 6 items per category so the responsive grid can actually display 4 or 5 cards!
  const servicesData = {
    "Consultations": [
      { id: 1, icon: "/images/doodles/icon-01.svg", title: "Integrative Geriatrics" },
      { id: 2, icon: "/images/doodles/icon-02.svg", title: "Naturopathic Medicine" },
      { id: 3, icon: "/images/doodles/icon-03.svg", title: "Functional Medicine" },
      { id: 4, icon: "/images/doodles/icon-01.svg", title: "Integrative Mental Health" },
      { id: 5, icon: "/images/doodles/icon-02.svg", title: "Sarno/Mind-Body Method" },
      { id: 6, icon: "/images/doodles/icon-03.svg", title: "Pediatric and Adolescent Integrative Medicine" },
      { id: 7, icon: "/images/doodles/icon-01.svg", title: "Medical Cannabis" },
      { id: 8, icon: "/images/doodles/icon-02.svg", title: "Nutritional Counseling" }
    ],
    "Treatments": [
      { id: 11, icon: "/images/doodles/icon-05.svg", title: "Intravenouse Therapy" },
      { id: 12, icon: "/images/doodles/icon-06.svg", title: "Mistletoe Injection Therapy for Cancer" },
      { id: 13, icon: "/images/doodles/icon-02.svg", title: "Acupuncture and Chinese medicine" },
      { id: 14, icon: "/images/doodles/icon-08.svg", title: "Microneedling and Facial Acupuncture" },
      { id: 15, icon: "/images/doodles/icon-09.svg", title: "Reiki" },
      { id: 16, icon: "/images/doodles/icon-10.svg", title: "Somatic Experiencing" },
      { id: 17, icon: "/images/doodles/icon-03.svg", title: "KAP Assisted Psychotherapy" }
    ],
    "Programs": [
      { id: 21, icon: "/images/doodles/icon-01.svg", title: "Concierge Integrative Medicine Care" },
      { id: 22, icon: "/images/doodles/icon-03.svg", title: "Reversal of Cognitive Decline ReCODE (TM)" },
      { id: 23, icon: "/images/doodles/icon-07.svg", title: "Long Covid" },
      { id: 24, icon: "/images/doodles/icon-01.svg", title: "Shoemaker Protocol for CIRS and Mold Toxicity" },
      { id: 25, icon: "/images/doodles/icon-02.svg", title: "Mindfulness Based Stress Reduction MBSR" },
      { id: 26, icon: "/images/doodles/icon-03.svg", title: "Weight/Body Composition" },
      { id: 27, icon: "/images/doodles/icon-01.svg", title: "Executive Coaching" }
    ],
    "Ongoing Groups": [
      { id: 31, icon: "/images/doodles/icon-03.svg", title: "Long COVID Medical online Groups" },
      { id: 32, icon: "/images/doodles/icon-01.svg", title: "ReCODE Support Group" }
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
          <h2 className="text-[72px] leading-[72px] font-medium tracking-normal text-[var(--gw-primary)] mb-4"
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
            <div key={category} className="flex flex-col md:flex-row w-full mb-0">
              
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
              <div className={`w-full md:w-[70%] lg:w-[75%] ${rightBgColor} py-4 md:py-5 lg:py-6 px-6 sm:px-10 lg:px-12 xl:px-16 flex flex-col justify-center`}>
                
                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 lg:gap-y-8 gap-x-6 md:gap-x-10">
                  {servicesData[category].slice(0, 4).map((service, index) => (
                    <div 
                      key={service.id} 
                      className={`relative text-left group flex-col items-start bg-transparent ${
                        index < 3 ? "flex" : "flex md:hidden lg:flex"
                      }`}
                    >
                      {/* Vertical Separator */}
                      {index < 3 && (
                        <div className={`absolute top-2 bottom-2 -right-3 md:-right-[20px] w-px bg-[var(--gw-primary)]/15 hidden ${
                          index === 0 ? 'sm:block' :
                          index === 1 ? 'md:block' :
                          index === 2 ? 'sm:block md:hidden lg:block' : ''
                        }`} />
                      )}
                      {/* Icon */}
                      <div className="mb-2">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-8 h-8 md:w-10 md:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Title */}
                      <h4
                        className="text-base md:text-lg font-semibold text-[var(--gw-primary)] mb-1 leading-tight group-hover:text-[var(--gw-blue)] transition-colors duration-300"
                        style={{ fontFamily: "Ginto, Helvetica, sans-serif" }}
                      >
                        {service.title}
                      </h4>
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
