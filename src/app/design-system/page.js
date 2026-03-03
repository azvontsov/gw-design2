import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Design System & Styleguide | GW Center for Integrative Medicine",
  description: "A comprehensive overview of the typography, colors, and interactive elements used across the platform.",
};

const ColorSwatch = ({ name, hex, varName }) => (
  <div className="flex flex-col mb-4">
    <div 
      className="h-24 w-full rounded-2xl shadow-sm border border-black/5 mb-2" 
      style={{ backgroundColor: `var(${varName})` }}
    />
    <h3 className="font-bold text-sm tracking-widest uppercase text-[var(--gw-primary)]">{name}</h3>
    <p className="text-xs text-black/60 font-mono mt-1">{varName}</p>
    <p className="text-xs text-black/60 font-mono">{hex}</p>
  </div>
);

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="mb-16 border-b border-[var(--gw-primary)]/10 pb-8">
            <h1 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-[var(--gw-secondary)] opacity-90">
                Design System
            </h1>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--gw-primary)] leading-tight">
                Brand Identity & UI Kit
            </h2>
            <p className="mt-6 text-xl opacity-80 max-w-2xl leading-relaxed">
                This page serves as a centralized approval board for the platform&apos;s visual language, containing all our core colors, typography scaling, and interactive components.
            </p>
        </div>

        {/* --- COLORS --- */}
        <section className="mb-24">
            <h3 className="text-3xl font-serif mb-8 text-[var(--gw-primary)]">1. Color Palette</h3>
            
            <h4 className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] mb-6">Semantic Mapping</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <ColorSwatch name="Primary (Navy)" varName="--gw-primary" hex="#3E5166 (SW Indigo Batik)" />
                <ColorSwatch name="Secondary (Blue)" varName="--gw-secondary" hex="#2b6cb0" />
                <ColorSwatch name="Accent (Green)" varName="--gw-accent" hex="#abcc76" />
                <ColorSwatch name="Background (White)" varName="--gw-secondary-light" hex="#F7F7F1 (SW HR White)" />
                <ColorSwatch name="Text Main" varName="--gw-text-main" hex="#3E5166" />
                <ColorSwatch name="Text Muted" varName="--gw-text-muted" hex="#6C7F9A" />
                <ColorSwatch name="Dark Mode / Primary Dark" varName="--gw-primary-dark" hex="#2C3A49" />
                <ColorSwatch name="Alert" varName="--gw-alert" hex="#D9534F" />
            </div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] mb-6 mt-12">Supportive Functional Palette</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <ColorSwatch name="Deep Teal" varName="--gw-teal" hex="#2A9D8F" />
                <ColorSwatch name="Soft Gold" varName="--gw-gold" hex="#DABF62" />
                <ColorSwatch name="Terracotta" varName="--gw-terracotta" hex="#CD5C5C" />
                <ColorSwatch name="Sky Blue" varName="--gw-sky" hex="#7DD3FC" />
            </div>
            <h4 className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] mb-6 mt-12">GWCIM Core Brand Palette</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                <ColorSwatch name="White" varName="--sw-white" hex="#F7F7F1" />
                <ColorSwatch name="Hazel Gaze" varName="--sw-hazel" hex="#B9C1B3" />
                <ColorSwatch name="Privilege Green" varName="--sw-privilege" hex="#7A8775" />
                <ColorSwatch name="Solitude" varName="--sw-solitude" hex="#99A7B8" />
                <ColorSwatch name="Searching Blue" varName="--sw-searching" hex="#6C7F9A" />
                <ColorSwatch name="Indigo Batik" varName="--sw-indigo" hex="#3E5166" />
            </div>
        </section>

        {/* --- TYPOGRAPHY --- */}
        <section className="mb-24">
             <h3 className="text-3xl font-serif mb-8 text-[var(--gw-primary)]">2. Typography</h3>
             <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5">
                
                <div className="mb-12">
                    <p className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] mb-4 border-b border-black/5 pb-2">Display Font (Belleza)</p>
                    <h1 className="font-[family-name:var(--font-belleza)] text-5xl md:text-7xl lg:text-8xl leading-tight uppercase mb-2 text-[var(--gw-primary)]">
                        Headline Display
                    </h1>
                    <p className="text-xs font-mono opacity-50">font-[family-name:var(--font-belleza)] uppercase</p>
                </div>

                <div className="mb-12">
                    <p className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] mb-4 border-b border-black/5 pb-2">Primary Serif headings (GT Super)</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--gw-primary)] mb-4">
                        H1 Serif Main Title
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-serif text-[var(--gw-primary)] mb-4">
                        H2 Section Heading
                    </h2>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-[var(--gw-primary)] mb-2">
                        H3 Subsection Italic
                    </h3>
                    <p className="text-xs font-mono opacity-50 block mt-2">font-serif</p>
                </div>

                <div className="mb-12">
                    <p className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] mb-4 border-b border-black/5 pb-2">Body Sans-Serif (Ginto / System UI)</p>
                    <p className="text-lg md:text-xl md:leading-relaxed text-[var(--gw-text-main)] mb-6 max-w-4xl">
                        <strong>Large Body text:</strong> A holistic approach to healing, combining modern science with wisdom traditions. We focus on the whole person, addressing physical, emotional, and lifestyle factors to promote optimal health.
                    </p>
                    <p className="text-base text-[var(--gw-text-main)] mb-6 max-w-4xl leading-relaxed">
                        <strong>Standard Body text:</strong> Integrative primary care combines conventional medicine with evidence-based complementary therapies. We focus on the whole person, addressing physical, emotional, and lifestyle factors to promote optimal health and healing. Your healing journey is supported by a united team of specialists who actively collaborate on your personalized treatment plan.
                    </p>
                    <p className="text-sm text-[var(--gw-text-muted)] max-w-4xl leading-relaxed">
                        <strong>Muted Small Body text:</strong> This is utilized for captions, trust markers, small print, and secondary descriptions. We don&apos;t just mask symptoms. Our Functional Medicine team works with you to uncover and resolve the underlying causes.
                    </p>
                </div>

                <div>
                    <p className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] mb-4 border-b border-black/5 pb-2">Eyebrow / Overline</p>
                    <p className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--gw-secondary)]">
                        Trusted By / Affiliated With
                    </p>
                </div>
             </div>
        </section>

        {/* --- COMPONENTS & HOVERS --- */}
        <section className="mb-24">
             <h3 className="text-3xl font-serif mb-8 text-[var(--gw-primary)]">3. Interactive Elements</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 
                 {/* Buttons */}
                 <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-black/5 flex flex-col items-start gap-8">
                     <p className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] border-b border-black/5 pb-2 w-full">Buttons (Hover States)</p>
                     
                     <div className="w-full">
                        <p className="text-xs font-mono opacity-50 mb-2">Primary Solid</p>
                        <button className="bg-[var(--gw-accent)] px-8 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-primary)] hover:text-white text-[var(--gw-primary)] transition-all duration-300 shadow-lg uppercase text-sm w-full md:w-auto">
                            Primary Action
                        </button>
                     </div>

                     <div className="w-full">
                        <p className="text-xs font-mono opacity-50 mb-2">Secondary Outline</p>
                        <button className="border-2 border-[var(--gw-primary)] text-[var(--gw-primary)] px-8 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-primary)] hover:text-white transition-all duration-300 uppercase text-sm w-full md:w-auto">
                            Secondary Action
                        </button>
                     </div>

                     <div className="w-full">
                        <p className="text-xs font-mono opacity-50 mb-2">Clean / Ghost Button</p>
                        <button className="px-8 py-4 rounded-2xl font-bold tracking-widest text-[var(--gw-secondary)] hover:bg-[var(--gw-secondary)] hover:text-white transition-all duration-300 uppercase text-sm w-full md:w-auto hover:shadow-lg">
                            Read Article
                        </button>
                     </div>

                     <div className="w-full">
                        <p className="text-xs font-mono opacity-50 mb-2">Soft Tonal (Teal)</p>
                        <button className="bg-[var(--gw-teal)]/10 text-[var(--gw-teal)] border border-[var(--gw-teal)]/20 px-8 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-teal)] hover:text-white transition-all duration-300 uppercase text-sm w-full md:w-auto">
                            Appointment
                        </button>
                     </div>

                     <div className="w-full">
                        <p className="text-xs font-mono opacity-50 mb-2">Destructive / Alert (Terracotta)</p>
                        <button className="bg-[var(--gw-terracotta)]/10 text-[var(--gw-terracotta)] px-8 py-4 rounded-2xl font-bold tracking-widest hover:bg-[var(--gw-terracotta)] hover:text-white transition-all duration-300 uppercase text-sm w-full md:w-auto">
                            Cancel Visit
                        </button>
                     </div>

                     <div className="w-full bg-[var(--gw-primary)] p-6 rounded-2xl">
                        <p className="text-xs font-mono text-white/50 mb-4">Over Dark Backgrounds</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[var(--gw-accent)] px-8 py-4 rounded-2xl font-bold tracking-widest hover:bg-white text-[var(--gw-primary)] transition-all duration-300 shadow-lg uppercase text-sm">
                                Submit Form
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold tracking-widest hover:bg-white hover:text-[var(--gw-primary)] transition-all duration-300 uppercase text-sm">
                                Learn More
                            </button>
                        </div>
                     </div>
                 </div>

                 {/* Cards & Interactions */}
                 <div className="bg-[var(--gw-secondary-light)] p-8 md:p-12 rounded-3xl border border-black/5 flex flex-col gap-8">
                     <p className="text-sm font-bold tracking-widest uppercase text-[var(--gw-secondary)] border-b border-black/10 pb-2 w-full">Card Hover Effects</p>
                    
                    <div className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[var(--gw-accent)] cursor-pointer">
                        <span className="text-sm font-bold tracking-[0.2em] uppercase mb-4 block text-[var(--gw-secondary)]">Service Group</span>
                        <h3 className="text-2xl font-serif text-[var(--gw-primary)] mb-3 group-hover:text-[var(--gw-secondary)] transition-colors">Functional Medicine</h3>
                        <p className="text-base text-gray-600 leading-relaxed mb-6">A comprehensive, data-informed approach to diagnosing and treating complex conditions by addressing root causes—not just symptoms.</p>
                        <span className="inline-flex items-center text-sm font-bold text-[var(--gw-secondary)] group-hover:text-[var(--gw-primary)] transition-colors">
                            Explore Service
                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </div>

                 </div>

             </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
