import {
  Avatar,
  Box,
  Chip,
  Grid,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import PopupState from 'material-ui-popup-state';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form } from 'react-final-form';
import reports from './companies.json';
import MenuComponents from './MenuComponents';

export default function AccountsOverviewPage() {
  const [companies, setCompanies] = useState(reports);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
  };
  const editRow = (idRow) => {
    router.push(`/accounts_list/${idRow}`);
  };

  return (
    <>
      <Box sx={{ p: 4 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Quantity of restaurants</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {companies.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    hover
                  >
                    <TableCell onClick={() => editRow(row.id)}>
                      <Typography variant={'body2'}>{row.companies}</Typography>
                    </TableCell>

                    <TableCell onClick={() => editRow(row.id)}>
                      <Typography variant={'body2'}>{row.location}</Typography>
                    </TableCell>

                    <TableCell
                      onClick={() => editRow(row.id)}
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      <Typography variant={'body2'}>
                        {row.quantity_of_restaurants}
                      </Typography>
                    </TableCell>

                    <TableCell align={'right'}>
                      <MenuComponents
                        reports={reports}
                        editRow={() => editRow(row.id)}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
