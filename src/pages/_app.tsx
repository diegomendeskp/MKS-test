import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/createGlobalStyle';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
