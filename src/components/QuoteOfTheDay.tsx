import { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Lightbulb, RefreshCw } from 'lucide-react';
import './QuoteOfTheDay.css';

interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

export default function QuoteOfTheDay() {
  const [quote, setQuote] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const ref = useScrollReveal();

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data: AdviceResponse = await response.json();
      setQuote(data.slip.advice);
    } catch (error) {
      setQuote('A resiliência é a arte de navegar nas tempestades sem perder a própria essência.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="quote-section" ref={ref}>
      <div className="section-container">
        <div className="quote-card glass-card reveal">
          <div className="quote-header">
            <Lightbulb size={24} className="quote-icon" />
            <h3 className="quote-title">Reflexão do Dia</h3>
          </div>
          <div className="quote-content">
            {loading ? (
              <div className="quote-loading">Carregando inspiração...</div>
            ) : (
              <blockquote className="quote-text">"{quote}"</blockquote>
            )}
          </div>
          <button 
            className="quote-refresh" 
            onClick={fetchQuote} 
            disabled={loading}
            aria-label="Nova reflexão"
          >
            <RefreshCw size={16} className={loading ? 'spinning' : ''} />
            <span>Nova Reflexão</span>
          </button>
        </div>
      </div>
    </section>
  );
}
