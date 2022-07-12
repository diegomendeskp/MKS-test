import React from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home: React.FC = () => (
  <>
    <Head>
      <title>MKS sistemas</title>
    </Head>
    <Grid display="flex" direction="column">
      <Header />
      <Footer />
    </Grid>
  </>
);

export default Home;
