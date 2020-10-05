import { useCallback } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import { useInput } from 'src/modules/hooks/useInput';

interface InputDialog {
  open: boolean;
  handleClose: () => void;
}

export default function InputDialog({ open, handleClose }: InputDialog) {
  const { value: title, bind: bindTitle } = useInput('');
  const { value: detail, bind: bindDetail } = useInput('');

  const handleCreate = useCallback(() => {
    console.log('create!!!!!!!!!');
    console.log(title);
    console.log(detail);
    handleClose();
  }, [title, detail]);

  return (
    <div>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create your Todo.
            <br />
            This is only your tyoto_todo!!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            required
            {...bindTitle}
          />

          <TextField
            margin="dense"
            id="detail"
            label="Detail"
            multiline
            fullWidth
            rowsMax="3"
            {...bindDetail}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
