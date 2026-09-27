import { useState } from 'react';
import { 
  Sparkles, 
  Activity, 
  Smile, 
  ShieldCheck, 
  Heart, 
  Sun, 
  Camera, 
  HeartPulse, 
  CheckCircle2, 
  ArrowRight,
  Sparkle
} from 'lucide-react';

const treatmentsData = [
  {
    icon: Activity,
    title: 'Painless Root Canal',
    hindi: 'रूट कैनाल RCT',
    desc: 'Single-visit rotary RCT with profound anaesthesia — save your natural tooth without fear or pain.',
    tags: ['Single Visit', 'Rotary Endo'],
  },
  {
    icon: Sparkles,
    title: 'Braces & Aligners',
    hindi: 'दांत सीधे करना',
    desc: 'Metal, ceramic & clear aligners that straighten teeth beautifully at any age — teens to adults.',
    tags: ['Metal', 'Ceramic', 'Clear'],
  },
  {
    icon: ShieldCheck,
    title: 'Crowns & Bridges',
    hindi: 'कैप व ब्रिज',
    desc: 'Strong, natural-looking zirconia & ceramic crowns that restore broken teeth to full strength.',
    tags: ['Zirconia', 'Ceramic'],
  },
  {
    icon: Smile,
    title: 'Dental Implants',
    hindi: 'इम्प्लांट',
    desc: 'Permanent, fixed replacements for missing teeth — eat, speak and smile with full confidence.',
    tags: ['Permanent', 'Natural Feel'],
  },
  {
    icon: Heart,
    title: 'Kids Dentistry',
    hindi: 'बच्चों के दांत',
    desc: 'Friendly first visits, painless fillings, fluoride shields & habit correction in a fun environment.',
    tags: ['Gentle Care', 'No Tears'],
  },
  {
    icon: Sun,
    title: 'Whitening & Cleaning',
    hindi: 'सफाई व चमक',
    desc: 'Professional ultrasonic scaling and laser teeth whitening for a sparkling, clean festive smile.',
    tags: ['Instant Glow', 'Safe'],
  },
  {
    icon: CheckCircle2,
    title: 'Gum Care & Dentures',
    hindi: 'मसूड़े व बत्तीसी',
    desc: 'Pyorrhea care, bleeding gums therapy, plus custom full & partial dentures crafted for comfort.',
    tags: ['Gum Health', 'BPS Denture'],
  },
  {
    icon: Camera,
    title: 'Digital X-Ray & Checkup',
    hindi: 'डिजिटल एक्स-रे',
    desc: 'Ultra-low radiation high-resolution digital RVG imaging for instant on-chair diagnosis.',
    tags: ['HD Sensor', 'Instant'],
  },
  {
    icon: HeartPulse,
    title: 'General Medical Care',
    hindi: 'सामान्य चिकित्सा',
    desc: 'General health checkups, blood pressure, sugar guidance & primary care by Dr. Amisha Patel (M.B.B.S.).',
    tags: ['Family Health', 'M.B.B.S.'],
  },
];

export default function Treatments() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = treatmentsData[activeIdx];

  return (
    <section id="treatments" className="relative overflow-hidden bg-cream-100 py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mandala-light pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-center mx-auto mb-14 md:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon-700/25 bg-maroon-700/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-maroon-800">
            <Sparkles size={13} className="text-gold-600" />
            <span>Treatments</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-maroon-950">
            Complete Care For <span className="gold-text-static">Every Tooth</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-maroon-950/70 leading-relaxed max-w-2xl mx-auto">
            From a child's first checkup to full smile rehabilitation — tap any treatment to see how we care for you.
          </p>
        </div>

        {/* 2-Column Interactive Tab View */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12 items-start">
          
          {/* Left: Tab list */}
          <div className="flex max-h-[560px] flex-col gap-2.5 overflow-y-auto pr-1 lg:max-h-none lg:overflow-visible">
            {treatmentsData.map((t, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={t.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-gold-500/70 bg-gradient-to-r from-maroon-800 to-maroon-700 text-cream-50 shadow-[0_16px_40px_-14px_rgba(74,16,27,0.6)]'
                      : 'border-maroon-700/15 bg-cream-50/70 text-maroon-900 hover:-translate-y-0.5 hover:border-gold-500/50 hover:shadow-lg'
                  }`}
                >
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition ${
                      isActive
                        ? 'bg-gold-400 text-maroon-950'
                        : 'bg-maroon-700/10 text-maroon-700 group-hover:bg-gold-400/30'
                    }`}
                  >
                    <t.icon size={22} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display text-base sm:text-lg font-bold">
                      {t.title}
                    </span>
                    <span
                      className={`block font-hindi text-xs sm:text-sm ${
                        isActive ? 'text-gold-200/90' : 'text-maroon-950/55'
                      }`}
                    >
                      {t.hindi}
                    </span>
                  </span>

                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-base transition-transform ${
                      isActive ? 'rotate-90 bg-white/15' : 'bg-maroon-700/5'
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Detail Card (Sticky) */}
          <div className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[2rem] border-2 border-gold-500/50 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-950 p-8 shadow-[0_36px_90px_-24px_rgba(74,16,27,0.65)] md:p-10 text-cream-50">
              {/* Card Ambient Patterns */}
              <div className="absolute inset-0 bg-mandala opacity-40 pointer-events-none" />
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />

              <div className="relative space-y-6">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-gold-300">
                    TREATMENT {String(activeIdx + 1).padStart(2, '0')} / {String(treatmentsData.length).padStart(2, '0')}
                  </span>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-400 text-maroon-950 shadow-lg">
                    <active.icon size={24} />
                  </div>
                </div>

                {/* Title & Hindi */}
                <div className="space-y-1">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
                    {active.title}
                  </h3>
                  <div className="font-hindi text-base sm:text-lg text-gold-300 font-medium">
                    {active.hindi}
                  </div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg leading-relaxed text-cream-200/90">
                  {active.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {active.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-full border border-gold-400/30 bg-white/10 px-3.5 py-1 text-xs font-semibold text-gold-200 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 font-bold text-xs sm:text-sm text-maroon-950 shadow-lg hover:bg-gold-300 transition"
                  >
                    <span>Book This Treatment</span>
                    <ArrowRight size={15} />
                  </a>

                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 bg-white/5 px-5 py-3 font-bold text-xs sm:text-sm text-cream-50 hover:bg-white/10 transition"
                  >
                    <span>See Our Clinic</span>
                  </a>
                </div>

                {/* Dots Progress Indicator */}
                <div className="pt-4 flex items-center gap-1.5">
                  {treatmentsData.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIdx(dotIdx)}
                      className={`h-1.5 rounded-full transition-all ${
                        dotIdx === activeIdx
                          ? 'w-8 bg-gold-400'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to treatment ${dotIdx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
