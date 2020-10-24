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
import { useAuth } from 'src/modules/hooks/useAuth';
import { useUpdate } from 'src/modules/hooks/useTodos';

interface InputDialog {
  open: boolean;
  handleClose: () => void;
}

export default function InputDialog({ open, handleClose }: InputDialog) {
  const { user } = useAuth();
  const { value: title, bind: bindTitle } = useInput('');
  const { value: detail, bind: bindDetail } = useInput('');

  const handleCreate = useCallback(() => {
    (async () => {
      const data = await useUpdate(title, detail, user);
      console.log(data);
      handleClose();
    })();
  }, [title, detail, user]);

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
