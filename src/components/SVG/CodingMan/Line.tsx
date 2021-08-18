import { useAnimatedPath } from '@hooks/animate';
import { animated, useSpring } from 'react-spring';

const Line = ({ toggle }: { toggle: boolean }) => {
  const animationStrokeProps = useAnimatedPath({ toggle, delay: 1000 });
  const animationFillStyle = useSpring({
    fill: '#FF4848',
    config: { duration: 10000 },
  });

  return (
    <animated.path
      stroke="#cacaca"
      strokeWidth="2"
      d="M778.403 669.758H114.166a1.006 1.006 0 010-2h664.237a1.006 1.006 0 010 2z"
      data-name="Path 944"
      transform="translate(-113.27 -156.487)"
      {...animationStrokeProps}
      style={{
        ...animationStrokeProps.style,
        ...animationFillStyle,
      }}
    />
  );
};

export default Line;
