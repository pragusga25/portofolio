import tw, { css } from 'twin.macro';
import { contactMeBtnStyles } from './styles';

export const ContactMe = () => (
  <div>
    <button css={[contactMeBtnStyles, tw`text-lg w-52 h-14 lg:h-16 lg:text-2xl lg:w-56`]}>
      Contact Me
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
);
