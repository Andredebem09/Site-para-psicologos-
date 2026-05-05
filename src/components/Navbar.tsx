import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#abordagem', label: 'Abordagem' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  const handleMobileNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    // First unlock scrolling
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    // Close the menu
    setMenuOpen(false);

    // Scroll to target after a brief delay so the DOM updates
    const targetId = href.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const navbarHeight = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--menu-open' : ''}`} id="navbar">
        <nav className="navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Ir ao topo">
          <span className="navbar__logo-symbol">ψ</span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Psicólogo</span>
            <span className="navbar__logo-title">area que atua</span>
          </span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary navbar__cta"
          id="navbar-whatsapp-btn"
        >
          Agendar Consulta
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          id="navbar-toggle-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ animationDelay: `${i * 60}ms` }}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => handleMobileNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp navbar__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </>
  );
}
