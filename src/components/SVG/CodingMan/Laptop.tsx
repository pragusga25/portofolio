import { animated, useSpring } from 'react-spring';

const Laptop = () => {
  const animateLaptop = useSpring({
    from: { y: 1000, opacity: 0 },
    to: { x: -113.27, y: -156.487, opacity: 1 },
    delay: 1000,
  });

  const animateLaptopCircle = useSpring({
    from: { y: -1000, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1100,
  });
  return (
    <>
      <animated.path
        fill="#3f3d56"
        d="M391.305 600.024h-192.34a8.48 8.48 0 01-8.47-8.47V474.869a8.48 8.48 0 018.47-8.47h192.34a8.48 8.48 0 018.47 8.47v116.687a8.48 8.48 0 01-8.47 8.47z"
        transform="translate(-113.27 -156.487)"
        style={animateLaptop}
      />
      <animated.circle
        cx="181.399"
        cy="376.724"
        r="5.604"
        fill="#fff"
        data-name="Ellipse 263"
        style={animateLaptopCircle}
      />
    </>
  );
};

export default Laptop;
