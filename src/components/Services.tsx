import { 
  Sparkles, 
  ShieldCheck, 
  Smile, 
  HeartPulse, 
  Syringe, 
  Scan,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, bonding, teeth whitening, and smile makeovers tailored to your unique needs.',
    color: 'from-gold-400 to-gold-600',
    shadowColor: 'shadow-gold-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Dental Implants',
    description: 'Permanent tooth replacement with titanium implants that look, feel, and function like your natural teeth.',
    color: 'from-primary-500 to-primary-700',
    shadowColor: 'shadow-primary-500/20',
  },
  {
    icon: Smile,
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern braces, clear aligners, and advanced orthodontic treatments.',
    color: 'from-teal-500 to-teal-700',
    shadowColor: 'shadow-teal-500/20',
  },
  {
    icon: HeartPulse,
    title: 'Root Canal Treatment',
    description: 'Pain-free root canal therapy using latest techniques to save your natural teeth and relieve discomfort.',
    color: 'from-rose-400 to-rose-600',
    shadowColor: 'shadow-rose-500/20',
  },
  {
    icon: Syringe,
    title: 'Oral Surgery',
    description: 'Expert surgical procedures including wisdom tooth extraction, jaw surgery, and bone grafting.',
    color: 'from-violet-500 to-violet-700',
    shadowColor: 'shadow-violet-500/20',
  },
  {
    icon: Scan,
    title: 'Digital X-Ray & Diagnostics',
    description: 'Advanced digital imaging for accurate diagnosis with minimal radiation exposure for your safety.',
    color: 'from-cyan-500 to-cyan-700',
    shadowColor: 'shadow-cyan-500/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-50 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive{' '}
            <span className="gradient-text">Dental Solutions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-[family-name:var(--font-outfit)] font-light">
            From preventive care to advanced procedures, we offer a full range of dental 
            services to keep your smile healthy and beautiful.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg box-3d-hover hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${service.shadowColor}`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-[family-name:var(--font-outfit)]">
                  {service.description}
                </p>

                {/* Learn More */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative corner */}
              <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${service.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary-900/20">
            <div className="text-white text-center sm:text-left">
              <h4 className="font-[family-name:var(--font-playfair)] text-xl font-bold mb-1">Need a consultation?</h4>
              <p className="text-primary-200 text-sm">Book your appointment today and get a free initial assessment.</p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-primary-900 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
