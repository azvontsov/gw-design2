import Link from 'next/link';
import Image from 'next/image';

export default function AboutSnippet() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--gw-white)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image - Left */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
                {/* Placeholder Image - Replace with Doctor or Clinic Image */}
                <img 
                    src="/images/image1.png" 
                    alt="Integrative Medicine" 
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--gw-secondary-light)] -z-10 hidden lg:block"></div>
          </div>

          {/* Text - Right */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-xs font-bold tracking-[0.2em] text-[var(--gw-accent)] uppercase mb-4 block">
                Our Philosophy
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[var(--gw-primary)] mb-8 leading-tight">
                True healing, not just <br/> <span className="italic text-[var(--gw-text-muted)]">symptom management.</span>
            </h2>
            <p className="text-lg text-[var(--gw-text-muted)] mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                At GW Center for Integrative Medicine, we believe in treating the whole person. Our approach combines the best of modern medicine with evidence-based holistic therapies to address the root cause of your health concerns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <Link 
                    href="/about" 
                    className="text-[var(--gw-primary)] border-b border-[var(--gw-primary)] pb-1 hover:text-[var(--gw-accent)] hover:border-[var(--gw-accent)] transition-all font-medium tracking-wide uppercase text-sm"
                >
                    Learn About Our Approach
                </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
