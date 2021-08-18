import { useAnimatedPath } from '@hooks/animate';
import { animated, useSpring } from 'react-spring';
import { gitlines } from 'src/constants/gitlines';

export interface PathProps {
  toggle: boolean;
  d: string;
  transform?: string;
  delay?: number;
  stroke?: string;
  strokeWidth: string;
  num: number;
}

const GitLine = ({ toggle, num, ...props }: PathProps) => {
  const animationStrokeProps = useAnimatedPath({ toggle, delay: 800 * num });
  const animationFillStyle = useSpring({
    fill: '#FF4848',
    delay: 500 * num,
    config: { duration: 10000 },
  });

  return (
    <animated.path
      {...props}
      {...animationStrokeProps}
      style={{
        ...animationStrokeProps.style,
        ...animationFillStyle,
      }}
    />
  );
};

const GitLines = ({ toggle }: { toggle: boolean }) => (
  <>
    {gitlines.map((line) => (
      <GitLine toggle={toggle} {...line} key={line.num} />
    ))}
  </>
);

export default GitLines;
