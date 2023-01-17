import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import * as React from 'react';

export default function MenuComponents({
  editRow,
  deleteUsersRow,
  handleClose,
}) {
  const onClick = (type, popupState) => {
    if (type === 'edit') {
      editRow();
      popupState.close();
    } else {
      deleteUsersRow();
      popupState.close();
    }
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton variant="contained" {...bindTrigger(popupState)}>
            <MoreVertIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => onClick('edit', popupState)}>
              Edit
            </MenuItem>
            <MenuItem onClick={() => onClick('delete', popupState)}>
              Delete
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
