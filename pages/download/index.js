import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Pagination,
  Paper,
  Stack,
} from '@mui/material';

export default function Download() {
  const onButtonClick = () => {
    fetch('/invoice.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'invoice.pdf';
        alink.click();
      });
    });
  };
  return (
    <Paper
      sx={{
        p: 2,
        m: 20,
        borderRadius: 4,
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{ textAlign: 'center', verticalAlign: 'middle', mt: 1 }}
        >
          <h2 sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
            Invoice 1 - February 07 2022
          </h2>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <IconButton
            onClick={onButtonClick}
            color="primary"
            type="submit"
            variant="contained"
            size="large"
          >
            <DownloadTwoToneIcon fontSize="lardge" />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
