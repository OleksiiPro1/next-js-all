import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import useSWR from 'swr';
import MenuComponents from './MenuComponents';

export default function DeleteObjectsFromArray() {
  const [users, setUsers] = useState();

  const deleteRow = (idRow) => {
    setUsers((state) => state.filter((name) => name.id !== idRow));
  };
  const pushRow = (inputArray, newElement) => {
    setUsers((state) => [...state, newElement]);
  };
  const handleAddRow = () => {
    pushRow(employees, users[0]);
  };

  const fetcher = (url, token) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer f8ff64d42b4f261eb4e12c8cd68fee647f20a643a8f183476a206d6beb44f130`,
        },
      })
      .then((res) => res.data);

  const { data, error } = useSWR(
    'https://trello.com/1/members/me/boards?key=033d88077eca07fdf777e5eac167a27d&token=f8ff64d42b4f261eb4e12c8cd68fee647f20a643a8f183476a206d6beb44f130',
    fetcher,
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Box
      sx={{
        p: 4,
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell>description</TableCell>
              <TableCell align={'center'}>idOrganization</TableCell>

              <TableCell align={'center'}>id</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  hover
                >
                  <TableCell>
                    <Avatar
                      sx={{ bgcolor: 'customGreen.main' }}
                      alt={row.name}
                      src={row.avatar}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography variant={'body2'}>{row.name}</Typography>
                  </TableCell>

                  <TableCell>
                    <Grid container>
                      <Chip label={row.desc} color={'primary'} />
                    </Grid>
                  </TableCell>

                  <TableCell
                    align={'center'}
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    <Typography variant={'body2'} fontWeight={'bold'}>
                      {row.idOrganization}
                    </Typography>
                  </TableCell>

                  <TableCell align={'center'}>
                    <Typography variant={'body2'} fontWeight={'bold'}>
                      {row.id}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
