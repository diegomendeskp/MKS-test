import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../styles/createGlobalStyle';
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);

export default MyApp;