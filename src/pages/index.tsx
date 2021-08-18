import { FC, useState } from 'react';
import tw, { css } from 'twin.macro';
import Navbar from '@components/Navbar';
import { useTransition, animated } from 'react-spring';
import { pages, Pages } from 'src/constants';

const Index: FC = () => {
  const [page, setPage] = useState<Pages>('home');

  const transition = useTransition(page, {
    from: { x: 10000, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -10000, opacity: 0 },
  });

  return (
    <div
      css={[tw`font-sans min-h-screen min-w-full overflow-hidden relative`, pages[page].bgColor]}
    >
      <Navbar setPage={setPage} page={page} />
      {transition((style, item) => (
        <animated.div
          style={style}
          key={pages[page].id}
          css={[tw`text-2xl text-white w-full`, pages[item].bgColor]}
        >
          {page === pages[item].id ? pages[item].page : null}
        </animated.div>
      ))}
    </div>
  );
};

export default Index;
