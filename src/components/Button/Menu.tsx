import { NavbarProps } from '@components/Navbar';
import { FC } from 'react';
import { Pages } from 'src/constants';
import { css } from 'twin.macro';

import { rectShapeStyles, spotStyles, svgWrapperStyles, textInStyles, textStyles } from './styles';

interface ButtonNavbarProps extends NavbarProps {
  text: Pages;
}

export const Menu: FC<ButtonNavbarProps> = ({ setPage, text, page }) => (
  <div css={[svgWrapperStyles]} onClick={() => setPage(text)}>
    <svg height={40} width={150} xmlns="http://www.w3.org/2000/svg">
      <rect
        css={[rectShapeStyles, text === page && css({ stroke: '#28FFBF' })]}
        height={40}
        width={150}
        className="shape_menu_nv"
      />
    </svg>
    <div css={[textStyles]}>
      <p css={[textInStyles]}>
        <span css={[spotStyles]} />
        {text}
      </p>
    </div>
  </div>
);
