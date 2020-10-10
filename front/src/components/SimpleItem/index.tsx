import { Fragment, useCallback, useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { Divider, IconButton, ListItemText } from '@material-ui/core';
import { Create as CreateIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { useAuth } from 'src/modules/hooks/useAuth';
import { ToDo } from 'src/api/todos';

import { useRouter } from 'next/router';

import { useHoge } from 'src/modules/hooks/useTodos';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const SimpleList: React.FC = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const router = useRouter();

  const list = useHoge(user);

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
    </div>
  );
};

export default SimpleList;
