import { useState, useEffect } from 'react';
import { clinicData } from '../data/clinic';
import { Phone, Instagram, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-maroon-950/95 backdrop-blur-md shadow-2xl py-3 border-b border-gold-400/20'
          : 'bg-maroon-950/80 backdrop-blur-sm py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full ring-2 ring-gold-400/70 overflow-hidden shadow-lg shadow-gold-500/20 shrink-0 bg-maroon-900">
            <img
              src="/images/logo.png"
              alt="Shreeji Dental Hospital Logo"
              className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-300"
            />
          </div>
          <div>
            <div className="font-display font-black text-lg sm:text-xl tracking-wider text-cream-50 leading-none">
              SHREEJI
            </div>
            <div className="text-[10px] sm:text-[11px] font-bold text-gold-300 tracking-[0.25em] uppercase mt-1">
              DENTAL HOSPITAL
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {clinicData.navLinks.slice(0, 7).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-cream-200/85 hover:text-gold-300 text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={clinicData.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-gold-400/40 bg-white/5 hover:bg-gold-400/20 text-gold-300 flex items-center justify-center transition shadow-sm"
            aria-label="Instagram"
          >
            <Instagram size={17} />
          </a>

          <a
            href={`tel:+91${clinicData.phones[0].wa}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-800 border border-gold-400/40 px-5 py-2.5 text-xs font-bold text-cream-50 shadow-lg hover:border-gold-400 hover:shadow-gold-500/20 transition"
          >
            <Phone size={14} className="text-gold-400" />
            <span>{clinicData.phones[0].display}</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl text-cream-50 hover:bg-white/10"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-maroon-950 border-t border-gold-400/20 px-6 py-6 space-y-4 shadow-2xl">
          <div className="grid grid-cols-2 gap-2.5">
            {clinicData.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3.5 py-2 rounded-xl bg-white/5 text-cream-50 hover:text-gold-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center gap-3">
            <a
              href={`tel:+91${clinicData.phones[0].wa}`}
              className="flex-1 py-3 text-center rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-maroon-950 font-bold text-xs shadow"
            >
              Call {clinicData.phones[0].display}
            </a>
            <a
              href={clinicData.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/10 text-gold-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
