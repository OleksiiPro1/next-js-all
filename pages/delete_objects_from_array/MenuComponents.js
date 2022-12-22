import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton, Menu, MenuItem } from '@mui/material';
import PopupState, { bindMenu, bindTrigger } from 'material-ui-popup-state';
import * as React from 'react';

export default function MenuComponents({ handleAddRow, deleteRow }) {
  const onClick = (type, popupState) => {
    if (type === 'add') handleAddRow();
    else deleteRow();
    popupState.close();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <IconButton variant="contained" {...bindTrigger(popupState)}>
            <MoreVertIcon />
          </IconButton>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => onClick('add', popupState)}>Add</MenuItem>
            <MenuItem onClick={() => onClick('delete', popupState)}>
              Delete
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
