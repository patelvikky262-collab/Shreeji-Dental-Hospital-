import { useState, useEffect } from 'react';
import { clinicData } from '../data/clinic';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, ArrowLeft, ArrowRight, Quote, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function Stories() {
  const { stories, faqs } = clinicData;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Auto swipe every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % stories.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, stories.length]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const activeStory = stories[currentIdx];

  return (
    <section id="stories" className="relative overflow-hidden bg-cream-100 py-20 md:py-28">
      {/* Background Patterns & Glows */}
      <div className="absolute inset-0 bg-mandala-light pointer-events-none" />
      <div className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-gold-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-16 h-96 w-96 rounded-full bg-maroon-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-center mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-maroon-700/25 bg-maroon-700/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-maroon-800">
            <span className="w-1.5 h-1.5 rounded-full bg-maroon-700" />
            <span>Patient Stories</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-maroon-950">
            Smiles That Speak <span className="gold-text-static">For Us</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-maroon-950/70 leading-relaxed max-w-2xl mx-auto">
            Real words from the families of Rampura, Rohat, Kalali and Pali who trust Shreeji with their smiles.
          </p>
        </div>

        {/* Auto Left Swipe Review Carousel Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative overflow-hidden rounded-[2rem] border-2 border-gold-500/40 bg-gradient-to-br from-cream-50 to-cream-200 p-8 sm:p-10 md:p-12 shadow-[0_30px_80px_-24px_rgba(74,16,27,0.4)]"
        >
          {/* Background Big Quote Mark */}
          <Quote
            size={130}
            className="absolute -left-4 -top-4 text-maroon-700/10 pointer-events-none"
            fill="currentColor"
          />

          <div className="relative min-h-[220px] sm:min-h-[200px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.figure
                key={currentIdx}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4"
              >
                {/* 5 Stars */}
                <div className="flex gap-1 text-gold-600">
                  {[...Array(5)].map((_, h) => (
                    <Star key={h} size={19} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="font-display text-xl sm:text-2xl md:text-[1.7rem] font-medium leading-snug text-maroon-900">
                  “{activeStory.text}”
                </blockquote>

                {/* Author Info */}
                <figcaption className="pt-2 flex items-center gap-4 flex-wrap">
                  <span className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-gradient-to-br from-maroon-700 to-maroon-900 font-display text-lg sm:text-xl font-bold text-gold-300 shadow-lg shrink-0">
                    {activeStory.name.charAt(0)}
                  </span>

                  <div>
                    <span className="block font-bold text-base text-maroon-900">
                      {activeStory.name}
                    </span>
                    <span className="block text-xs sm:text-sm text-maroon-950/60">
                      {activeStory.village} • {activeStory.treatment}
                    </span>
                  </div>

                  {/* Verified Patient Pill */}
                  <span className="ml-auto hidden items-center gap-1.5 rounded-full bg-maroon-700/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-maroon-700 sm:inline-flex border border-maroon-700/15">
                    <ShieldCheck size={14} className="text-maroon-700" />
                    <span>Verified Patient</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Bottom Controls (Dots & Navigation Arrows) */}
          <div className="relative mt-8 pt-4 border-t border-maroon-700/10 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {stories.map((_, h) => (
                <button
                  key={h}
                  aria-label={`Show story ${h + 1}`}
                  onClick={() => setCurrentIdx(h)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    h === currentIdx
                      ? 'w-10 bg-maroon-700'
                      : 'w-2.5 bg-maroon-700/25 hover:bg-maroon-700/50'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous review"
                className="grid h-10 w-10 place-items-center rounded-full border border-maroon-700/20 bg-cream-50/80 text-maroon-900 hover:bg-maroon-700 hover:text-white transition shadow-sm"
              >
                <ArrowLeft size={17} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next review"
                className="grid h-10 w-10 place-items-center rounded-full bg-maroon-800 text-gold-200 hover:bg-maroon-700 shadow transition"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto space-y-8 pt-4">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-maroon-700">
              <HelpCircle size={14} />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon-950">
              Common Questions Answered
            </h3>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-maroon-700/15 bg-white overflow-hidden transition shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-display font-bold text-maroon-950 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-maroon-700 transition"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-full bg-cream-100 text-maroon-800 shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-maroon-950/80 text-sm sm:text-base leading-relaxed border-t border-maroon-700/10 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
