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
import { useState } from 'react';
import employees from './employees.json';
import MenuComponents from './MenuComponents';

export default function DeleteObjectsFromArray() {
  const [users, setUsers] = useState(employees);

  const deleteRow = (idRow) => {
    setUsers((state) => state.filter((name) => name.id !== idRow));
  };

  const handleAddRow = (idRow) => {
    // users.push(setUsers((state) => state.filter((name) => name.id !== idRow)));
  };

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
              <TableCell>Role</TableCell>
              <TableCell align={'center'}># of quizzes</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  hover
                >
                  <TableCell>
                    <Avatar
                      sx={{ bgcolor: 'customGreen.main' }}
                      alt={row.firstName}
                      src={row.avatar}
                    />
                  </TableCell>

                  <TableCell>
                    <Typography variant={'body2'}>
                      {row.first_name + ' ' + row.last_name}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Grid container>
                      <Chip label={row.roles[0].name} color={'primary'} />
                    </Grid>
                  </TableCell>

                  <TableCell
                    align={'center'}
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    <Typography variant={'body2'} fontWeight={'bold'}>
                      {row.nrOfLeaningUnits}
                    </Typography>
                  </TableCell>

                  <TableCell align={'right'}>
                    <MenuComponents
                      deleteRow={() => deleteRow(row.id)}
                      handleAddRow={() => handleAddRow(row.id)}
                    />
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
