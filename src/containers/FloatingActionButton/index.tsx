import { useCallback, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import InputDialog from 'src/components/InputDialog';
import { useAuth } from 'src/modules/hooks/useAuth';
import { useUpdate } from 'src/modules/hooks/useTodos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    fab: {
      position: 'fixed',
      right: '1rem',
      bottom: '1rem',
    },
  }),
);

export default function FloatingActionButton() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback<() => void>(() => {
    setOpen(false);
  }, []);

  const handleCreate = useCallback(
    async (title: string, detail: string) => {
      await useUpdate(title, detail, user);
      handleClose();
    },
    [handleClose, user],
  );

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="create todo"
        className={classes.fab}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <InputDialog
        open={open}
        handleClose={handleClose}
        handleCreate={handleCreate}
      />
    </div>
  );
}
