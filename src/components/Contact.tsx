import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageCircle, MapPin, Clock, Phone } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="contact" id="contato" ref={ref}>
      <div className="contact__bg">
        <div className="organic-blob contact__blob contact__blob--1" />
        <div className="organic-blob contact__blob contact__blob--2" />
      </div>

      <div className="section-container">
        <div className="contact__layout">
          <div className="contact__info">
            <span className="section-label reveal">Contato</span>
            <h2 className="section-title contact__title reveal reveal-delay-1">
              Vamos dar o <br />
              <em>primeiro passo</em>?
            </h2>
            <hr className="section-divider reveal reveal-delay-2" />
            <p className="contact__text reveal reveal-delay-2">
              Estou pronta para te ouvir. Envie uma mensagem pelo WhatsApp 
              e vamos conversar sobre como posso te ajudar.
            </p>

            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Psic%C3%B3logo!%20Gostaria%20de%20saber%20mais%20sobre%20o%20atendimento%20e%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp contact__whatsapp-btn reveal reveal-delay-3"
              id="contact-whatsapp-btn"
            >
              <MessageCircle size={20} />
              Conversar pelo WhatsApp
            </a>
          </div>

          <div className="contact__details">
            <div className="contact__card reveal reveal-delay-2">
              <div className="contact__card-item">
                <div className="contact__card-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact__card-label">Localização</span>
                  <span className="contact__card-value">
                    Rua Augusta, 1234 — Sala 56<br />
                    Consolação, São Paulo — SP
                  </span>
                </div>
              </div>

              <div className="contact__card-divider" />

              <div className="contact__card-item">
                <div className="contact__card-icon">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="contact__card-label">Horário de Atendimento</span>
                  <span className="contact__card-value">
                    Segunda a Sexta: 8h — 20h<br />
                    Sábado: 8h — 14h
                  </span>
                </div>
              </div>

              <div className="contact__card-divider" />

              <div className="contact__card-item">
                <div className="contact__card-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="contact__card-label">Telefone / WhatsApp</span>
                  <span className="contact__card-value">
                    (11) 99999-9999
                  </span>
                </div>
              </div>
            </div>

            <div className="contact__map reveal reveal-delay-3">
              <iframe
                title="Localização do Consultório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6533!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzknMTEuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
