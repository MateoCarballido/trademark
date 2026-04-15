import { useRef, useEffect, forwardRef, ReactNode } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

// We strip tailwind dependencies and construct our own flexible marquee
export default forwardRef(function TextMarquee({
  children,
  baseVelocity = -5,
  scrollDependent = true,
  delay = 0,
}, ref) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  const hasStarted = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      hasStarted.current = true;
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useAnimationFrame((t, delta) => {
    if (!hasStarted.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (scrollDependent) {
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div ref={ref} style={{ overflow: 'hidden', whiteSpace: 'nowrap', display: 'flex' }}>
      <motion.div
        style={{ x, display: 'flex', whiteSpace: 'nowrap', gap: '4rem' }}
      >
        <span style={{ display: 'block' }}>{children}</span>
        <span style={{ display: 'block' }}>{children}</span>
        <span style={{ display: 'block' }}>{children}</span>
        <span style={{ display: 'block' }}>{children}</span>
      </motion.div>
    </div>
  );
});
