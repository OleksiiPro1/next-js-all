import styled from '@emotion/styled';
import {
  Chip,
  Container,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import React from 'react';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#8182AE',
    height: '100%',
    zIndex: -10,
    borderRadius: '30px',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#8182AE',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontFamily: 'Cairo',

    color: '#000',
    '&.Mui-selected': {
      color: '#fff',
      bgColor: 'primary.main',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

const HideShow = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const router = useRouter();

  const handleRerout = (e) => {
    router.push('/learning/quizzes/add');
  };

  return (
    <>
      <Container maxWidth={'xl'} sx={{ mt: 4, position: 'relative', mb: 4 }}>
        <Box>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
          >
            <StyledTab label="Active" />

            <StyledTab label="Inactive" />
          </StyledTabs>
        </Box>
      </Container>
      {/* <QuizzesLayout /> */}
      <Paper sx={{ p: 2, borderRadius: 4, ml: 4, mr: 6 }} hidden={value !== 0}>
        <Grid container spacing={1}>
          <Grid item xs={3} sx={{ mt: 0 }}>
            <h2>Processes/total processes</h2>
          </Grid>
          <Grid item xs={2.25}>
            <h3>Menu</h3>
          </Grid>
          <Grid item xs={2.25}>
            <h3>Operations </h3>
          </Grid>
          <Grid item xs={2.25}>
            <h3>Decisions</h3>
          </Grid>
          <Grid item xs={2.25}>
            <h3>Guidance</h3>
          </Grid>
        </Grid>
      </Paper>

      <Box
        sx={{
          p: 4,
        }}
      >
        <TableContainer hidden={value === 0}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell />

                <TableCell align={'center'}># of questions1</TableCell>

                <TableCell align={'center'}>Schedule</TableCell>

                <TableCell align={'center'}>Role</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableCell />
              <TableCell align={'center'}># of questions777</TableCell>

              <TableCell align={'center'}>Schedule777</TableCell>

              <TableCell align={'center'}>Role777</TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default HideShow;
