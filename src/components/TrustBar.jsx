const mediaStyles = `
  .trust-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background-color: var(--borda);
    border: 1px solid var(--borda);
    border-radius: 14px;
    overflow: hidden;
    max-width: 900px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    .trust-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

const stats = [
  { value: '+2.000', label: 'clientes atendidos' },
  { value: '+1M', label: 'embalagens produzidas' },
  { value: '+15', label: 'anos no mercado' },
  { value: '🇧🇷', label: 'Atendemos todo Brasil' },
];

export default function TrustBar() {
  return (
    <>
      <style>{mediaStyles}</style>
      <section style={{ backgroundColor: 'var(--bg-alt)', padding: '48px 24px' }}>
        <div className="trust-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                backgroundColor: '#ffffff',
                padding: '28px 20px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '30px',
                  fontWeight: 800,
                  color: 'var(--texto)',
                  letterSpacing: '-1px',
                  marginBottom: '4px',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--texto-leve)',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
