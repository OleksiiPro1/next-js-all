import { Grid } from '@mui/material';
import React from 'react';
import MenuCircleProgress from './MenuCircleProgress';

export default function AnimationPage() {
  <>
    <h1>222222222222222222222222222222222222</h1>
    <MenuCircleProgress
      startAngle={-180}
      endAngle={90}
      uploadNumbers={'15/20'}
      fill={'#FFBB28'}
    />
    <MenuCircleProgress
      startAngle={-180}
      endAngle={180}
      uploadNumbers={'100/100'}
      fill={'#00C49F'}
    />
    <MenuCircleProgress
      startAngle={-180}
      endAngle={147}
      uploadNumbers={'50/55'}
      fill={'#00C49F'}
    />
    <MenuCircleProgress
      startAngle={-180}
      endAngle={0}
      uploadNumbers={'2/4'}
      fill={'#FF8042'}
    />
  </>;
}
