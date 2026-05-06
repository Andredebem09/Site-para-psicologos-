import { useState, useEffect, useCallback } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
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
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    
    const applyTheme = (isLightMode: boolean) => {
      setIsLight(isLightMode);
      if (isLightMode) {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
    };

    if (savedTheme) {
      applyTheme(savedTheme === 'light');
    } else {
      applyTheme(mediaQuery.matches);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setIsLight(!isLight);
    if (!isLight) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

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
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    setMenuOpen(false);

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
              <span className="navbar__logo-title">Premium</span>
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

          <div className="navbar__actions">
            <button 
              onClick={toggleTheme} 
              className="navbar__theme-toggle"
              aria-label="Alternar tema"
            >
              {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>

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
          </div>
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
        <div className="navbar__mobile-actions">
          <button 
            onClick={toggleTheme} 
            className="navbar__mobile-theme-toggle"
            aria-label="Alternar tema"
          >
            {isLight ? (
              <><Moon size={20} /> Modo Escuro</>
            ) : (
              <><Sun size={20} /> Modo Claro</>
            )}
          </button>
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
      </div>
    </>
  );
}
