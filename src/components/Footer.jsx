export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      padding: '48px 24px',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        maxWidth: '1180px',
        margin: '0 auto',
      }}>
        <span style={{
          color: '#ffffff',
          fontSize: '22px',
          fontWeight: 800,
          letterSpacing: '-0.5px',
        }}>
          CSP Embalagens
        </span>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
          <a href="https://cspembalagens.com.br" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px' }}>
            cspembalagens.com.br
          </a>
          <a href="https://instagram.com/cspembalagens" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px' }}>
            @cspembalagens
          </a>
          <a href="https://wa.me/5551984304699" target="_blank" rel="noopener noreferrer"
            style={{ color: '#9ca3af', fontSize: '14px' }}>
            WhatsApp: (51) 98430-4699
          </a>
        </div>

        <p style={{ color: '#4b5563', fontSize: '12px' }}>
          © 2026 CSP Embalagens. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
