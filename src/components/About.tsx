import { Award, Heart, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Expert Care',
    description: 'Led by Dr. Dungar Ram Patel with 15+ years of experience in advanced dentistry',
  },
  {
    icon: Heart,
    title: 'Patient First',
    description: 'Compassionate care with personalized treatment plans for every patient',
  },
  {
    icon: Users,
    title: 'Skilled Team',
    description: 'A dedicated team of specialists including Dr. Mahendra and Dr. Amisha',
  },
  {
    icon: Zap,
    title: 'Latest Technology',
    description: 'State-of-the-art equipment and modern dental techniques for best results',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            About Us
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Caring for Your Smile{' '}
            <span className="gradient-text">Since 2009</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-[family-name:var(--font-outfit)] font-light leading-relaxed">
            Shreeji Dental Hospital has been a beacon of quality dental healthcare, 
            providing comprehensive dental solutions with expertise, compassion, and cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image Grid */}
          <div className="relative perspective-1000">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl box-3d transform hover:scale-105 transition-all duration-500">
                  <img
                    src="https://www.designarena.ai/u/a99fc487-214a-4d74-8d57-14e940e82b2b"
                    alt="Shreeji Dental Hospital"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl box-3d transform hover:scale-105 transition-all duration-500">
                  <img
                    src="/images/dental-equipment.jpg"
                    alt="Modern Dental Equipment"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl box-3d transform hover:scale-105 transition-all duration-500">
                  <img
                    src="https://www.designarena.ai/u/5e5d32af-0d68-4bad-a2aa-6b1419a7d513"
                    alt="Shreeji Dental Hospital Clinic"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl box-3d transform hover:scale-105 transition-all duration-500">
                  <img
                    src="/images/happy-patient.jpg"
                    alt="Happy Patient"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-primary-800 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-primary-600/30 animate-float-slow">
              <div className="text-center">
                <div className="text-3xl font-bold font-[family-name:var(--font-outfit)]">15+</div>
                <div className="text-sm text-primary-100 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl font-bold text-slate-900">
                Where Advanced Dentistry Meets Compassionate Care
              </h3>
              <p className="text-slate-600 leading-relaxed font-[family-name:var(--font-outfit)]">
                Under the visionary leadership of <strong className="text-primary-800">Dr. Dungar Ram Patel</strong>, 
                Shreeji Dental Hospital has grown to become one of the most trusted dental care 
                centers in the region. Our commitment to excellence drives us to provide the 
                highest quality dental treatments using the latest technology and techniques.
              </p>
              <p className="text-slate-600 leading-relaxed font-[family-name:var(--font-outfit)]">
                We believe every patient deserves a healthy, beautiful smile. From routine check-ups 
                to complex dental procedures, our experienced team ensures comfortable, effective 
                care in a warm and welcoming environment.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-5 bg-white rounded-2xl shadow-md box-3d-hover hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
