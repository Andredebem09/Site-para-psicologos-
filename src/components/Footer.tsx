import { Heart, Camera, Mail } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="section-container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-symbol">ψ</span>
              <span className="footer__logo-text">
                <span className="footer__logo-name">Psicólogo</span>
                <span className="footer__logo-title">area que atua — CRP 06/123456</span>
              </span>
            </div>
            <p className="footer__desc">
              Psicólogo com foco na area que atua.
              Atendimento presencial e online para adultos, casais e crianças.
            </p>
            <div className="footer__social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <Camera size={18} />
              </a>
              <a
                href="mailto:contato@psicologo.com.br"
                className="footer__social-link"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navegação</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Informações</h4>
            <ul className="footer__links">
              <li className="footer__info-item">
                <span className="footer__info-label">Endereço</span>
                <span>Rua Augusta, 1234 — Sala 56</span>
              </li>
              <li className="footer__info-item">
                <span className="footer__info-label">Horário</span>
                <span>Seg-Sex: 8h-20h | Sáb: 8h-14h</span>
              </li>
              <li className="footer__info-item">
                <span className="footer__info-label">WhatsApp</span>
                <span>(11) 99999-9999</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Psicólogo — Todos os direitos reservados.
          </p>
          <p className="footer__made">
            Feito com <Heart size={12} fill="var(--color-terracotta)" color="var(--color-terracotta)" /> para cuidar de quem cuida
          </p>
        </div>
      </div>
    </footer>
  );
}
