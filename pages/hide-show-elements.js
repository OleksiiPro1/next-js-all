import styled from '@emotion/styled';
import {
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

      <Paper sx={{ p: 2, borderRadius: 4, ml: 4, mr: 6 }} hidden={value !== 0}>
        111111111111111111111
      </Paper>
      <Paper sx={{ p: 2, borderRadius: 4, ml: 4, mr: 6 }} hidden={value === 0}>
        22222222222222222222222
      </Paper>
    </>
  );
};

export default HideShow;
