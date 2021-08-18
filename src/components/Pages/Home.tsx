import Container from '@components/Container';
import { FC } from 'react';
import tw from 'twin.macro';
import CodingMan from '@components/SVG/CodingMan';
import Intro from '@components/Text/Intro';

export const Home: FC = () => (
  <Container>
    <div tw="flex">
      <div tw="hidden lg:block">
        <CodingMan />
      </div>
      <div tw="relative mt-36 ml-20">
        <Intro />
      </div>
    </div>
  </Container>
);
