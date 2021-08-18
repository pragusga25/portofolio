import { keyframes } from '@emotion/react';
import { css } from 'twin.macro';

// button menus
export const svgWrapperStyles = css`
  font-family: 'Luckiest Guy', cursive;
  margin-top: 0;
  position: relative;
  width: 150px;
  height: 40px;
  display: inline-block;
  border-radius: 3px;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  &:hover .shape_menu_nv {
    stroke-dasharray: 50 0;
    stroke-width: 3px;
    stroke-dashoffset: 0;
    stroke: #28ffbf;
  }
`;

export const rectShapeStyles = css`
  stroke-width: 6px;
  fill: transparent;
  stroke: #faff00;
  stroke-dasharray: 85 400;
  stroke-dashoffset: -220;
  transition: 1s all ease;
`;

export const textStyles = css`
  margin-top: -35px;
  text-align: center;
`;

export const textInStyles = css`
  color: #fff;
  text-decoration: none;
  font-weight: 100;
  font-size: 1.1em;
`;

export const spotStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

// Contact Me
export const span1 = keyframes`
  0% {
    left: -200px;
  }
  100% {
    left: 200px;
  }

`;

export const span2 = keyframes`
  0% {
    top: -70px;
  }
  100% {
    top: 70px;
  }
`;

export const span3 = keyframes`
  0% {
    right: -200px;
  }
  100% {
    right: 200px;
  }
`;

export const span4 = keyframes`
  0% {
    bottom: -70px;
  }
  100% {
    bottom: 70px;
  }
`;

export const contactMeBtnStyles = css`
  background: #fb3640;
  border-style: none;
  color: #fff;
  letter-spacing: 3px;
  font-family: 'Luckiest Guy', cursive;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  position: relative;
  padding: 0px;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }

  & span {
    position: absolute;
    display: block;
  }
  & span:nth-child(1) {
    height: 3px;
    width: 200px;
    top: 0px;
    left: -200px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), #f6e58d);
    border-top-right-radius: 1px;
    border-bottom-right-radius: 1px;
    animation: ${span1} 2s linear infinite;
    animation-delay: 1s;
  }

  & span:nth-child(2) {
    height: 70px;
    width: 3px;
    top: -70px;
    right: 0px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #f6e58d);
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    animation: ${span2} 2s linear infinite;
    animation-delay: 2s;
  }

  & span:nth-child(3) {
    height: 3px;
    width: 200px;
    right: -200px;
    bottom: 0px;
    background: linear-gradient(to left, rgba(0, 0, 0, 0), #f6e58d);
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;
    animation: ${span3} 2s linear infinite;
    animation-delay: 3s;
  }

  & span:nth-child(4) {
    height: 70px;
    width: 3px;
    bottom: -70px;
    left: 0px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0), #f6e58d);
    border-top-right-radius: 1px;
    border-top-left-radius: 1px;
    animation: ${span4} 2s linear infinite;
    animation-delay: 4s;
  }

  &:hover {
    transition: all 0.5s;
    transform: rotate(-3deg) scale(1.1);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  }
  &:hover span {
    animation-play-state: paused;
  }
`;
