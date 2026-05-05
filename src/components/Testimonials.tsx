import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'O Psicólogo me ajudou a enxergar situações da minha vida de uma forma completamente diferente. Hoje me sinto mais leve e confiante para enfrentar os desafios do dia a dia.',
    author: 'Carolina M.',
    role: 'Terapia Individual',
    stars: 5,
  },
  {
    text: 'Depois de anos resistindo à terapia, encontrei no Psicólogo um espaço acolhedor e sem julgamentos. Foi a melhor decisão que tomei. Minha ansiedade diminuiu muito.',
    author: 'Ricardo P.',
    role: 'Terapia Individual',
    stars: 5,
  },
  {
    text: 'A terapia de casal transformou nosso relacionamento. Aprendemos a nos comunicar de verdade e a resolver conflitos de forma saudável. Recomendo de olhos fechados!',
    author: 'Ana & Pedro',
    role: 'Terapia de Casal',
    stars: 5,
  },
  {
    text: 'Minha filha estava com dificuldades na escola e muito ansiosa. Com o acompanhamento, ela melhorou demais. O atendimento é muito carinhoso e profissional.',
    author: 'Fernanda L.',
    role: 'Psicologia Infantil',
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useScrollReveal();

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials" id="depoimentos" ref={ref}>
      <div className="testimonials__bg">
        <div className="organic-blob testimonials__blob" />
      </div>

      <div className="section-container">
        <div className="testimonials__header">
          <span className="section-label reveal">Depoimentos</span>
          <h2 className="section-title testimonials__title reveal reveal-delay-1">
            O que dizem sobre o <em>processo</em>
          </h2>
        </div>

        <div className="testimonials__carousel reveal reveal-delay-2">
          <div className="testimonials__quote-icon">
            <Quote size={40} />
          </div>

          <div className="testimonials__content" key={current}>
            <div className="testimonials__stars">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <Star key={i} size={16} fill="var(--color-gold)" color="var(--color-gold)" />
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
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot${i === current ? ' testimonials__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
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
