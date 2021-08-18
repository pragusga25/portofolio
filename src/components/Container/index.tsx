import { FC } from 'react';
import tw, { css } from 'twin.macro';

export const px = tw`
px-6 md:px-10 lg:px-16 xl:px-24
`;

const Container: FC = ({ children }) => <div css={[tw`pt-20`, px]}>{children}</div>;

export default Container;
