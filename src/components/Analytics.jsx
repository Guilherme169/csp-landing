import { useEffect } from 'react';

const PIXEL_ID = '517991158551582';
const CLARITY_ID = 'wnl4zs3pwt';

export default function Analytics() {
  useEffect(() => {
    // ── Meta Pixel ──────────────────────────────────────────────────────────
    if (!window.fbq) {
      window._fbq = window.fbq = function () {
        window.fbq.callMethod
          ? window.fbq.callMethod.apply(window.fbq, arguments)
          : window.fbq.queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];

      const fbScript = document.createElement('script');
      fbScript.async = true;
      fbScript.src = 'https://connect.facebook.net/en_US/fbevents.js';
      document.head.appendChild(fbScript);
    }
    window.fbq('init', PIXEL_ID);
    window.fbq('track', 'PageView');
    window.fbq('track', 'ViewContent', { content_name: 'Landing CSP Embalagens' });

    // ── Microsoft Clarity ────────────────────────────────────────────────────
    if (!window.clarity) {
      window.clarity = function () {
        (window.clarity.q = window.clarity.q || []).push(arguments);
      };

      const clarityScript = document.createElement('script');
      clarityScript.async = true;
      clarityScript.src = 'https://www.clarity.ms/tag/' + CLARITY_ID;
      document.head.appendChild(clarityScript);
    }
  }, []);

  return null;
}
