import Container from '@components/Container';
import Email from '@components/SVG/Email';
import { FC } from 'react';
import tw from 'twin.macro';

export const Contact: FC = () => (
  <Container>
    <div tw="flex justify-center items-center text-4xl">MY CONTACTS</div>
    <div>
      <Email />
    </div>
  </Container>
);
