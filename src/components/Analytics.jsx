import { useEffect } from 'react';

const CLARITY_ID = 'wnl4zs3pwt';

export default function Analytics() {
  useEffect(() => {
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
