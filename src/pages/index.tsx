import React from 'react';
import Head from 'next/head';
import { Grid } from '@mui/material';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

const Home: React.FC = () => (
  <Grid display="flex" direction="column">
    <Head>
      <title>MKS</title>
    </Head>
    <Bar />
    <Footer />
  </Grid>
);

export default Home;
