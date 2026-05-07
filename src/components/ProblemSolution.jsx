const mediaStyles = `
  .ps-title {
    font-size: 28px;
  }
  .ps-grid {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  @media (min-width: 768px) {
    .ps-title {
      font-size: 38px;
    }
    .ps-grid {
      flex-direction: row;
    }
  }
`;

const problems = [
  'Custo alto que come sua margem',
  'Marmita chegando feia ou vazando',
  'Falta de padrão prejudica sua marca',
  'Embalagem genérica que não diferencia',
];

const solutions = [
  'Compra em escala = melhor preço por unidade',
  'Materiais resistentes para transporte e congelamento',
  'Padronização visual em todos os pedidos',
  'Sua logo, suas cores, sua identidade',
];

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: '3px' }} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ProblemSolution() {
  return (
    <>
      <style>{mediaStyles}</style>
      <section style={{ backgroundColor: 'var(--bg)', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <p style={{
            textAlign: 'center',
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'var(--texto-leve)',
            marginBottom: '16px',
          }}>
            Por que trocar de embalagem
          </p>
          <h2
            className="ps-title"
            style={{
              fontWeight: 800,
              color: 'var(--texto)',
              textAlign: 'center',
              marginBottom: '56px',
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
            }}
          >
            Sua empresa não está se destacando?{' '}
            Talvez esteja faltando identidade para sua marca.
          </h2>

          <div className="ps-grid">
            {/* Problems card */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#fff5f5',
                borderLeft: '4px solid #ef4444',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: 'var(--sombra-suave)',
              }}
            >
              <h3 style={{ color: '#dc2626', fontWeight: 700, fontSize: '15px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                O que trava sua marmitaria
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {problems.map((p) => (
                  <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <XIcon />
                    <span style={{ color: '#374151', fontSize: '15px', lineHeight: 1.5 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions card */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#f0fdf4',
                borderLeft: '4px solid #22c55e',
                borderRadius: '12px',
                padding: '32px',
                boxShadow: 'var(--sombra-suave)',
              }}
            >
              <h3 style={{ color: '#15803d', fontWeight: 700, fontSize: '15px', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Como a CSP resolve
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {solutions.map((s) => (
                  <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckIcon />
                    <span style={{ color: '#374151', fontSize: '15px', lineHeight: 1.5 }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
