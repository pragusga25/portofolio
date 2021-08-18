import { animated, useSpring } from 'react-spring';

const Cup = () => {
  const styles = useSpring({
    delay: 1200,
    config: { duration: 1000 },
    from: { x: 0, opacity: 0 },
    to: { x: -140, opacity: 1 },
  });

  return (
    <animated.g fill="#e4e4e4" data-name="Group 100" style={styles}>
      <path
        d="M675.147 628.1a11.49 11.49 0 1011.49 11.49 11.49 11.49 0 00-11.49-11.49zm0 18.561a7.071 7.071 0 117.07-7.07 7.071 7.071 0 01-7.07 7.07z"
        data-name="Path 1465"
        transform="translate(-113.27 -156.487)"
      />
      <path
        d="M630.954 619.261h44.193v43.74a5.757 5.757 0 01-5.757 5.756h-32.68a5.757 5.757 0 01-5.756-5.757v-43.739z"
        data-name="Path 1467"
        transform="translate(-113.27 -156.487)"
      />
    </animated.g>
  );
};

export default Cup;
