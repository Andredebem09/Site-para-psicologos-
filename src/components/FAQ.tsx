import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'Como sei se preciso de terapia?',
    answer:
      'Se você está enfrentando dificuldades emocionais, sentindo-se sobrecarregado(a), com problemas de relacionamento, ansiedade, tristeza persistente ou simplesmente quer se conhecer melhor, a terapia pode ser muito benéfica. Não é preciso estar em crise para buscar ajuda.',
  },
  {
    question: 'Quanto tempo dura o processo terapêutico?',
    answer:
      'O tempo varia conforme as necessidades de cada pessoa. Algumas questões podem ser trabalhadas em 3 a 6 meses, enquanto processos mais profundos podem levar mais tempo. Na avaliação inicial, conversamos sobre expectativas e objetivos para que você tenha uma previsão.',
  },
  {
    question: 'Qual o valor da consulta?',
    answer:
      'O valor é combinado na primeira conversa pelo WhatsApp. Trabalho com valores justos e acessíveis, e posso disponibilizar valores sociais em casos específicos. O investimento em saúde mental é um dos mais importantes que você pode fazer.',
  },
  {
    question: 'O atendimento online é tão eficaz quanto o presencial?',
    answer:
      'Sim! Diversas pesquisas científicas demonstram que a terapia online é tão eficaz quanto a presencial. A sessão online segue o mesmo rigor ético e técnico, com a vantagem da flexibilidade de horário e local.',
  },
  {
    question: 'Tudo que eu falar em sessão é sigiloso?',
    answer:
      'Absolutamente. O sigilo profissional é garantido pelo Código de Ética do Psicólogo e é um pilar fundamental do meu trabalho. Tudo o que é compartilhado em sessão permanece estritamente confidencial.',
  },
  {
    question: 'Como faço para agendar uma consulta?',
    answer:
      'É simples! Clique no botão de WhatsApp neste site e envie uma mensagem. Responderei o mais breve possível para encontrarmos o melhor horário. Você também pode tirar dúvidas antes de agendar.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className={`reveal reveal-delay-${Math.min(index + 1, 6)}`}>
      <div className={`faq__item${isOpen ? ' faq__item--open' : ''}`}>
        <button
          className="faq__question"
          onClick={onToggle}
          aria-expanded={isOpen}
          id={`faq-question-${index}`}
        >
          <span>{question}</span>
          <ChevronDown size={20} className="faq__chevron" />
        </button>
        <div className="faq__answer-wrapper">
          <div className="faq__answer-inner">
            <p className="faq__answer">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useScrollReveal();

  return (
    <section className="faq" id="faq" ref={ref}>
      <div className="section-container">
        <div className="faq__layout">
          <div className="faq__intro">
            <span className="section-label reveal">FAQ</span>
            <h2 className="section-title faq__title reveal reveal-delay-1">
              Perguntas <br />
              <em>frequentes</em>
            </h2>
            <hr className="section-divider reveal reveal-delay-2" />
            <p className="faq__text reveal reveal-delay-2">
              Tire suas dúvidas sobre o processo terapêutico.
              Se não encontrar o que procura, entre em contato pelo WhatsApp.
            </p>
          </div>

          <div className="faq__list">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
