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
