import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://www.designarena.ai/u/a99fc487-214a-4d74-8d57-14e940e82b2b',
    alt: 'Shreeji Dental Hospital Exterior',
    caption: 'Our Hospital',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/images/clinic-interior.jpg',
    alt: 'Modern Treatment Room',
    caption: 'Treatment Room',
    span: '',
  },
  {
    src: 'https://www.designarena.ai/u/5e5d32af-0d68-4bad-a2aa-6b1419a7d513',
    alt: 'Reception Area',
    caption: 'Reception Area',
    span: '',
  },
  {
    src: '/images/dental-equipment.jpg',
    alt: 'Advanced Equipment',
    caption: 'Latest Equipment',
    span: '',
  },
  {
    src: 'https://www.designarena.ai/u/e284122a-2d69-4f64-9160-c490c0a7d1ab',
    alt: 'Shreeji Dental Clinic',
    caption: 'Our Clinic',
    span: 'col-span-2',
  },
  {
    src: '/images/happy-patient.jpg',
    alt: 'Happy Patient',
    caption: 'Patient Satisfaction',
    span: '',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Gallery
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Take a{' '}
            <span className="gradient-text">Look Inside</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-[family-name:var(--font-outfit)] font-light">
            Explore our modern facility equipped with the latest dental technology 
            designed for your comfort and care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${image.span}`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-semibold">{image.caption}</p>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-100 scale-75">
                <ZoomIn className="w-5 h-5 text-primary-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-slide-up"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="text-center text-white mt-4 font-medium text-lg">
              {galleryImages[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
