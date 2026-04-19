import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate progress bar from 0 to 100 over 2.2s
    let start = null;
    const duration = 3000;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(step);
      } else {
        // Start fade-out
        setFadeOut(true);
        setTimeout(() => {
          onFinish();
        }, 700); // wait for fade-out CSS transition
      }
    };

    requestAnimationFrame(step);
  }, [onFinish]);

  return (
    <div className={`splash-overlay ${fadeOut ? 'splash-fade-out' : ''}`}>
      <div className="splash-inner">
        <img
          src="/whitex-logo.jpg"
          alt="Whitex Laundry Logo"
          className="splash-logo"
        />
        <p className="splash-tagline">Premium Quality Care · Est. 1963</p>
        <div className="splash-bar-wrap">
          <div
            className="splash-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="splash-loading-text">Loading Experience…</p>
      </div>
    </div>
  );
}
