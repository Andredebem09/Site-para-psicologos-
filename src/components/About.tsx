import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import './About.css';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section className="about" id="sobre" ref={ref}>
      <div className="section-container about__grid">
        <div className="about__image-col reveal">
          <div className="about__image-stack">
            <div className="about__image-main">
              <div className="about__photo-placeholder">
                <span className="about__photo-initial">M</span>
              </div>
            </div>
            <div className="about__image-float">
              <div className="about__years">
                <span className="about__years-num">10+</span>
                <span className="about__years-text">anos cuidando<br />de pessoas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="section-label reveal">Sobre Mim</span>
          <h2 className="section-title about__title reveal reveal-delay-1">
            Um espaço de escuta, <br />
            <em>acolhimento</em> e transformação
          </h2>
          <hr className="section-divider reveal reveal-delay-2" />
          <p className="about__text reveal reveal-delay-2">
            Sou <strong>Psicólogo</strong>, atuando na area que atua e registrado no
            CRP 06/123456. Minha jornada na psicologia começou pela curiosidade
            em entender o comportamento humano e pela vontade de ajudar pessoas
            a encontrarem seu melhor caminho.
          </p>
          <p className="about__text reveal reveal-delay-3">
            Com formação em Psicologia pela USP e especialização em Terapia
            Cognitivo-Comportamental pela PUC-SP, desenvolvo um trabalho
            focado em compreender suas necessidades individuais e oferecer
            ferramentas práticas para o seu desenvolvimento pessoal.
          </p>

          <div className="about__highlights reveal reveal-delay-4">
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <GraduationCap size={20} />
              </div>
              <div>
                <span className="about__highlight-title">Formação</span>
                <span className="about__highlight-desc">Psicologia — USP</span>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <Award size={20} />
              </div>
              <div>
                <span className="about__highlight-title">Especialização</span>
                <span className="about__highlight-desc">TCC — PUC-SP</span>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <BookOpen size={20} />
              </div>
              <div>
                <span className="about__highlight-title">Atualização</span>
                <span className="about__highlight-desc">Cursos e supervisões contínuas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
