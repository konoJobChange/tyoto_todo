import { useCallback } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

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

  const handleCreateTodo = useCallback(() => {
    console.log('create');
  }, []);

  return (
    <div className={classes.root}>
      <Fab
        color="primary"
        aria-label="create todo"
        className={classes.fab}
        onClick={handleCreateTodo}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
