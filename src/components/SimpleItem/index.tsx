import { Fragment, useCallback } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import {
  CircularProgress,
  Divider,
  IconButton,
  List,
  ListItemText,
} from '@material-ui/core';
import { Create as CreateIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { useAuth } from 'src/modules/hooks/useAuth';
import { useRouter } from 'next/router';
import { useHoge } from 'src/modules/hooks/useTodos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    progressRoot: {
      display: 'flex',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

const SimpleList: React.FC = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const router = useRouter();

  const { list, mutate } = useHoge(user);

  const handleDelete = useCallback(() => {
    console.log('delete');
    mutate();
  }, []);

  const handleEdit = useCallback(() => {
    mutate();
  }, []);

  return list.length < 1 ? (
    <div className={classes.progressRoot}>
      <CircularProgress color="secondary" size={60} />
    </div>
  ) : (
    <div className={classes.root}>
      <List>
        {list.map((item, i) => {
          return (
            <Fragment key={i}>
              <ListItem
                button
                onClick={() => {
                  router.push(`/users/${user.uid}/todos/${item.id}`);
                }}
              >
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
      </List>
    </div>
  );
};

export default SimpleList;
