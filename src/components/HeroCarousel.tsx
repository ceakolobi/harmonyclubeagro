import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BANNER_SLIDES } from '../data/harmonyData';
import { SusepLogo } from './SusepLogo';
import { PageRoute } from '../types';
import { trackEvent } from '../services/analytics';
import { ChevronLeft, ChevronRight, Calculator, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

interface HeroCarouselProps {
  onNavigate: (page: PageRoute) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % BANNER_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? BANNER_SLIDES.length - 1 : prevIndex - 1
    );
  }, []);

  // Autoplay timer (4.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleCtaClick = (slide: typeof BANNER_SLIDES[0]) => {
    trackEvent('quote_click', {
      slide_id: slide.id,
      slide_title: slide.title
    });

    if (slide.isExternalLink && typeof slide.ctaTarget === 'string') {
      window.open(slide.ctaTarget, '_blank', 'noopener,noreferrer');
    } else if (typeof slide.ctaTarget === 'string') {
      onNavigate(slide.ctaTarget as PageRoute);
    }
  };

  return (
    <section
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] bg-slate-950 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Banner principal rotativo"
    >
      {/* Slides Container */}
      {BANNER_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Dark Gradient Overlays */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-linear"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Dual Vignette & Gradient for High Typography Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
            </div>

            {/* Slide Text Content Layer */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl space-y-4 md:space-y-6 pt-8">
                
                {/* Tag / Category Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-orange-400 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
                  {slide.tag}
                </div>

                {/* SUSEP Slide Special Branding */}
                <div className="h-20 flex items-center">
                  {slide.isSusepSlide && (
                    <div className="rounded-xl max-w-sm backdrop-blur-md">
                      <SusepLogo variant="full" className="h-16" />
                    </div>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display drop-shadow-md">
                  {slide.title}
                </h1>

                {/* Subtitle & Complement */}
                <div className="space-y-2">
                  <p className="text-lg sm:text-xl font-bold text-orange-400">
                    {slide.subtitle}
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                    {slide.complement}
                  </p>
                </div>

                {/* Slide CTA Button */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleCtaClick(slide)}
                    className={`px-6 py-3.5 rounded-xl font-extrabold text-sm tracking-wider uppercase transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl flex items-center gap-3 ${
                      slide.isSusepSlide
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/25'
                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/30'
                    }`}
                  >
                    {slide.isSusepSlide ? (
                      <>
                        <ShieldCheck className="w-5 h-5 text-slate-950" />
                        <span>{slide.ctaText}</span>
                        <ExternalLink className="w-4 h-4 text-slate-950" />
                      </>
                    ) : (
                      <>
                        <Calculator className="w-5 h-5" />
                        <span>{slide.ctaText}</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {!slide.isSusepSlide && (
                    <button
                      onClick={() => onNavigate('cotacao')}
                      className="px-5 py-3.5 rounded-xl font-bold text-xs text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 backdrop-blur-sm transition-all"
                    >
                      COTAÇÃO RÁPIDA
                    </button>
                  )}
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-slate-700 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 hidden sm:flex items-center justify-center"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white border border-slate-700 backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 hidden sm:flex items-center justify-center"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators / Progress Dots */}
      <div className="absolute bottom-6 inset-x-0 z-20 flex items-center justify-center gap-2 px-4">
        {BANNER_SLIDES.map((s, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                isActive
                  ? 'w-8 h-2.5 bg-orange-500 shadow-lg shadow-orange-500/50'
                  : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
};
