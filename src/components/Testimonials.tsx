import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Local Patient',
    rating: 5,
    text: 'Excellent experience at Shreeji Dental Hospital! Dr. Dungar Ram Patel is incredibly skilled and made me feel completely at ease during my implant procedure. Highly recommended!',
    treatment: 'Dental Implant',
  },
  {
    name: 'Priya Sharma',
    location: 'Regular Patient',
    rating: 5,
    text: 'Dr. Amisha is wonderful with children. My kids actually look forward to their dental visits now! The staff is warm, professional, and the clinic is spotlessly clean.',
    treatment: 'Pediatric Dentistry',
  },
  {
    name: 'Amit Patel',
    location: 'Cosmetic Patient',
    rating: 5,
    text: 'Got my smile makeover done by Dr. Mahendra and the results are amazing. The whole team is professional and the clinic has state-of-the-art equipment. Best dental hospital in the area!',
    treatment: 'Smile Makeover',
  },
  {
    name: 'Sunita Devi',
    location: 'Orthodontic Patient',
    rating: 5,
    text: 'I had my braces treatment here and the results exceeded my expectations. Dr. Mahendra explained every step clearly and the follow-up care was exceptional.',
    treatment: 'Orthodontics',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-primary-950 via-primary-900 to-primary-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-800/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-primary-200 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase backdrop-blur-sm">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Patients{' '}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Say About Us</span>
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto font-[family-name:var(--font-outfit)] font-light">
            Don't just take our word for it — hear from our satisfied patients about 
            their experience at Shreeji Dental Hospital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold-400/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-400" fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/90 leading-relaxed mb-6 font-[family-name:var(--font-outfit)]">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-primary-300">{testimonial.location}</div>
                </div>
                <span className="px-3 py-1 bg-primary-800/50 text-primary-200 rounded-lg text-xs font-medium border border-primary-700/30">
                  {testimonial.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/20">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-gold-400" fill="currentColor" />
              ))}
            </div>
            <div className="text-white">
              <span className="font-bold text-2xl mr-2">4.9</span>
              <span className="text-primary-200">Rating on Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
