import { clinicData } from '../data/clinic';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const primaryPhone = clinicData.phones[0];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${primaryPhone.wa}?text=${encodeURIComponent('Namaste! I would like to book an appointment at Shreeji Dental Hospital.')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#25d366] to-[#128c7e] py-2.5 px-4 sm:py-3 sm:px-5 font-bold text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all hover:scale-105"
      >
        <MessageCircle size={18} className="fill-white" />
        <span className="text-xs sm:text-sm">WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:+91${primaryPhone.wa}`}
        aria-label="Call now"
        className="pointer-events-auto animate-glow-pulse flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-500 py-2.5 px-4 sm:py-3 sm:px-5 font-bold text-maroon-950 shadow-[0_8px_25px_rgba(227,185,78,0.4)] transition-all hover:scale-105"
      >
        <Phone size={16} />
        <span className="text-xs sm:text-sm">Call {primaryPhone.display}</span>
      </a>
    </div>
  );
}
