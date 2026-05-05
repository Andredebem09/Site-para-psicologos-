import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2 } from 'lucide-react';
import './Approach.css';

const principles = [
  {
    title: 'Escuta Ativa e Empática',
    description: 'Cada sessão começa com uma escuta genuína, sem julgamentos. Entendo que cada história é única e merece respeito.',
  },
  {
    title: 'Base Científica',
    description: 'Utilizo técnicas validadas pela Terapia Cognitivo-Comportamental (TCC), com evidências comprovadas de eficácia.',
  },
  {
    title: 'Ferramentas Práticas',
    description: 'Além da reflexão, ofereço exercícios e estratégias concretas que você pode aplicar no dia a dia.',
  },
  {
    title: 'Ritmo Respeitoso',
    description: 'O processo terapêutico respeita seu tempo. Não há pressão — cada passo é dado quando você estiver pronto(a).',
  },
  {
    title: 'Visão Integral',
    description: 'Considero todos os aspectos da sua vida: emocional, social, profissional e físico, de forma integrada.',
  },
  {
    title: 'Sigilo Absoluto',
    description: 'Tudo o que é compartilhado em sessão é protegido pelo sigilo profissional, garantido pelo Código de Ética.',
  },
];

export default function Approach() {
  const ref = useScrollReveal();

  return (
    <section className="approach" id="abordagem" ref={ref}>
      <div className="approach__bg">
        <div className="organic-blob approach__blob approach__blob--1" />
      </div>

      <div className="section-container">
        <div className="approach__layout">
          <div className="approach__intro">
            <span className="section-label reveal">Abordagem</span>
            <h2 className="section-title approach__title reveal reveal-delay-1">
              Terapia Cognitivo-<br />
              <em>Comportamental</em>
            </h2>
            <hr className="section-divider reveal reveal-delay-2" />
            <p className="approach__text reveal reveal-delay-2">
              A TCC é uma abordagem terapêutica que entende a relação entre 
              pensamentos, emoções e comportamentos. Através dela, identificamos 
              padrões que geram sofrimento e desenvolvemos novas formas de 
              pensar e agir, promovendo mudanças reais na sua vida.
            </p>
            <p className="approach__text reveal reveal-delay-3">
              É uma das abordagens mais pesquisadas e com maior evidência 
              científica de eficácia para diversos transtornos e dificuldades 
              emocionais.
            </p>
          </div>

          <div className="approach__principles">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className={`approach__principle reveal reveal-delay-${Math.min(i + 1, 6)}`}
              >
                <div className="approach__principle-icon">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 className="approach__principle-title">{p.title}</h3>
                  <p className="approach__principle-desc">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
