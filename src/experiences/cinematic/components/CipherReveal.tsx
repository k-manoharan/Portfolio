import React, { useState, useEffect } from 'react';

interface CipherRevealProps {
  text: string;
  trigger?: boolean;
  speed?: number;
  className?: string;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%#$@&*';

export const CipherReveal: React.FC<CipherRevealProps> = ({
  text,
  trigger = true,
  speed = 30,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!trigger) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [text, trigger, speed]);

  return <span className={className}>{displayText}</span>;
};
