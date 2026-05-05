import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight, Leaf } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="hero" id="hero" ref={ref}>
      {/* Organic background shapes */}
      <div className="hero__bg">
        <div className="organic-blob hero__blob hero__blob--1" />
        <div className="organic-blob hero__blob hero__blob--2" />
        <div className="organic-blob hero__blob hero__blob--3" />
        <div className="hero__lines" />
      </div>

      <div className="section-container hero__content">
        <div className="hero__text">
          <div className="hero__badge reveal">
            <Leaf size={14} />
            <span>Atendimento Presencial & Online</span>
          </div>

          <h1 className="hero__title reveal reveal-delay-1">
            Cuide da sua <br />
            <em>saúde mental</em> <br />
            com quem cuida de verdade
          </h1>

          <p className="hero__subtitle reveal reveal-delay-2">
            Ofereço um espaço seguro e acolhedor para você se conhecer melhor,
            superar desafios emocionais e construir uma vida com mais equilíbrio
            e significado.
          </p>

          <div className="hero__actions reveal reveal-delay-3">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero__cta"
              id="hero-whatsapp-btn"
            >
              Agendar Consulta
              <ArrowRight size={18} />
            </a>
            <a href="#sobre" className="btn btn-outline hero__cta-secondary">
              Conheça-me
            </a>
          </div>

          <div className="hero__credentials reveal reveal-delay-4">
            <div className="hero__credential">
              <span className="hero__credential-number">CRP 06/123456</span>
              <span className="hero__credential-label">Registro Profissional</span>
            </div>
            <div className="hero__credential-divider" />
            <div className="hero__credential">
              <span className="hero__credential-number">+10 anos</span>
              <span className="hero__credential-label">de Experiência</span>
            </div>
            <div className="hero__credential-divider" />
            <div className="hero__credential">
              <span className="hero__credential-number">+2.000</span>
              <span className="hero__credential-label">Pacientes Atendidos</span>
            </div>
          </div>
        </div>

        <div className="hero__visual reveal reveal-delay-2">
          <div className="hero__image-wrapper">
            <div className="hero__image-frame">
              <div className="hero__image-placeholder">
                <span className="hero__image-caption">Psicólogo</span>
              </div>
            </div>
            <div className="hero__image-decoration" />
            <div className="hero__image-accent" />
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator reveal reveal-delay-5">
        <span>Role para explorar</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
