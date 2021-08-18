import React from 'react';
import { animated, useSpring } from 'react-spring';
import { circles } from 'src/constants';

interface CircleProps {
  delay: number;
  cx: string;
  cy: string;
  r: string;
  fill: string;
}

const AnimateCircle = ({ delay, ...props }: CircleProps) => {
  const styles = useSpring({
    from: { opacity: 0, x: -100 },
    to: { opacity: 1, x: 0 },
    delay,
  });

  return <animated.circle style={styles} {...props} />;
};

const Circle = () => (
  <>
    {circles.map((circle) => (
      <AnimateCircle {...circle} key={circle.delay} />
    ))}
  </>
);

export default Circle;
