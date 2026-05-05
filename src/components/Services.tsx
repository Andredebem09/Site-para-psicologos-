import { useScrollReveal } from '../hooks/useScrollReveal';
import { Brain, Users, Heart, Monitor, Baby, Sparkles } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: Brain,
    title: 'Terapia Individual',
    description:
      'Sessões personalizadas para autoconhecimento, manejo de ansiedade, depressão, estresse e questões emocionais.',
    tags: ['Ansiedade', 'Depressão', 'Autoestima'],
  },
  {
    icon: Users,
    title: 'Terapia de Casal',
    description:
      'Trabalho focado na comunicação, resolução de conflitos e fortalecimento do vínculo afetivo entre parceiros.',
    tags: ['Comunicação', 'Conflitos', 'Vínculo'],
  },
  {
    icon: Heart,
    title: 'Orientação Parental',
    description:
      'Suporte para pais e mães que buscam estratégias para a educação emocional e desenvolvimento dos filhos.',
    tags: ['Limites', 'Diálogo', 'Educação'],
  },
  {
    icon: Monitor,
    title: 'Atendimento Online',
    description:
      'Sessões seguras e éticas por videochamada, mantendo a mesma qualidade do atendimento presencial.',
    tags: ['Flexibilidade', 'Conforto', 'Sigilo'],
  },
  {
    icon: Baby,
    title: 'Psicologia Infantil',
    description:
      'Avaliação e acompanhamento do desenvolvimento emocional e comportamental de crianças em todas as fases.',
    tags: ['Desenvolvimento', 'Comportamento', 'Lúdico'],
  },
  {
    icon: Sparkles,
    title: 'Desenvolvimento Pessoal',
    description:
      'Processo terapêutico voltado para o crescimento pessoal, carreira, propósito e qualidade de vida.',
    tags: ['Carreira', 'Propósito', 'Qualidade de Vida'],
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section className="services" id="servicos" ref={ref}>
      <div className="section-container">
        <div className="services__header">
          <span className="section-label reveal">Serviços</span>
          <h2 className="section-title services__title reveal reveal-delay-1">
            Como posso te ajudar
          </h2>
          <p className="section-subtitle reveal reveal-delay-2">
            Cada pessoa é única. Ofereço diferentes modalidades de atendimento
            para melhor atender às suas necessidades.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`services__card reveal reveal-delay-${Math.min(i + 1, 6)}`}
              id={`service-card-${i}`}
            >
              <div className="services__card-icon">
                <service.icon size={24} />
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <div className="services__card-tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="services__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
