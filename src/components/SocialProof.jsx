import VideoAutoPlay from './VideoAutoPlay';

export default function SocialProof() {
  return (
    <section style={{ backgroundColor: 'var(--bg-alt)', padding: '96px 24px' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{
          color: 'var(--verde)',
          fontSize: '12px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '16px',
        }}>
          Quem já usa
        </p>
        <h2 style={{
          fontSize: '34px',
          fontWeight: 800,
          color: 'var(--texto)',
          lineHeight: 1.15,
          marginBottom: '48px',
          letterSpacing: '-0.5px',
        }}>
          Conheça quem confia na CSP
        </h2>

        {/* Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: 'var(--sombra-card)',
          border: '1px solid var(--borda)',
          position: 'relative',
          textAlign: 'left',
        }}>
          {/* Badge */}
          <span style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'var(--verde)',
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: 700,
            padding: '4px 12px',
            borderRadius: '999px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
          }}>
            Cliente CSP
          </span>

          <VideoAutoPlay
            src="/videos/depoimento.mp4"
            style={{ marginBottom: '24px', borderRadius: '10px', boxShadow: 'none' }}
          />

          {/* Client info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--verde)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '14px',
              color: '#ffffff',
              flexShrink: 0,
            }} aria-hidden="true">
              MM
            </div>
            <div>
              <p style={{ color: 'var(--texto)', fontWeight: 700, fontSize: '16px', marginBottom: '2px' }}>
                MM Fit
              </p>
              <p style={{ color: 'var(--texto-leve)', fontSize: '14px' }}>
                Marmitas Congeladas · POA e Região
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
