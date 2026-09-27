import { clinicData } from '../data/clinic';
import { Sparkles, GraduationCap, Phone, Calendar, CheckCircle2, Award, HeartPulse } from 'lucide-react';

const doctorsList = [
  {
    name: 'Dr. Mahendra Patel',
    role: 'Chief Dental Surgeon',
    degree: 'B.D.S.',
    college: 'RUHS, Jaipur',
    img: '/images/doctor-mahendra.jpg',
    icon: Award,
    imgPos: 'object-top',
    points: [
      'Painless root canals & crowns',
      'Braces, aligners & implants',
      'Smile designing & full-mouth rehab',
    ],
    btnLabel: 'Book with Mahendra',
  },
  {
    name: 'Dr. Amisha Patel',
    role: 'Medical & Family Care',
    degree: 'M.B.B.S.',
    college: 'SNMC, Jodhpur',
    img: '/images/doctor-amisha.jpg',
    icon: HeartPulse,
    imgPos: 'object-top',
    points: [
      'General health & medical care',
      'Kids & family wellness',
      'Safe, gentle patient-first approach',
    ],
    btnLabel: 'Book with Amisha',
  },
];

export default function Doctors() {
  const primaryPhone = clinicData.phones[0];

  return (
    <section id="doctors" className="relative overflow-hidden bg-maroon-950 py-20 md:py-28">
      {/* Background Gradients & Mandala */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_50%_0%,rgba(200,16,46,0.45),transparent_60%),linear-gradient(180deg,#2a0a10,#4a101b_55%,#2a0a10)]" />
      <div className="absolute inset-0 bg-mandala opacity-50 pointer-events-none" />
      
      {/* Big SMILE outline watermark */}
      <div className="pointer-events-none absolute inset-x-0 top-10 select-none text-center font-display text-[18vw] font-black leading-none text-stroke-gold opacity-20">
        SMILE
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Heading */}
        <div className="max-w-3xl text-center mx-auto mb-14 md:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold-300 backdrop-blur">
            <Sparkles size={13} className="text-gold-400" />
            <span>Our Doctors</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-cream-50 leading-tight">
            Hands You Can <span className="gold-text">Trust</span><br />
            With Your Smile
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-cream-200/80 leading-relaxed max-w-2xl mx-auto">
            Two dedicated doctors, one shared mission — modern, painless and honest healthcare for every family in and around Rampura.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {doctorsList.map((doc, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-[2rem] border border-gold-400/25 bg-white/[0.05] backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-[0_30px_80px_-20px_rgba(227,185,78,0.35)]"
            >
              <div className="grid sm:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
                
                {/* Image */}
                <div className="relative overflow-hidden bg-maroon-900 min-h-[260px] sm:min-h-[340px]">
                  <img
                    src={doc.img}
                    alt={`${doc.name}, ${doc.degree} ${doc.college} — ${doc.role} at Shreeji Dental Hospital`}
                    className={`h-full w-full object-cover ${doc.imgPos} transition-transform duration-700 group-hover:scale-105`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-maroon-950/40" />
                  
                  {/* Role Tag */}
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gold-400 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-widest text-maroon-950 shadow-lg">
                    <doc.icon size={12} />
                    <span>{doc.role}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="relative p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-cream-50">
                      {doc.name}
                    </h3>

                    <div className="inline-flex items-center gap-2 rounded-full border border-royal-700/60 bg-royal-800/40 px-3.5 py-1 text-xs font-bold text-gold-200">
                      <GraduationCap size={15} className="text-gold-400" />
                      <span>{doc.degree} • {doc.college}</span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 pt-2">
                      {doc.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-cream-200/90">
                          <CheckCircle2 size={15} className="text-gold-400 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2.5 pt-4 border-t border-white/10">
                    <a
                      href="#book"
                      className="flex-1 py-2.5 px-4 rounded-xl bg-gold-400 hover:bg-gold-300 text-maroon-950 font-bold text-xs text-center transition flex items-center justify-center gap-1.5 shadow"
                    >
                      <Calendar size={14} />
                      <span>{doc.btnLabel}</span>
                    </a>

                    <a
                      href={`tel:+91${primaryPhone.wa}`}
                      className="py-2.5 px-3.5 rounded-xl border border-cream-50/30 text-cream-50 hover:border-gold-400 hover:text-gold-300 text-xs font-semibold flex items-center gap-1 transition"
                    >
                      <Phone size={14} />
                      <span>Call</span>
                    </a>
                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Hindi quote */}
        <div className="mt-12 text-center">
          <p className="font-hindi text-gold-300 text-base sm:text-lg font-medium tracking-wide">
            "डॉक्टर मरीज की उचित सलाह — आधुनिक दवाई, सटीक देखभाल"
          </p>
        </div>

      </div>
    </section>
  );
}
