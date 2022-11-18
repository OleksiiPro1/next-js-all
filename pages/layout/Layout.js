import { Box, Button, MenuItem, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React from 'react';

export default function Layout(props) {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: '44%' }}>
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/avatar">
          <Button>Avatar</Button>
        </Link>
        <Link href="/modal">
          <Button>Modal</Button>
        </Link>
        <Link href="/download">
          <Button>Download</Button>
        </Link>
      </Box>
      {props.children}
    </>
  );
}
