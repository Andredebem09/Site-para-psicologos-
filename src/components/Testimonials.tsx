import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'O atendimento superou minhas expectativas. A clareza e a profundidade das sessões trouxeram resultados reais para minha vida e carreira.',
    author: 'Carolina M.',
    role: 'Terapia Individual',
    stars: 5,
  },
  {
    text: 'Encontrei um espaço de escuta verdadeiramente livre de julgamentos. O método de trabalho é excepcional e muito acolhedor.',
    author: 'Ricardo P.',
    role: 'Terapia Individual',
    stars: 5,
  },
  {
    text: 'Profissionalismo ímpar. A condução das sessões nos ajudou a reconstruir nossa comunicação com muita elegância e respeito.',
    author: 'Ana & Pedro',
    role: 'Terapia de Casal',
    stars: 5,
  },
];

const AUTOPLAY_TIME = 5000;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const ref = useScrollReveal();
  const startTimeRef = useRef<number>(Date.now());
  const rafRef = useRef<number>(0);

  const startAnimation = () => {
    startTimeRef.current = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const currentProgress = Math.min((elapsed / AUTOPLAY_TIME) * 100, 100);
      setProgress(currentProgress);
      
      if (elapsed < AUTOPLAY_TIME) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        next();
      }
    };
    rafRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    setProgress(0);
    stopAnimation();
    startAnimation();
  };

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    setProgress(0);
    stopAnimation();
    startAnimation();
  };

  const goTo = (index: number) => {
    setCurrent(index);
    setProgress(0);
    stopAnimation();
    startAnimation();
  };

  useEffect(() => {
    startAnimation();
    return stopAnimation;
  }, []);

  return (
    <section className="testimonials" id="depoimentos" ref={ref}>
      <div className="testimonials__bg">
        <div className="ambient-glow testimonials__blob" />
      </div>

      <div className="section-container">
        <div className="testimonials__header">
          <span className="section-label reveal">Experiências</span>
          <h2 className="section-title testimonials__title reveal reveal-delay-1">
            Histórias de <em>transformação</em>
          </h2>
        </div>

        <div className="testimonials__carousel glass-card reveal reveal-delay-2">
          <div className="testimonials__quote-icon">
            <Quote size={40} />
          </div>

          <div className="testimonials__content" key={current}>
            <div className="testimonials__stars">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <Star key={i} size={16} fill="var(--color-sage)" color="var(--color-sage)" />
              ))}
            </div>
            <blockquote className="testimonials__text">
              "{testimonials[current].text}"
            </blockquote>
            <div className="testimonials__author">
              <div className="testimonials__author-avatar">
                {testimonials[current].author[0]}
              </div>
              <div>
                <span className="testimonials__author-name">
                  {testimonials[current].author}
                </span>
                <span className="testimonials__author-role">
                  {testimonials[current].role}
                </span>
              </div>
            </div>
          </div>

          <div className="testimonials__nav">
            <button
              className="testimonials__nav-btn"
              onClick={prev}
              aria-label="Depoimento anterior"
              id="testimonial-prev-btn"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="testimonials__progress-container">
              <div className="testimonials__dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonials__dot${i === current ? ' testimonials__dot--active' : ''}`}
                    onClick={() => goTo(i)}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  >
                    {i === current && (
                      <span 
                        className="testimonials__dot-progress" 
                        style={{ width: `${progress}%` }} 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="testimonials__nav-btn"
              onClick={next}
              aria-label="Próximo depoimento"
              id="testimonial-next-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
