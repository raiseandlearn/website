import React, { useEffect, useMemo, useRef, useState } from 'react';

const prefersReducedMotion = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const normalizeImages = (images) => (Array.isArray(images) ? images.filter(Boolean) : []);

const HeroCarousel = ({ images, fallbackSrc, intervalMs = 6500 }) => {
  const slides = useMemo(() => normalizeImages(images), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const resolvedSlides = slides.length > 0 ? slides : (fallbackSrc ? [fallbackSrc] : []);

  useEffect(() => {
    if (prefersReducedMotion() || isPaused) return undefined;
    if (resolvedSlides.length <= 1) return undefined;

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % resolvedSlides.length);
    }, intervalMs);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [intervalMs, isPaused, resolvedSlides.length]);

  useEffect(() => {
    if (activeIndex >= resolvedSlides.length) setActiveIndex(0);
  }, [activeIndex, resolvedSlides.length]);

  return (
    <div
      className="hero-carousel"
      aria-hidden="true"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {resolvedSlides.map((src, idx) => (
        <img
          key={`${src}-${idx}`}
          className={`hero-carousel-image ${idx === activeIndex ? 'is-active' : ''}`}
          src={src}
          alt=""
          loading={idx === activeIndex ? 'eager' : 'lazy'}
          draggable="false"
        />
      ))}
    </div>
  );
};

export default HeroCarousel;

