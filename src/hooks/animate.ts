import { useState } from 'react';
import { useSpring } from 'react-spring';
import { PathProps } from '../components/SVG/CodingMan/GitLine';

export const useAnimatedPath = ({ toggle, delay }: Pick<PathProps, 'toggle' | 'delay'>) => {
  const [length, setLength] = useState<number | null>(null);

  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length!,
    strokeDasharray: length!,
    delay: delay!,
    config: { duration: 1500 },
  });

  return {
    style: animatedStyle,
    ref: (ref: SVGPathElement | null) => {
      // The ref is `null` on component unmount
      if (ref) {
        setLength(ref.getTotalLength());
      }
    },
  };
};
