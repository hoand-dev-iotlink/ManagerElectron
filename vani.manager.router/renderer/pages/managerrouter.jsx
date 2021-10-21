import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Backdrop, CircularProgress,Grid,Item } from '@mui/material';
import LayoutHome from '../layouts/LayoutHome';

function Home() {
  return (
    <LayoutHome>
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
          <a>xs=6 md=8</a>
            {/* <Item>xs=6 md=8</Item> */}
          </Grid>
          <Grid item xs={8} md={8}>
          <a>xs=6 md=4</a>
            {/* <Item>xs=6 md=4</Item> */}
          </Grid>
        </Grid>
        {/* <div>

          <p>
            ⚡ Electron + Next.js ⚡ -
            <Link href="/login">
              <a>Go to next page</a>
            </Link>
          </p>
          <img src="/images/logo.png" />
        </div> */}
      </React.Fragment>
    </LayoutHome>
  );
};

export default Home;
