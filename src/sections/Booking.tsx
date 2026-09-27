import { useState } from 'react';
import { clinicData } from '../data/clinic';
import { Calendar, Phone, MessageSquare, Send, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

const concernOptions = [
  'Tooth Pain / Severe Cavity',
  'Painless Root Canal (RCT)',
  'Braces & Clear Aligners',
  'Dental Implant / Fixed Crown',
  'Kids Dental Care',
  'Teeth Cleaning & Whitening',
  'Bleeding Gums / Pyorrhea',
  'Complete / Partial Denture',
  'General Dental Checkup'
];

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    concern: concernOptions[0],
    date: '',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp URL
    const message = `Namaste Shreeji Dental Hospital!\n\nI would like to book an appointment:\n• *Name:* ${form.name}\n• *Phone:* ${form.phone}\n• *Concern:* ${form.concern}\n• *Preferred Date:* ${form.date || 'Earliest Available'}\n${form.note ? `• *Note:* ${form.note}\n` : ''}`;
    
    const waUrl = `https://wa.me/${clinicData.phones[0].wa}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  return (
    <section id="book" className="py-20 lg:py-28 bg-gradient-to-b from-maroon-950 via-maroon-900 to-maroon-950 text-cream-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-maroon-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-xs font-semibold">
              <Calendar size={13} />
              <span>Instant Appointment Booking</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Book Your Visit at <span className="gold-gradient-text">Shreeji</span>
              </h2>
              <p className="font-hindi text-lg text-gold-300">
                आपकी सुविधा अनुसार समय चुनें
              </p>
            </div>

            <p className="text-cream-50/80 text-base leading-relaxed">
              Fill out this quick form to reserve your spot with zero waiting time. Our team will instantly confirm your appointment via WhatsApp or call.
            </p>

            {/* Direct helpline card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-gold-400/25 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-400/20 text-gold-300 flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-gold-300 font-semibold uppercase tracking-wide">
                    Prefer Calling Directly?
                  </div>
                  <a
                    href={`tel:+91${clinicData.phones[0].wa}`}
                    className="font-bold text-xl text-white hover:text-gold-300 transition"
                  >
                    +91 {clinicData.phones[0].display}
                  </a>
                </div>
              </div>

              <div className="text-xs text-cream-200/70 flex items-center gap-2 border-t border-white/10 pt-3">
                <Clock size={13} className="text-gold-400" />
                <span>Morning: 10 AM – 2 PM | Evening: 4 PM – 8 PM</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-cream-200/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-gold-400" />
                <span>Zero Booking Fees</span>
              </span>
              <span>•</span>
              <span>Emergency Patients Prioritised</span>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 shadow-2xl text-maroon-950 border border-gold-400/30">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-slide-up">
                  <CheckCircle size={56} className="text-green-600 mx-auto" />
                  <h3 className="font-display text-2xl font-bold text-maroon-950">
                    Appointment Details Sent!
                  </h3>
                  <p className="text-maroon-950/70 text-sm max-w-md mx-auto">
                    We have redirected your request to our hospital WhatsApp line (+91 63764 66371). Our doctor will confirm your exact slot shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-maroon-900 text-gold-200 text-xs font-bold"
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Choudhary"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-maroon-700/20 text-maroon-950 text-sm focus:border-maroon-700 focus:ring-2 focus:ring-maroon-700/20 outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 63764 66371"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-maroon-700/20 text-maroon-950 text-sm focus:border-maroon-700 focus:ring-2 focus:ring-maroon-700/20 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                        Dental Concern / Treatment *
                      </label>
                      <select
                        value={form.concern}
                        onChange={(e) => setForm({ ...form, concern: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-maroon-700/20 text-maroon-950 text-sm focus:border-maroon-700 focus:ring-2 focus:ring-maroon-700/20 outline-none transition"
                      >
                        {concernOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-maroon-700/20 text-maroon-950 text-sm focus:border-maroon-700 focus:ring-2 focus:ring-maroon-700/20 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-maroon-900 mb-1.5">
                      Any Note / Problem Description (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Sensitivity in lower molar since 3 days..."
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-maroon-700/20 text-maroon-950 text-sm focus:border-maroon-700 focus:ring-2 focus:ring-maroon-700/20 outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-maroon-800 via-maroon-700 to-maroon-900 hover:from-maroon-700 hover:to-maroon-800 text-gold-200 font-bold text-base shadow-xl shadow-maroon-900/30 flex items-center justify-center gap-2.5 transition transform hover:scale-[1.01]"
                  >
                    <Send size={18} />
                    <span>Confirm & Book via WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-maroon-950/60">
                    🔒 Your health information is kept completely private & confidential.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
