import Container from '@components/Container';
import { FC } from 'react';
import tw from 'twin.macro';
import CodingMan from '@components/SVG/CodingMan';
import Intro from '@components/Text/Intro';
import { ContactMe } from '@components/Button';

export const Home: FC = () => (
  <Container>
    <div tw="block md:flex">
      <div tw="flex justify-center md:justify-end">
        <CodingMan />
      </div>
      <div tw="relative md:mt-36 ml-0 md:ml-20">
        <Intro />
        <div tw="mt-10">
          <ContactMe />
        </div>
      </div>
    </div>
  </Container>
);
