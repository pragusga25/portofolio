import { Menu } from '@components/Button';
import { px } from '@components/Container';
import { Dispatch, FC, SetStateAction } from 'react';
import { pageList, Pages } from 'src/constants/pages';
import tw, { css } from 'twin.macro';
import { logoNameSpanStyles, logoNameStyles } from './styles';

export interface NavbarProps {
  setPage: Dispatch<SetStateAction<Pages>>;
  page: Pages;
}

const Navbar: FC<NavbarProps> = ({ setPage, page: active }) => (
  <nav
    css={[tw`h-20 min-w-full text-white flex justify-between items-center py-8 absolute z-10`, px]}
  >
    <h1
      css={[logoNameStyles, tw`text-base md:text-lg lg:text-xl xl:text-3xl cursor-pointer`]}
      onClick={() => setPage('home')}
    >
      <span css={[logoNameSpanStyles]}>"PRAGUSGA"</span>
    </h1>
    <div tw="flex gap-x-8 uppercase">
      {pageList.map((page) => (
        <Menu text={page} setPage={setPage} page={active} key={page} />
      ))}
    </div>
  </nav>
);

export default Navbar;
