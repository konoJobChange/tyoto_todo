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
  handleCreate: (title: string, detail: string) => Promise<void>;
}

export default function InputDialog({ open, handleClose, handleCreate }: InputDialog) {
  const { value: title, bind: bindTitle } = useInput('');
  const { value: detail, bind: bindDetail } = useInput('');

  const onSubmit = useCallback(() => {
    handleCreate(title, detail);
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
          <Button onClick={onSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
