import VideoAutoPlay from './VideoAutoPlay';

export default function VideoSection({ eyebrow, title, subtitle, src, dark = false }) {
  const bg = dark ? 'var(--bg-dark)' : 'var(--bg)';
  const eyebrowColor = '#22c55e';
  const titleColor = dark ? '#ffffff' : 'var(--texto)';
  const subtitleColor = dark ? '#9ca3af' : 'var(--texto-medio)';

  return (
    <section style={{ backgroundColor: bg, padding: '96px 24px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
        <p
          style={{
            color: eyebrowColor,
            fontSize: '12px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '16px',
          }}
        >
          {eyebrow}
        </p>
        <h2
          style={{
            fontSize: '34px',
            fontWeight: 800,
            color: titleColor,
            lineHeight: 1.15,
            marginBottom: '12px',
            letterSpacing: '-0.5px',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: '17px',
            color: subtitleColor,
            lineHeight: 1.7,
            marginBottom: '40px',
          }}
        >
          {subtitle}
        </p>
        <VideoAutoPlay
          src={src}
          style={{
            borderRadius: '16px',
            boxShadow: dark
              ? '0 24px 48px rgba(0, 0, 0, 0.4)'
              : 'var(--sombra-card)',
          }}
        />
      </div>
    </section>
  );
}
