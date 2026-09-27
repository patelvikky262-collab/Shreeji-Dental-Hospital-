import { clinicData } from '../data/clinic';
import { MapPin, Clock, Navigation, Instagram, ExternalLink, Phone } from 'lucide-react';

export default function Visit() {
  const { address, phones, hours, directions, instagram } = clinicData;

  return (
    <section id="visit" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-maroon-700/10 border border-maroon-700/20 text-maroon-800 text-xs font-bold uppercase tracking-wider">
            <MapPin size={14} className="text-maroon-600" />
            <span>Clinic Timings & Location</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-950">
            Visit <span className="maroon-gradient-text">Our Hospital</span>
          </h2>

          <p className="text-maroon-950/70 text-base sm:text-lg">
            Located conveniently on the Main Road in Rampura–Kalali, Rohat, Pali with easy parking and direct highway access.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left: Contact & Hours Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            
            {/* Address Box */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-maroon-700/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-maroon-900 text-gold-300 flex items-center justify-center shrink-0 shadow">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-maroon-950">
                    Hospital Address
                  </h3>
                  <div className="font-hindi text-xs text-maroon-700">
                    श्रीजी डेंटल हॉस्पिटल, रामपुरा – कालाली
                  </div>
                </div>
              </div>

              <div className="text-sm text-maroon-950/80 leading-relaxed pl-3 border-l-2 border-gold-500">
                <p className="font-semibold text-maroon-950">{address.line1}</p>
                <p>{address.line2}</p>
                <p>{address.cityState}</p>
              </div>

              <a
                href={directions}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-maroon-900 hover:bg-maroon-800 text-gold-200 text-xs font-bold transition flex items-center justify-center gap-2 shadow"
              >
                <Navigation size={15} />
                <span>Get Google Maps Directions</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-maroon-700/15 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-maroon-900 text-gold-300 flex items-center justify-center shrink-0 shadow">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-maroon-950">
                    Consultation Hours
                  </h3>
                  <p className="text-xs text-maroon-700 font-medium">
                    Daily morning & evening slots
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-sm">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-start pb-2 border-b border-maroon-700/10 last:border-0 last:pb-0">
                    <span className="font-bold text-maroon-950 text-xs sm:text-sm">
                      {h.days}
                    </span>
                    <span className="text-maroon-800 text-xs sm:text-sm font-medium text-right">
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact numbers & Instagram */}
            <div className="p-5 rounded-2xl bg-maroon-950 text-cream-50 border border-gold-400/30 flex items-center justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-gold-300 font-bold">
                  Emergency & Appointments
                </div>
                <div className="font-bold text-sm sm:text-base text-white mt-0.5">
                  {phones[0].display} • {phones[1].display}
                </div>
              </div>
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gold-300 transition shrink-0"
                title="Follow on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

          </div>

          {/* Right: Embedded Interactive Map container matching height */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-maroon-700/15 shadow-xl min-h-[420px] bg-cream-100 relative">
            <iframe
              src={clinicData.mapEmbed}
              title="Shreeji Dental Hospital Location Map"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
