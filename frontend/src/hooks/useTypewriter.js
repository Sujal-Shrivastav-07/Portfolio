import { useEffect, useState } from 'react';

/**
 * Types out a string one character at a time.
 * Respects prefers-reduced-motion by rendering instantly.
 */
export function useTypewriter(text, speedMs = 45, startDelayMs = 200) {
  const [output, setOutput] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setOutput(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speedMs, startDelayMs]);

  return { output, done };
}
