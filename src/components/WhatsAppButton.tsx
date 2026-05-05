import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    const pulseTimer = setTimeout(() => {
      setPulse(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  return (
    <a
      href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Psic%C3%B3logo!%20Gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab${visible ? ' whatsapp-fab--visible' : ''}${pulse ? ' whatsapp-fab--pulse' : ''}`}
      aria-label="Enviar mensagem pelo WhatsApp"
      id="whatsapp-floating-btn"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-fab__tooltip">Fale comigo!</span>
    </a>
  );
}
