const mediaStyles = `
  .showcase-grid {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }
  .showcase-h2 {
    font-size: 28px;
  }
  @media (min-width: 768px) {
    .showcase-grid {
      flex-direction: row;
      align-items: center;
      gap: 72px;
    }
    .showcase-text,
    .showcase-images {
      flex: 1;
    }
    .showcase-h2 {
      font-size: 38px;
    }
  }
`;

export default function ProductShowcase() {
  return (
    <>
      <style>{mediaStyles}</style>
      <section style={{ backgroundColor: 'var(--bg-alt)', padding: '96px 24px' }}>
        <div className="showcase-grid" style={{ maxWidth: '1180px', margin: '0 auto' }}>

          {/* Text */}
          <div className="showcase-text">
            <p style={{
              color: 'var(--laranja)',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}>
              Produto
            </p>
            <h2 className="showcase-h2" style={{
              fontWeight: 800,
              color: 'var(--texto)',
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-0.5px',
            }}>
              Embalagens que valorizam o que você produz
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'var(--texto-medio)',
              lineHeight: 1.7,
              marginBottom: '32px',
            }}>
              Apresentação profissional do primeiro ao último pedido.
              Personalização completa, materiais resistentes e padrão que
              constrói marca.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Impressão com logo e identidade visual do cliente',
                'Material resistente para congelados e delivery',
                'Pedido mínimo a partir de 1.000 unidades',
                'A partir de R$ 1,20 por unidade',
              ].map((item) => {
                const isPrice = item.includes('R$');
                return isPrice ? (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: 'rgba(34, 197, 94, 0.08)',
                      border: '1.5px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '10px',
                      padding: '10px 14px',
                    }}
                  >
                    <span style={{ color: 'var(--verde)', fontWeight: 700, fontSize: '18px', flexShrink: 0 }}>✓</span>
                    <span style={{ color: '#15803d', fontSize: '16px', lineHeight: 1.5, fontWeight: 700 }}>{item}</span>
                  </li>
                ) : (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ color: 'var(--verde)', fontWeight: 700, fontSize: '16px', marginTop: '1px', flexShrink: 0 }}>✓</span>
                    <span style={{ color: 'var(--texto-medio)', fontSize: '15px', lineHeight: 1.5 }}>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Images */}
          <div className="showcase-images" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <img
              src="/images/produto2.jpeg"
              alt="Embalagem CSP aberta com marmita"
              loading="lazy"
              style={{ width: '100%', borderRadius: '14px', boxShadow: 'var(--sombra-card)' }}
            />
            <img
              src="/images/produto3.jpeg"
              alt="Duas embalagens CSP lado a lado"
              loading="lazy"
              style={{ width: '100%', borderRadius: '14px', boxShadow: 'var(--sombra-card)' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
