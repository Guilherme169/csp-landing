import { useState } from 'react';

const mediaStyles = `
  .hero-section {
    padding: 100px 24px 80px;
  }
  .hero-grid {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  .hero-h1 {
    font-size: 36px;
  }
  .hero-cta-primary {
    width: 100%;
  }
  @media (min-width: 768px) {
    .hero-section {
      padding: 112px 40px 96px;
    }
    .hero-grid {
      flex-direction: row;
      align-items: center;
      gap: 64px;
    }
    .hero-col-left,
    .hero-col-right {
      flex: 1;
    }
    .hero-h1 {
      font-size: 48px;
    }
    .hero-cta-primary {
      width: auto;
    }
  }
`;

export default function Hero() {
  const [ctaHovered, setCtaHovered] = useState(false);
  const [waCTAHovered, setWaCTAHovered] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById('form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <style>{mediaStyles}</style>
      <section className="hero-section" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="hero-grid" style={{ maxWidth: '1180px', margin: '0 auto' }}>

          {/* Left column */}
          <div className="hero-col-left">
            <p
              style={{
                color: 'var(--verde)',
                fontSize: '12px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '10px',
              }}
            >
              Embalagens para marmitarias
            </p>

            <p
              style={{
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--texto-leve)',
                marginBottom: '2px',
              }}
            >
              Bem-vindo à CSP Embalagens.
            </p>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--texto-leve)',
                lineHeight: 1.5,
                marginBottom: '24px',
              }}
            >
              Mais apresentação e destaque para sua marca.
            </p>

            <h1
              className="hero-h1"
              style={{
                fontWeight: 800,
                lineHeight: 1.08,
                color: 'var(--texto)',
                marginBottom: '20px',
                letterSpacing: '-1px',
              }}
            >
              Embalagens personalizadas que reduzem custo e profissionalizam sua marca
            </h1>

            <p
              style={{
                fontSize: '17px',
                color: 'var(--texto-medio)',
                lineHeight: 1.7,
                maxWidth: '480px',
                marginBottom: '32px',
              }}
            >
              Embalagens sob medida para marmitas congeladas, fitness e delivery.
              Qualidade que valoriza seu produto e fideliza seus clientes.
            </p>

            {/* Trust badges */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '36px',
              }}
            >
              {['+200 clientes', '+1M embalagens/ano', '+15 anos de mercado'].map((badge) => (
                <span
                  key={badge}
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '13px',
                    color: '#15803d',
                    fontWeight: 600,
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <button
                className="hero-cta-primary"
                onClick={scrollToForm}
                onMouseEnter={() => setCtaHovered(true)}
                onMouseLeave={() => setCtaHovered(false)}
                style={{
                  padding: '15px 28px',
                  backgroundColor: ctaHovered ? 'var(--laranja-hover)' : 'var(--laranja)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '16px',
                  borderRadius: '10px',
                  transition: 'background-color 0.2s',
                  textAlign: 'center',
                }}
              >
                Solicitar orçamento personalizado
              </button>

              <a
                href="https://wa.me/5551984304699"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setWaCTAHovered(true)}
                onMouseLeave={() => setWaCTAHovered(false)}
                style={{
                  color: waCTAHovered ? 'var(--verde-hover)' : 'var(--verde)',
                  fontWeight: 600,
                  fontSize: '15px',
                  transition: 'color 0.2s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                Falar no WhatsApp →
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="hero-col-right">
            <img
              src="/images/produto1.jpeg"
              alt="Linha de embalagens CSP para marmitas"
              loading="eager"
              style={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: 'var(--sombra-card)',
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
