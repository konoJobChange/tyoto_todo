import { useCallback } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Divider, IconButton, ListItemText } from '@material-ui/core';
import { Create as CreateIcon, Delete as DeleteIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const SimpleList = () => {
  const classes = useStyles();

  const handleDelete = useCallback(() => {
    console.log('delete');
  }, []);

  const handleEdit = useCallback(() => {
    console.log('edit');
  }, []);

  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <ListItemText primary="Trash" />
          <IconButton onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleEdit}>
            <CreateIcon />
          </IconButton>
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default SimpleList;
