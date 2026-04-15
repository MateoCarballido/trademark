import { useState } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { debounce } from 'lodash';

export default function LetterSwapPingPong({
  label,
  reverse = true,
  transition = {
    type: 'spring',
    duration: 0.7,
  },
  staggerDuration = 0.03,
  staggerFrom = 'first',
  className = '',
  onClick,
  ...props
}) {
  const [scope, animate] = useAnimate();
  const [isHovered, setIsHovered] = useState(false);

  const mergeTransition = (baseTransition) => ({
    ...baseTransition,
    delay: stagger(staggerDuration, {
      from: staggerFrom,
    }),
  });

  const hoverStart = debounce(
    () => {
      if (isHovered) return;
      setIsHovered(true);

      animate(
        '.letter',
        { y: reverse ? '100%' : '-100%' },
        mergeTransition(transition)
      );

      animate(
        '.letter-secondary',
        {
          top: '0%',
        },
        mergeTransition(transition)
      );
    },
    100,
    { leading: true, trailing: true }
  );

  const hoverEnd = debounce(
    () => {
      setIsHovered(false);

      animate(
        '.letter',
        {
          y: 0,
        },
        mergeTransition(transition)
      );

      animate(
        '.letter-secondary',
        {
          top: reverse ? '-100%' : '100%',
        },
        mergeTransition(transition)
      );
    },
    100,
    { leading: true, trailing: true }
  );

  return (
    <motion.span
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      onHoverStart={hoverStart}
      onHoverEnd={hoverEnd}
      onClick={onClick}
      ref={scope}
      {...props}
    >
      <span style={{ display: 'none' }}>{label}</span>

      {label.split('').map((letter, i) => (
        <span
          key={i}
          style={{ whiteSpace: 'pre', position: 'relative', display: 'flex' }}
        >
          <motion.span className="letter" style={{ position: 'relative', top: 0 }}>
            {letter}
          </motion.span>
          <motion.span
            className="letter-secondary"
            aria-hidden={true}
            style={{ position: 'absolute', top: reverse ? '-100%' : '100%' }}
          >
            {letter}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
