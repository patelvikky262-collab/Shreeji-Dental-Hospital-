import { Suspense, lazy } from 'react';
import { clinicData } from '../data/clinic';
import { Calendar, Phone, ArrowRight, ShieldCheck, MapPin, Sparkles, Star } from 'lucide-react';

const ToothScene = lazy(() => import('./ToothScene'));

export default function Hero() {
  const primaryPhone = clinicData.phones[0];

  return (
    <section id="home" className="relative overflow-hidden bg-maroon-950 pt-28 sm:pt-36 lg:pt-40">
      {/* Background Gradients & Mandala */}
      <div className="absolute inset-0 bg-[radial-gradient(1100px_560px_at_78%_18%,rgba(200,16,46,0.5),transparent_60%),radial-gradient(900px_520px_at_12%_85%,rgba(201,162,75,0.22),transparent_60%),linear-gradient(180deg,#2a0a10_0%,#4a101b_55%,#2a0a10_100%)]" />
      <div className="absolute inset-0 bg-mandala opacity-60 pointer-events-none" />
      <div className="absolute inset-0 pattern-diamond opacity-40 pointer-events-none" />
      
      {/* Subtle Rotating Circles */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 animate-spin-slow rounded-full border border-dashed border-gold-400/30" />
      <div className="pointer-events-none absolute -right-20 bottom-16 h-56 w-56 animate-spin-slow rounded-full border border-gold-400/20" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24 z-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
          
          {/* Left Column */}
          <div className="relative z-10 space-y-6 text-center lg:text-left">
            
            {/* New Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 py-1.5 pl-2 pr-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-300 backdrop-blur">
              <span className="inline-flex items-center gap-1 rounded-full bg-gold-400 px-2.5 py-1 text-[0.65rem] text-maroon-950 font-black">
                <Sparkles size={11} /> NEW
              </span>
              <span>Rampura • Rohat • Pali — Rajasthan</span>
            </div>

            {/* Hindi Tagline */}
            <p className="font-hindi text-xl text-gold-200/90 md:text-2xl">
              {clinicData.hindi}{' '}
              <span className="mx-1 text-gold-400">•</span>{' '}
              {clinicData.hindiTagline}
            </p>

            {/* Huge Headline */}
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.02] text-cream-50 tracking-tight">
              SHREEJI<br />
              <span className="gold-text">DENTAL</span> HOSPITAL
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-cream-200/85 md:text-xl mx-auto lg:mx-0">
              {clinicData.tagline} — painless root canals, braces, implants & complete family dental care, guided by the lifetime of service of{' '}
              <span className="font-semibold text-gold-300">Shri Dungar Ram Patel</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#book"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 bg-[length:200%_auto] px-7 py-3.5 font-bold text-maroon-950 shadow-[0_10px_36px_rgba(227,185,78,0.45)] transition-all hover:bg-right hover:shadow-[0_12px_44px_rgba(227,185,78,0.6)]"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`tel:+91${primaryPhone.wa}`}
                className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 bg-white/5 px-7 py-3.5 font-bold text-cream-50 backdrop-blur transition hover:border-gold-400/60 hover:bg-white/10"
              >
                <Phone size={17} className="text-gold-300" />
                <span>{primaryPhone.display}</span>
              </a>
            </div>

            {/* Developer / Website Maker Card in Hero */}
            <div className="rounded-2xl border border-gold-400/25 bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] p-3.5 backdrop-blur-md shadow-lg flex items-center justify-between gap-3.5 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3.5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-gold-400/40 overflow-hidden shrink-0 shadow bg-maroon-900">
                  <img
                    src="/images/developer.jpg"
                    alt="Vikash Patel - Website & App Developer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="text-left">
                  <div className="font-display text-sm sm:text-base font-bold text-cream-50 leading-snug">
                    Need a Website or Custom App? <span className="text-gold-300 font-bold">We Build Them.</span>
                  </div>
                  <div className="text-xs text-cream-200/80 mt-0.5">
                    By <span className="text-cream-50 font-semibold">Vikash Patel</span> • WhatsApp / Call <a href="tel:+919509868384" className="text-gold-300 font-semibold hover:underline">+91 9509868384</a>
                  </div>
                  <div className="text-[11px] mt-0.5 font-medium text-cream-200/90">
                    <span className="text-gold-300 font-bold">New Star Public School</span>, Rohat (306421)
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919509868384?text=Hi%2C%20I%20saw%20the%20Shreeji%20Dental%20Hospital%20website%20and%20want%20to%20build%20a%20website%20or%20custom%20app"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg hover:scale-105 transition"
                aria-label="WhatsApp Developer"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
            </div>

            {/* Review & Trust Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-3 text-xs sm:text-sm text-cream-200/80">
              <span className="inline-flex items-center gap-2">
                <span className="flex text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <strong className="text-cream-50">Loved by local families</strong>
              </span>

              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-gold-400" />
                <span>100% Sterile & Safe</span>
              </span>

              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} className="text-gold-400" />
                <span>Main Road, Rampura – Kalali</span>
              </span>
            </div>

            {/* 3 Stats Boxes */}
            <div className="pt-3 grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0">
              {[
                { n: '35+', l: 'Years of Service Legacy' },
                { n: '2', l: 'Expert Doctors, One Roof' },
                { n: '100%', l: 'Painless-First Dentistry' }
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-gold-400/25 bg-white/[0.04] px-3 sm:px-4 py-4 text-center backdrop-blur transition hover:border-gold-400/60 hover:bg-white/[0.07]"
                >
                  <div className="gold-text-static font-display text-2xl sm:text-3xl lg:text-4xl font-black">
                    {s.n}
                  </div>
                  <div className="mt-1 text-[0.68rem] sm:text-[0.72rem] font-semibold uppercase tracking-wider text-cream-200/70 leading-tight">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3D Tooth Scene Canvas */}
          <div className="relative mx-auto h-[400px] w-full max-w-[540px] sm:h-[460px] lg:h-[560px]">
            {/* Background ring card frame */}
            <div className="absolute inset-4 rounded-[3rem] border border-gold-400/25 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-[2px]" />
            <div className="absolute inset-4 rounded-[3rem] bg-[radial-gradient(320px_320px_at_50%_55%,rgba(227,185,78,0.22),transparent_70%)]" />

            {/* 3D Canvas */}
            <div className="absolute inset-0">
              <Suspense
                fallback={
                  <div className="grid h-full place-items-center">
                    <div className="h-14 w-14 animate-spin rounded-full border-4 border-gold-400/30 border-t-gold-400" />
                  </div>
                }
              >
                <ToothScene />
              </Suspense>
            </div>

            {/* Floating Info Pill 1 */}
            <div className="absolute left-2 top-8 animate-float rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md sm:left-6">
              <div className="text-[0.65rem] font-bold uppercase tracking-widest text-gold-300">
                Painless
              </div>
              <div className="font-display text-base sm:text-lg font-bold text-cream-50">
                Root Canal
              </div>
            </div>

            {/* Floating Info Pill 2 */}
            <div className="absolute bottom-12 right-2 animate-float-delayed rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md sm:right-6">
              <div className="text-[0.65rem] font-bold uppercase tracking-widest text-gold-300">
                Smile
              </div>
              <div className="font-display text-base sm:text-lg font-bold text-cream-50">
                Makeovers
              </div>
            </div>

            {/* 3D Drag Hint */}
            <div className="absolute bottom-3 left-6 hidden items-center gap-2 rounded-full border border-gold-400/40 bg-maroon-950/80 px-4 py-1.5 text-xs font-bold text-gold-300 backdrop-blur sm:inline-flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-400" />
              </span>
              <span>Drag your mouse — the tooth follows you in 3D</span>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Wave SVG Transition to Light Background */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="relative block h-[50px] w-full md:h-[80px]"
      >
        <path
          d="M0,64 C240,96 480,16 720,40 C960,64 1200,96 1440,48 L1440,90 L0,90 Z"
          fill="#e9faf1"
        />
      </svg>
    </section>
  );
}
