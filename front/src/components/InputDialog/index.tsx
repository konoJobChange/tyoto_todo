import { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface InputDialog {
  open: boolean;
  handleClose: () => void;
}

export default function InputDialog({ open, handleClose }: InputDialog) {
  const handleCreate = useCallback(() => {
    console.log('create!!');
    handleClose();
  }, []);

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
          />

          <TextField margin="dense" id="detail" label="Detail" multiline fullWidth rowsMax="3" />
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
