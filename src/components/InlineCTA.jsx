import { useState } from 'react';

const mediaStyles = `
  .inline-cta-btn {
    width: 100%;
    display: block;
  }
  @media (min-width: 480px) {
    .inline-cta-btn {
      width: auto;
      display: inline-block;
    }
  }
`;

export default function InlineCTA({ text, href, scrollTo, bg = 'var(--bg)' }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = scrollTo
    ? () => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    : undefined;

  const btnStyle = {
    padding: '14px 32px',
    backgroundColor: hovered ? 'var(--laranja-hover)' : 'var(--laranja)',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '16px',
    borderRadius: '10px',
    transition: 'background-color 0.2s',
    cursor: 'pointer',
    border: 'none',
    fontFamily: 'inherit',
    textDecoration: 'none',
    textAlign: 'center',
  };

  return (
    <>
      <style>{mediaStyles}</style>
      <section style={{ backgroundColor: bg, padding: '0 24px 56px', textAlign: 'center' }}>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-cta-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={btnStyle}
          >
            {text}
          </a>
        ) : (
          <button
            onClick={handleClick}
            className="inline-cta-btn"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={btnStyle}
          >
            {text}
          </button>
        )}
      </section>
    </>
  );
}
