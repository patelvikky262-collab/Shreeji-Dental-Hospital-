import { GraduationCap, Award, Star } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Dungar Ram Patel',
    role: 'Head Doctor & Founder',
    image: '/images/doctor-dungar.jpg',
    qualifications: 'BDS, MDS - Prosthodontics',
    experience: '15+ Years Experience',
    specialization: 'Implantology & Cosmetic Dentistry',
    bio: 'A visionary dental professional with over 15 years of expertise in advanced dental procedures. Dr. Dungar Ram Patel founded Shreeji Dental Hospital with a mission to provide world-class dental care accessible to all.',
    featured: true,
  },
  {
    name: 'Dr. Mahendra',
    role: 'Senior Dental Surgeon',
    image: '/images/doctor-mahendra.jpg',
    qualifications: 'BDS, MDS - Orthodontics',
    experience: '10+ Years Experience',
    specialization: 'Orthodontics & Endodontics',
    bio: 'An accomplished dental surgeon specializing in orthodontic treatments and root canal therapy. Dr. Mahendra brings precision and care to every procedure, ensuring optimal patient outcomes.',
    featured: false,
  },
  {
    name: 'Dr. Amisha',
    role: 'Dental Surgeon',
    image: '/images/doctor-amisha.jpg',
    qualifications: 'BDS, MDS - Periodontics',
    experience: '8+ Years Experience',
    specialization: 'Pediatric & Preventive Dentistry',
    bio: 'A skilled and compassionate dentist known for her gentle approach, especially with young patients. Dr. Amisha excels in preventive care and creating beautiful, healthy smiles for patients of all ages.',
    featured: false,
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Our Doctors
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Meet Our{' '}
            <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-[family-name:var(--font-outfit)] font-light">
            Our team of highly qualified dental professionals is dedicated to providing 
            you with the best possible care in a comfortable environment.
          </p>
        </div>

        {/* Featured Doctor - Head Doctor */}
        <div className="mb-16">
          <div className="group relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/20 perspective-1000">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-80 lg:h-auto overflow-hidden">
                <img
                  src={doctors[0].image}
                  alt={doctors[0].name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary-900/50 lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent lg:hidden" />
                
                {/* Featured Badge */}
                <div className="absolute top-6 left-6 bg-gold-500 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4" fill="currentColor" />
                  Head Doctor
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <h3 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold mb-2">
                  {doctors[0].name}
                </h3>
                <p className="text-primary-200 text-lg font-medium mb-6">{doctors[0].role}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-gold-400" />
                    <span className="text-primary-100">{doctors[0].qualifications}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gold-400" />
                    <span className="text-primary-100">{doctors[0].experience}</span>
                  </div>
                </div>

                <p className="text-primary-100 leading-relaxed mb-6 font-[family-name:var(--font-outfit)]">
                  {doctors[0].bio}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl border border-white/20 w-fit">
                  <span className="text-sm text-primary-200">Specialization:</span>
                  <span className="text-sm font-semibold text-white">{doctors[0].specialization}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Doctors */}
        <div className="grid md:grid-cols-2 gap-8">
          {doctors.slice(1).map((doctor, index) => (
            <div
              key={index}
              className="group card-3d bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-primary-800">
                    {doctor.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-slate-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">{doctor.qualifications}</p>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4 font-[family-name:var(--font-outfit)]">
                  {doctor.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-lg text-xs font-medium">
                    {doctor.experience}
                  </span>
                  <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-lg text-xs font-medium">
                    {doctor.specialization}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
