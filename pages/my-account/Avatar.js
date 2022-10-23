import { Avatar, Box, Button, Paper, Stack, Typography } from '@mui/material';
import Item from 'antd/lib/list/Item';
import { useState } from 'react';

export default function AvatarPage() {
  const [avatar, setAvatar] = useState({
    file: null,
    fileURL: null,
  });

  const clickHandler = (event) => {
    const file = event.target.files[0];
    setAvatar({
      file: file,
      fileURL: URL.createObjectURL(file),
    });
  };

  return (
    <Item>
      <Paper sx={{ display: 'inline', width: '100%', p: 2, borderRadius: 4 }}>
        <Box
          component="div"
          sx={{
            display: 'inline',
          }}
        >
          <Avatar
            className="inactive"
            src={avatar.fileURL ? avatar.fileURL : ''}
            alt={avatar.file ? avatar.file.name : 'no-image'}
          />
        </Box>
        <Box
          component="div"
          sx={{
            display: 'inline',
          }}
        >
          <Typography variant="h5">Avatar</Typography>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              component="label"
              type={'submit'}
              variant={'contained'}
              color={'primary'}
            >
              Upload
              <input
                hidden
                accept="image/*"
                multiple={false}
                type="file"
                onChange={clickHandler}
              />
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Item>
  );
}
