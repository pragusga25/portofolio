import { css } from 'twin.macro';
import { keyframes } from '@emotion/react';

export const bop = keyframes`
0% {
  transform: scale(0.9);
}
50%,
100% {
  transform: scale(1);
}
`;

export const logoNameStyles = css`
  font-family: 'Luckiest Guy', cursive;
  margin: 0;
  padding: 0;
  color: white;
  text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1),
    0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
    0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1),
    -0.03em 0 0 rgba(0, 0, 0, 1);
`;

export const logoNameSpanStyles = css`
  transform: scale(0.9);
  display: inline-block;
  animation: ${bop} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
`;
