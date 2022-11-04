import { Grid } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import MenuCircleProgress from './AnimationCircle';

export default function Home() {
  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Help with Next.js
        </h1>
      </div>
      <div>
        <Link href="/hide-elements">
          <h2
            style={{
              background: 'red',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            hide-elements
          </h2>
        </Link>

        <Link href="/sign-up">
          <h2
            style={{
              background: 'blue',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            sign-up
          </h2>
        </Link>

        <Link href="/avatar">
          <h2
            style={{
              background: 'green',
              cursor: 'pointer',
              textAlign: 'center',
              color: 'white',
              padding: 2,
              margin: 2,
            }}
          >
            Upload Poto
          </h2>
        </Link>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <MenuCircleProgress
              startAngle={-180}
              endAngle={90}
              uploadNumbers={'15/20'}
              fill={'#FFBB28'}
            />
          </Grid>
          <Grid item xs={3}>
            <MenuCircleProgress
              startAngle={-180}
              endAngle={180}
              uploadNumbers={'100/100'}
              fill={'#00C49F'}
            />
          </Grid>
          <Grid item xs={3}>
            <MenuCircleProgress
              startAngle={-180}
              endAngle={147}
              uploadNumbers={'50/55'}
              fill={'#00C49F'}
            />
          </Grid>
          <Grid item xs={3}>
            <MenuCircleProgress
              startAngle={-180}
              endAngle={0}
              uploadNumbers={'2/4'}
              fill={'#FF8042'}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
