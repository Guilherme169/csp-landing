import { useState } from 'react';
import { track } from '../utils/pixel';

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

export default function InlineCTA({ text, href, scrollTo, bg = 'var(--bg)', topPadding = 0, pixelEvents }) {
  const [hovered, setHovered] = useState(false);

  const firePixelEvents = () => {
    const events = Array.isArray(pixelEvents) ? pixelEvents : pixelEvents ? [pixelEvents] : [];
    events.forEach((e) => track(e));
  };

  const handleClick = scrollTo
    ? () => {
        firePixelEvents();
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    : () => firePixelEvents();

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
      <section style={{ backgroundColor: bg, padding: `${topPadding}px 24px 56px`, textAlign: 'center' }}>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-cta-btn"
            onClick={firePixelEvents}
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
