import { clinicData } from '../data/clinic';
import { Plus } from 'lucide-react';

export default function Ticker() {
  const items = [...clinicData.tickerItems, ...clinicData.tickerItems, ...clinicData.tickerItems];

  return (
    <div className="bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-950 py-3.5 border-y-2 border-gold-500/60 overflow-hidden text-gold-200">
      <div className="flex animate-marquee items-center gap-6 whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
            <span className="text-cream-50">{item}</span>
            <Plus size={14} className="text-gold-400 font-bold shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
