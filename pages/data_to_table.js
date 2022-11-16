import { Box, Button, Container, MenuItem, Typography } from '@mui/material';
import {
  DataGrid,
  GridCsvExportMenuItem,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarExportContainer,
  GridToolbarFilterButton,
} from '@mui/x-data-grid';
import { DatePicker } from 'antd';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const columnsQuizPerformance = [
  {
    title: 'name',
    field: 'name',
    headerName: <strong>{'Name'}</strong>,
    flex: 1,
  },
  {
    title: 'groups',
    field: 'groups',
    headerName: <strong>{'Groups'}</strong>,
    flex: 1,
  },
  {
    title: 'roles',
    field: 'roles',
    headerName: <strong>{'Roles'}</strong>,
    flex: 1,
  },
  {
    title: 'avg_completion',
    field: 'avg_completion',
    headerName: <strong>{'Avg completion'}</strong>,
    flex: 1,
  },
  {
    title: 'avg_score',
    field: 'avg_score',
    headerName: <strong>{'Avg score'}</strong>,
    flex: 1,
  },
  {
    title: 'location',
    field: 'location',
    headerName: 'Location',
    flex: 1,
    hide: true,
  },
  {
    title: 'Role',
    field: 'Role',
    headerName: 'Role',
    flex: 1,
    hide: true,
  },
  {
    title: 'Process_group',
    field: 'Process_group',
    headerName: 'Process group',
    flex: 1,
    hide: true,
  },
];

const DataQuizPerformance = [
  {
    id: 1,
    name: 'Quizmasters',
    groups: 'group1',
    roles: 'role1',
    avg_completion: '30 (%)',
    avg_score: '23',
    location: 'location 1',
    Role: 'Role 1',
    Process_group: 'Process group 1',
  },
  {
    id: 2,
    name: 'The A Team',
    groups: 'group2',
    roles: 'role2',
    avg_completion: '40 (%)',
    avg_score: '32',
    location: 'location 2',
    Role: 'Role 2',
    Process_group: 'Process group 2',
  },
  {
    id: 3,
    name: 'Wikipedias',
    groups: 'group3',
    roles: 'role3',
    avg_completion: '80 (%)',
    avg_score: '43',
    location: 'location 3',
    Role: 'Role 3',
    Process_group: 'Process group 3',
  },
];
const { RangePicker } = DatePicker;
export default function QuizPerformance() {
  const downloadQuizPerformancePdf = () => {
    const doc = new jsPDF();
    doc.text('Group Performance', 15, 10);
    doc.autoTable({
      columns: columnsQuizPerformance.map((col) => ({
        ...col,
        dataKey: col.field,
      })),
      body: DataQuizPerformance,
    });
    doc.save('QuizPerformance.pdf');
  };
  function CustomToolbarQuizPerformance() {
    return (
      <GridToolbarContainer>
        <GridToolbarExportContainer>
          <GridCsvExportMenuItem />

          <Box>
            <MenuItem onClick={() => {}} sx={{ width: '100%', pl: -1 }}>
              Download as Excel
            </MenuItem>
          </Box>
          <Box>
            <MenuItem
              onClick={() => downloadQuizPerformancePdf()}
              sx={{ width: '100%' }}
            >
              Download as Pdf
            </MenuItem>
          </Box>
        </GridToolbarExportContainer>

        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  }

  return (
    <Container maxWidth={'xl'} sx={{ position: 'relative', marginBottom: 4 }}>
      <Box sx={{ mt: 4 }}>
        <Typography variant={'body2'} fontWeight={'bold'}>
          Quiz Performance
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            disableColumnMenu={true}
            rows={DataQuizPerformance}
            columns={columnsQuizPerformance}
            pageSize={5}
            rowsPerPageOptions={[5]}
            components={{
              Toolbar: CustomToolbarQuizPerformance,
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}
