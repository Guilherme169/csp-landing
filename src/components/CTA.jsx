import { useState } from 'react';

export default function CTA() {
  const [hovered, setHovered] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById('form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section style={{ backgroundColor: 'var(--laranja)', padding: '96px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2 style={{
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '36px',
          lineHeight: 1.15,
          marginBottom: '12px',
          letterSpacing: '-0.5px',
        }}>
          Pronto para profissionalizar sua marmitaria?
        </h2>
        <p style={{
          color: 'rgba(255, 255, 255, 0.82)',
          fontSize: '17px',
          marginBottom: '36px',
          lineHeight: 1.6,
        }}>
          Orçamento personalizado, resposta no mesmo dia útil. Sem compromisso.
        </p>
        <button
          onClick={scrollToForm}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            backgroundColor: hovered ? 'var(--texto)' : '#ffffff',
            color: hovered ? '#ffffff' : 'var(--texto)',
            fontWeight: 700,
            fontSize: '16px',
            padding: '15px 40px',
            borderRadius: '10px',
            transition: 'background-color 0.2s, color 0.2s',
          }}
        >
          Solicitar orçamento agora
        </button>
      </div>
    </section>
  );
}
