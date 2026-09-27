import { Sparkles, HeartHandshake, Award, Building2, ArrowRight } from 'lucide-react';

const timeline = [
  {
    tag: 'A LIFETIME',
    title: 'Decades of Public Health Service',
    desc: 'Shri Dungar Ram Patel served the people of Rajasthan as Senior MPW (Multi-Purpose Health Worker) — visiting homes, caring for mothers & children, and earning the trust of an entire region.',
    icon: HeartHandshake,
  },
  {
    tag: 'HONOUR',
    title: 'A Well-Earned Retirement',
    desc: 'After a career defined by dedication, service and values, his retirement was celebrated with love — and it became the seed of something even bigger for the community.',
    icon: Award,
  },
  {
    tag: '1 JUNE 2026',
    title: 'Shreeji Dental Hospital Opens',
    desc: 'On an auspicious Monday morning, the hospital was inaugurated on Main Road, Rampura – Kalali — carrying forward his name, his blessings and his mission of seva through modern dentistry.',
    icon: Building2,
  },
];

export default function Legacy() {
  return (
    <section id="legacy" className="relative overflow-hidden bg-cream-100 py-20 md:py-28">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-mandala-light opacity-70 pointer-events-none" />
      <div className="absolute inset-0 pattern-diamond opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-center mx-auto mb-14 md:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon-700/25 bg-maroon-700/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-maroon-800">
            <Sparkles size={13} className="text-gold-600" />
            <span>Our Roots</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-maroon-950">
            A Legacy of <span className="gold-text-static">Seva</span>,<br />
            A Future of Smiles
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-maroon-950/70 leading-relaxed max-w-2xl mx-auto">
            Shreeji Dental Hospital stands on the shoulders of a man who spent his life healing others. This is his story — and our promise.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 items-center">
          
          {/* Left Column: Portrait Card of Shri Dungar Ram Patel */}
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-gold-500/50 bg-gradient-to-b from-maroon-900 via-maroon-950 to-maroon-950 p-3 shadow-2xl shadow-maroon-950/25">
            <div className="absolute inset-0 bg-mandala opacity-40 pointer-events-none" />
            
            <div className="relative p-2">
              <div className="overflow-hidden rounded-[1.7rem] bg-maroon-950">
                <img
                  src="/images/doctor-dungar.jpg"
                  alt="Shri Dungar Ram Patel - Founder & Guiding Light of Shreeji Dental Hospital"
                  className="h-[360px] sm:h-[420px] w-full object-cover object-top filter brightness-95"
                />
              </div>

              <div className="p-6 text-center text-cream-50 space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/30 text-[10px] font-black uppercase tracking-widest text-gold-300">
                  Founder & Guiding Light
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Shri Dungar Ram Patel
                </h3>

                <div className="text-xs text-gold-200/90 font-semibold tracking-wider uppercase">
                  SR. MPW (RETD.) • INSPIRATION • GUIDANCE • LEGACY
                </div>

                <div className="pt-2 border-t border-gold-400/25 space-y-1">
                  <p className="font-hindi text-gold-300 text-sm sm:text-base font-medium">
                    "सेवा ही सबसे बड़ी पूजा है — और मुस्कान ही सबसे बड़ा आशीर्वाद।"
                  </p>
                  <p className="text-[11px] text-cream-200/70 italic">
                    "Service is the highest worship — and a smile is the greatest blessing."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline Cards */}
          <div className="space-y-4">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-maroon-700/15 bg-white p-5 sm:p-6 shadow-sm hover:border-gold-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-maroon-800 to-maroon-950 text-gold-300 shadow group-hover:scale-105 transition-transform">
                    <item.icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1">
                    <span className="inline-block text-[10px] font-black tracking-widest uppercase text-gold-600">
                      {item.tag}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-bold text-maroon-950">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-maroon-950/75 leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Callout link */}
            <a
              href="#doctors"
              className="flex items-center justify-between gap-4 rounded-2xl border border-gold-500/50 bg-gradient-to-r from-maroon-950 via-maroon-900 to-maroon-950 p-5 text-cream-50 shadow-lg hover:shadow-xl transition group"
            >
              <div>
                <div className="font-display text-base sm:text-lg font-bold text-white">
                  Meet the doctors carrying this legacy forward
                </div>
                <div className="text-xs text-gold-300/90 mt-0.5">
                  Inaugurated 1 June 2026 • Main Road, Rampura – Kalali
                </div>
              </div>

              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-400 text-maroon-950 font-bold group-hover:translate-x-1 transition-transform">
                <ArrowRight size={18} />
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
