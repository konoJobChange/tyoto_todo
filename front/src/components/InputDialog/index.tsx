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

import firebase from 'firebase';
import 'firebase/firestore';

interface InputDialog {
  open: boolean;
  handleClose: () => void;
}

interface ToDo {
  title: string;
  detail: string;
  update_at: firebase.firestore.Timestamp;
  create_at: firebase.firestore.Timestamp;
}

export default function InputDialog({ open, handleClose }: InputDialog) {
  const { user } = useAuth();
  const { value: title, bind: bindTitle } = useInput('');
  const { value: detail, bind: bindDetail } = useInput('');

  const handleCreate = useCallback(() => {
    // TODO: あとでけす
    if (!user) {
      return;
    }

    const db = firebase.firestore();
    const doc: ToDo = {
      title,
      detail,
      update_at: firebase.firestore.Timestamp.now(),
      create_at: firebase.firestore.Timestamp.now(),
    };

    db.collection(`users/${user?.uid}/todos`)
      .add(doc)
      .then(function (docRef) {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(function (error) {
        console.error('Error adding document: ', error);
      });

    handleClose();
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
