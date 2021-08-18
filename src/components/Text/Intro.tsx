import tw, { css } from 'twin.macro';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';

const introStyles = css`
  font-family: 'Luckiest Guy', cursive;
`;

const Intro = () => {
  const greets = useTypewriter({
    words: ['World', 'Everyone', 'There', 'You'],
    loop: 0, // Infinit
  });

  return (
    <div css={[introStyles]}>
      <h1>
        <span tw="text-4xl">Hello {greets}</span> <br />
        <span tw="text-6xl leading-normal">I'm Taufik Pragusga</span> <br />
        <span tw="text-4xl">
          I'm a{' '}
          <Typewriter
            words={['Computer Science Student', 'Web Developer']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default Intro;
