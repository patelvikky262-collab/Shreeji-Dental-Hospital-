import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 section-gradient relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Contact Us
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Book Your{' '}
            <span className="gradient-text">Appointment</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-[family-name:var(--font-outfit)] font-light">
            Ready to take the first step towards a healthier smile? 
            Contact us today to schedule your visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-lg box-3d border border-slate-100 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Shreeji Dental Hospital,<br />
                    Main Road, Near Bus Stand,<br />
                    Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg box-3d border border-slate-100 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-teal-500/20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-600 text-sm">+91 98765 43210</p>
                  <p className="text-slate-600 text-sm">+91 98765 43211</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg box-3d border border-slate-100 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-gold-500/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600 text-sm">info@shreejidental.com</p>
                  <p className="text-slate-600 text-sm">appointments@shreejidental.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg box-3d border border-slate-100 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/20">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-600 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-slate-600 text-sm">Sunday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gold-600 text-sm font-medium mt-1">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl box-3d border border-slate-100">
              {formSubmitted ? (
                <div className="text-center py-12 animate-slide-up">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-slate-600">
                    Your appointment request has been received. We'll contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-slate-900"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-slate-900"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-slate-900"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Select Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-slate-900"
                    >
                      <option value="">Choose a service...</option>
                      <option value="general">General Checkup</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="implants">Dental Implants</option>
                      <option value="orthodontics">Orthodontics</option>
                      <option value="rootcanal">Root Canal Treatment</option>
                      <option value="surgery">Oral Surgery</option>
                      <option value="pediatric">Pediatric Dentistry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-slate-900 resize-none"
                      placeholder="Tell us about your dental concern..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-primary-600/30 hover:shadow-primary-600/40"
                  >
                    <Send className="w-5 h-5" />
                    Book Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
