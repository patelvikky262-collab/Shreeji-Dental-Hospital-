import { useState } from 'react';
import { clinicData } from '../data/clinic';
import { Sparkles, Maximize2, X, Instagram, MapPin, ExternalLink } from 'lucide-react';

const galleryItems = [
  {
    src: '/images/hospital-photo.jpg',
    title: 'Shreeji Dental Hospital',
    sub: 'The hospital — inauguration day, 1 June 2026',
    tag: 'OUR HOSPITAL',
  },
  {
    src: '/images/treatment.jpg',
    title: 'Gentle, Modern Dentistry',
    sub: 'Comfort-first treatment on a state-of-the-art dental chair',
    tag: 'TREATMENT',
  },
  {
    src: '/images/clinic-1.jpg',
    title: 'Sterile & Modern',
    sub: 'Hygienic operatory with modern equipment',
    tag: 'CLINIC',
  },
  {
    src: '/images/smile-1.jpg',
    title: 'Smile Designing',
    sub: 'Whitening, polishing & complete smile makeovers',
    tag: 'SMILES',
  },
  {
    src: '/images/equipment.jpg',
    title: 'Precision Instruments',
    sub: 'Autoclave-sterilised instruments for every patient',
    tag: 'CARE',
  },
  {
    src: '/images/smile-2.jpg',
    title: 'Smiles of Rajasthan',
    sub: 'Serving families across Rampura, Rohat & Pali',
    tag: 'COMMUNITY',
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-maroon-950 py-20 md:py-28">
      {/* Background radial gradients & mandala */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_420px_at_85%_20%,rgba(200,16,46,0.4),transparent_60%),linear-gradient(180deg,#2a0a10,#3d0d17_50%,#2a0a10)]" />
      <div className="absolute inset-0 bg-mandala opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-center mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span>Gallery</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-cream-50 leading-tight">
            Step Inside <span className="gold-text">Shreeji</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-cream-200/80 leading-relaxed max-w-2xl mx-auto">
            Our hospital on inauguration day, our modern treatment rooms, and the smiles we care for — click any photo to view it large.
          </p>
        </div>

        {/* 6-Card Gallery Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPhoto(idx)}
              className="group relative block w-full overflow-hidden rounded-3xl border border-gold-400/25 bg-white/5 text-left transition-all duration-500 hover:-translate-y-2 hover:border-gold-400/60 hover:shadow-[0_30px_70px_-20px_rgba(227,185,78,0.4)] cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden md:h-80 bg-maroon-900">
                <img
                  src={item.src}
                  alt={`${item.title} — ${item.sub}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/25 to-transparent opacity-90" />

                {/* Tag */}
                <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-[0.65rem] font-black uppercase tracking-widest text-maroon-950 shadow">
                  {item.tag}
                </span>

                {/* Hover Maximize Icon */}
                <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-maroon-950/70 text-gold-300 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 border border-gold-400/40">
                  <Maximize2 size={16} />
                </span>

                {/* Card Title & Sub */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="font-display text-xl font-bold text-cream-50 leading-snug">
                    {item.title}
                  </div>
                  <div className="mt-0.5 text-xs sm:text-sm text-gold-200/85">
                    {item.sub}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Social / Google Maps Photos Ribbon */}
        <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-gold-400/25 bg-white/[0.04] p-6 backdrop-blur md:flex-row md:p-7 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg">
              <Instagram size={26} />
            </span>
            <div>
              <div className="font-display text-lg sm:text-xl font-bold text-cream-50">
                See real photos, reels & patient smiles
              </div>
              <div className="text-xs sm:text-sm text-cream-200/70 mt-0.5">
                Follow @shreeji_dental_hospital_162026 • View us on Google Maps
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={clinicData.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] px-6 py-3 font-bold text-xs sm:text-sm text-white shadow-lg hover:opacity-95 transition"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>

            <a
              href={clinicData.mapsPhotos}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/50 bg-white/5 px-6 py-3 font-bold text-xs sm:text-sm text-gold-300 hover:bg-white/10 transition"
            >
              <MapPin size={15} />
              <span>Google Maps Photos</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden border-2 border-gold-500/50 bg-maroon-950 shadow-2xl"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-maroon-950/80 text-gold-300 hover:bg-gold-400 hover:text-maroon-950 transition border border-gold-400/40"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={galleryItems[selectedPhoto].src}
                alt={galleryItems[selectedPhoto].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-maroon-950 text-cream-50 flex items-center justify-between gap-4 border-t border-gold-400/20">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gold-400 bg-gold-400/10 px-2.5 py-0.5 rounded">
                  {galleryItems[selectedPhoto].tag}
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  {galleryItems[selectedPhoto].title}
                </h3>
                <p className="text-sm text-cream-200/80">
                  {galleryItems[selectedPhoto].sub}
                </p>
              </div>

              <a
                href="#book"
                onClick={() => setSelectedPhoto(null)}
                className="px-5 py-2.5 rounded-full bg-gold-400 hover:bg-gold-300 text-maroon-950 font-bold text-xs shrink-0 transition"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
