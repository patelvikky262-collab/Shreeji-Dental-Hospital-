import { clinicData } from '../data/clinic';
import { Phone, MapPin, Instagram, ArrowUp, Calendar } from 'lucide-react';

export default function Footer() {
  const primaryPhone = clinicData.phones[0];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-maroon-950 text-cream-50">
      
      {/* Top Banner Ribbon */}
      <div className="relative border-y-2 border-gold-500/60 bg-gradient-to-r from-maroon-900 via-maroon-700 to-maroon-900">
        <div className="absolute inset-0 bg-mandala opacity-40 pointer-events-none" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8 z-10">
          
          <div className="text-center md:text-left">
            <div className="font-hindi text-lg sm:text-xl text-gold-200">
              {clinicData.hindiTagline}
            </div>
            <div className="mt-1 font-display text-2xl sm:text-3xl lg:text-4xl font-black text-cream-50">
              Tooth pain? Don't wait — smile today.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="rounded-full bg-gold-400 px-7 py-3.5 font-bold text-sm text-maroon-950 shadow-xl hover:bg-gold-300 transition"
            >
              Book Appointment
            </a>

            <a
              href={`tel:+91${primaryPhone.wa}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream-50/40 px-6 py-3.5 font-bold text-sm text-cream-50 hover:border-gold-300 hover:text-gold-200 transition"
            >
              <Phone size={16} className="text-gold-400" />
              <span>{primaryPhone.display}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Website Maker / Developer Banner */}
      <div className="relative mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 z-10">
        <div className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-r from-maroon-900/60 via-maroon-950/90 to-maroon-900/60 p-6 sm:p-7 backdrop-blur-md shadow-xl">
          <div className="absolute inset-0 bg-mandala opacity-15 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: Avatar & Text */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl border border-gold-400/35 overflow-hidden shrink-0 shadow-lg bg-maroon-900">
                <img
                  src="/images/developer.jpg"
                  alt="Website & App Developer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-gold-300">
                  <span>✨</span>
                  <span>WEBSITE & APP DEVELOPER • MR.VIKASH PATEL</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-cream-50 leading-tight">
                  Want a Website or a Custom App? <span className="text-gold-300 font-extrabold">Let's Build Yours.</span>
                </h3>

                <p className="text-xs sm:text-sm text-cream-200/80 max-w-2xl leading-relaxed">
                  Websites • Custom Apps • EHR • ERP • SaaS Solutions — crafted by <span className="text-gold-200 font-semibold">MR.Vikash Patel</span>
                </p>

                <div className="text-xs text-cream-200/90 flex items-center justify-center sm:justify-start gap-1.5 pt-0.5 font-medium">
                  <MapPin size={14} className="text-gold-400 shrink-0" />
                  <span><span className="text-gold-300 font-bold">New Star Public School</span>, Rohat (306421)</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full sm:w-auto lg:w-60">
              <a
                href="https://wa.me/919509868384?text=Hi%20Vikash%2C%20I%20saw%20the%20Shreeji%20Dental%20Hospital%20website%20and%20want%20to%20build%20a%20website%20or%20custom%20app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>WhatsApp: 95098 68384</span>
              </a>

              <a
                href="tel:+919509868384"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-400/40 bg-white/5 hover:bg-white/10 text-gold-300 px-5 py-2.5 font-bold text-xs sm:text-sm shadow transition-all hover:scale-[1.01]"
              >
                <Phone size={15} />
                <span>Call: 95098 68384</span>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="absolute inset-0 bg-mandala opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 z-10 space-y-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          
          {/* Col 1: Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full ring-2 ring-gold-400/80 overflow-hidden shadow-lg shadow-gold-500/20 shrink-0 bg-maroon-900">
                <img
                  src="/images/logo.png"
                  alt="Shreeji Dental Hospital Logo"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <div>
                <div className="font-display font-black text-lg text-cream-50">
                  SHREEJI DENTAL
                </div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-gold-300 font-bold">
                  HOSPITAL • RAMPURA
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed max-w-sm">
              Dedicated to the lifetime of service and memory of{' '}
              <strong className="text-gold-300">Shri Dungar Ram Patel</strong>. Modern, painless healthcare for every family in Rampura, Rohat, Kalali and Pali district.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={clinicData.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-400/20 text-gold-300 flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href={`tel:+91${primaryPhone.wa}`}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold-400/20 text-gold-300 flex items-center justify-center transition"
                aria-label="Call"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-200/80">
              {clinicData.navLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-gold-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Treatments */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
              Key Treatments
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-cream-200/80">
              <li>Painless Root Canal (RCT)</li>
              <li>Braces & Clear Aligners</li>
              <li>Dental Implants</li>
              <li>Crowns & Bridges</li>
              <li>Kids Dentistry</li>
              <li>24/7 Dental Emergency</li>
            </ul>
          </div>

          {/* Col 4: Timings & Location */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold-400">
              Hospital Timings
            </h4>
            <div className="space-y-2 text-xs text-cream-200/85">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-bold text-gold-300">Monday – Saturday</div>
                <div>10:00 AM – 2:00 PM</div>
                <div>4:00 PM – 8:00 PM</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-bold text-gold-300">Sunday Consultation</div>
                <div>10:00 AM – 2:00 PM</div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Developer Credit */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-200/60">
          <div>
            © 2026 Shreeji Dental Hospital • Developed by <a href="tel:+919509868384" className="text-gold-300 font-semibold hover:underline">MR.Vikash Patel</a> (+91 9509868384)
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-gold-400/20 text-gold-300 transition flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
