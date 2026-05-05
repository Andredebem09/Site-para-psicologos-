import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageCircle, CalendarCheck, Handshake, TrendingUp } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Entre em Contato',
    description: 'Envie uma mensagem pelo WhatsApp. Terei prazer em esclarecer suas dúvidas e agendar o melhor horário.',
  },
  {
    icon: CalendarCheck,
    step: '02',
    title: 'Primeira Sessão',
    description: 'Na primeira consulta, vamos nos conhecer. Você compartilha o que te trouxe e juntos definimos os objetivos.',
  },
  {
    icon: Handshake,
    step: '03',
    title: 'Plano Terapêutico',
    description: 'Com base na avaliação inicial, elaboro um plano personalizado com frequência e técnicas mais adequadas.',
  },
  {
    icon: TrendingUp,
    step: '04',
    title: 'Evolução Contínua',
    description: 'Acompanhamos seu progresso juntos, ajustando o processo para garantir resultados significativos.',
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section className="how" id="como-funciona" ref={ref}>
      <div className="section-container">
        <div className="how__header">
          <span className="section-label reveal">Como Funciona</span>
          <h2 className="section-title how__title reveal reveal-delay-1">
            Seu caminho até o <em>bem-estar</em>
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            O processo terapêutico é simples de iniciar. Veja como funciona:
          </p>
        </div>

        <div className="how__timeline">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`how__step reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <div className="how__step-indicator">
                <div className="how__step-number">{step.step}</div>
                {i < steps.length - 1 && <div className="how__step-line" />}
              </div>
              <div className="how__step-content">
                <div className="how__step-icon">
                  <step.icon size={22} />
                </div>
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
