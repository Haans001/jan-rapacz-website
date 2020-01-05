import { useLayoutEffect, useRef } from 'react';
import { useController } from 'react-scroll-parallax';

const ParallaxCache = () => {
  const { parallaxController } = useController();
  const timerId = useRef(0);
  useLayoutEffect(() => {
    setTimeout(() => parallaxController.update(), 100);
    return () => clearTimeout(timerId);
  }, [parallaxController]);

  return null;
};
export default ParallaxCache;
