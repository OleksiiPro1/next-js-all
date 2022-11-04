import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import MenuCircleProgress from './MenuCircleProgress';

export default function AnimationPage() {
  return (
    <Box sx={{ m: 15 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <h2>Business assistant for learning</h2>
        </Grid>
        <Grid item xs={2}>
          <h2>Menu</h2>
          <MenuCircleProgress
            startAngle={-180}
            endAngle={90}
            uploadNumbers={'15/20'}
            fill={'#FFBB28'}
          />
        </Grid>
        <Grid item xs={2}>
          <h2>Operations</h2>
          <MenuCircleProgress
            startAngle={-180}
            endAngle={180}
            uploadNumbers={'100/100'}
            fill={'#00C49F'}
          />
        </Grid>
        <Grid item xs={2}>
          <h2>Decisions</h2>
          <MenuCircleProgress
            startAngle={-180}
            endAngle={147}
            uploadNumbers={'50/55'}
            fill={'#00C49F'}
          />
        </Grid>
        <Grid item xs={2}>
          <h2>Guidance</h2>
          <MenuCircleProgress
            startAngle={-180}
            endAngle={0}
            uploadNumbers={'2/4'}
            fill={'#FF8042'}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
