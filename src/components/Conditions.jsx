import Link from "next/link";

export default function Conditions() {
  const conditions = [
    { id: 1, title: "Chronic Illness", link: "#" },
    { id: 2, title: "Pain and Fatigue", link: "#" },
    { id: 3, title: "Mental Health", link: "#" },
    { id: 4, title: "CIRS and Mold Toxicity Illness", link: "#" },
    { id: 5, title: "Healthy Aging", link: "#" },
    { id: 6, title: "Postural Orthostatic Tachycardia Syndrome (POTS)", link: "#" },
    { id: 7, title: "Cancer", link: "#" },
    { id: 8, title: "EDS and HSD", link: "#" },
  ];

  return (
    <section className="py-12 bg-[var(--gw-secondary-light)] relative overflow-hidden">
      {/* Subtle decorative background elements */}
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">  
        {/* Section Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-[72px] leading-[72px] font-medium tracking-normal text-[var(--gw-primary)]  mb-4">
            Conditions We Treat
          </h2>
        </div>

        {/* Puzzle-like Button Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {conditions.map((condition) => (
            <Link
              key={condition.id}
              href={condition.link}
              className="group flex-grow md:flex-grow-0 flex items-center justify-center hover:bg-[var(--gw-blue)] text-white px-6 py-3 rounded-2xl font-bold text-sm tracking-wide bg-[var(--sw-hazel)] transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-center h-[48px]"
            >
              <span>{condition.title}</span>
            </Link>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center">
          <Link
            href="#services"
            className="inline-flex items-center pt-8 gap-2 text-lg font-bold text-[var(--gw-secondary)] hover:text-[var(--gw-primary)] transition-colors group"
          >
            See all conditions
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
          </Link>
           </div>
      </div>
    </section>
  );
}
