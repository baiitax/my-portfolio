"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/** An optional first-session introduction, never a fabricated download percentage. */
export function Preloader() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    try {
      if (sessionStorage.getItem("myb-intro-seen")) return;
    } catch {
      /* Storage can be unavailable. */
    }
    setVisible(true);
    let cancelled = false;
    const dismiss = () => {
      if (!cancelled) setVisible(false);
    };
    const fonts = document.fonts?.ready ?? Promise.resolve();
    // Readiness-based exit; the cap prevents fonts or a slow connection blocking access.
    fonts.then(dismiss, dismiss);
    const cap = window.setTimeout(dismiss, 1800);
    return () => {
      cancelled = true;
      window.clearTimeout(cap);
    };
  }, []);
  function remember() {
    try {
      sessionStorage.setItem("myb-intro-seen", "1");
    } catch {}
  }
  return (
    <AnimatePresence onExitComplete={remember}>
      {visible && (
        <motion.div
          className="preloader"
          data-testid="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.35 }}
        >
          <div className="preloader-content" role="status" aria-live="polite">
            <div className="preloader-mark" aria-hidden="true">
              mb<span>.</span>
            </div>
            <p>Mujahid Yakubu Baita</p>
            <span className="preloader-descriptor">
              TECHNOLOGY · SYSTEMS · STRATEGY
            </span>
            <div className="preloader-track" aria-hidden="true">
              <span />
            </div>
            <small>Preparing your introduction</small>
          </div>
          <button className="preloader-skip" onClick={() => setVisible(false)}>
            Skip introduction →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
