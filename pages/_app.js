import '../styles/globals.css';
import styled from '@emotion/react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import Layout from './layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
