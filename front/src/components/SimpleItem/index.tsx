import { Fragment, useCallback, useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { Divider, IconButton, ListItemText } from '@material-ui/core';
import { Create as CreateIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { useAuth } from 'src/modules/hooks/useAuth';
import { ToDo } from 'src/api/todos';

import firebase from 'firebase';
import 'firebase/firestore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const SimpleList = () => {
  const [list, setList] = useState<ToDo[]>([]);
  const classes = useStyles();
  const { user } = useAuth();

  useEffect(() => {
    // TODO: あとでけす
    if (!user) {
      return;
    }

    const unsubscribe = firebase
      .firestore()
      .collection(`users/${user?.uid}/todos`)
      .onSnapshot((snap) => {
        const newList = snap.docs.map((doc) => doc.data() as ToDo);
        setList([...list, ...newList]);
      });
    return unsubscribe;
  }, [user]);

  const handleDelete = useCallback(() => {
    console.log('delete');
  }, []);

  const handleEdit = useCallback(() => {
    console.log('edit');
  }, []);

  return (
    <div className={classes.root}>
      {list.map((item, i) => {
        return (
          <Fragment key={i}>
            <ListItem>
              <ListItemText primary={item.title} />
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={handleEdit}>
                <CreateIcon />
              </IconButton>
            </ListItem>
            <Divider />
          </Fragment>
        );
      })}
    </div>
  );
};

export default SimpleList;
