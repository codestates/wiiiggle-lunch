// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

const globalStyles = css`
  body {
    ${tw`w-screen h-screen`}
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
