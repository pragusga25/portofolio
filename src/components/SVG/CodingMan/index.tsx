import { useWindowSize } from '@hooks/index';
import { useEffect, useState } from 'react';
import Circle from './Circle';
import Cup from './Cup';
import GitLines from './GitLine';
import Laptop from './Laptop';
import Line from './Line';
import Man from './Man';

const CodingMan = () => {
  const [toggle, setToggle] = useState(false);
  const { width } = useWindowSize();
  let svgWidth = 973;

  if (width) {
    if (width > 1000) {
      svgWidth = width * 0.4;
    } else {
      svgWidth = width * 0.8;
    }
  }

  useEffect(() => {
    setTimeout(() => setToggle(true), 0);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="973.461"
      // width="800"
      width={svgWidth}
      // height="587.025"

      data-name="Layer 1"
      viewBox="0 0 973.461 587.025"
    >
      <Cup />
      <Line toggle={toggle} />
      <Man />
      <Laptop />
      <GitLines toggle={toggle} />
      <Circle />
    </svg>
  );
};

export default CodingMan;
