import { FC, useState } from 'react';
import tw, { css } from 'twin.macro';

const Home: FC = () => {
  const [red, setRed] = useState<boolean>(false);

  return (
    <div
      tw="h-screen w-full flex justify-center items-center"
      onClick={() => setRed((prev) => !prev)}
    >
      <h1 css={[red && tw`text-red-600 text-xl`]}>NEXT.JS BOILERPLATE</h1>
    </div>
  );
};

export default Home;
