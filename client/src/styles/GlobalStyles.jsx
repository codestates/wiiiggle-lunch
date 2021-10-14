// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

const globalStyles = css`
  body {
    ${tw`w-screen h-screen`}
    font-family: 'Roboto', sans-serif;
  }
  #toast {
    position: absolute;
    min-width: 30vw;
    max-width: 60vw;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const GlobalStyles = () => {
  return (
    <>
      <BaseStyles />
      <Global styles={globalStyles} />
    </>
  );
};

export default GlobalStyles;
