import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ToDo } from 'src/api/todos';
import dayjs from 'dayjs';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  cardHeader: {
    backgroundColor: green[500],
  },
});

export default function Profile() {
  const classes = useStyles();
  const router = useRouter();

  const [doc, setDoc] = useState<{doc: firebase.firestore.DocumentSnapshot, todo: ToDo} | null>(null);

  useEffect(() => {
    let isMount = true;
    async function fetch() {
      const doc = await firebase
      .firestore()
      .doc(`users/${router.query.uid}/todos/${router.query.id}`)
      .get();
      if (isMount) {
        setDoc({
          doc,
          todo: doc.data() as ToDo
        });
      }
    }
    fetch();
    return () => {
      isMount = false;
    };
  }, []);

  const handleDelete = useCallback(() => {
    if (doc) {
      return doc.doc.ref.delete();
    }
    return Promise.resolve();
  }, [doc]);

  console.log({doc});
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      {doc == null ? <CircularProgress /> : null}
      <Card>
        {doc && doc.todo ? (
          <CardHeader className={classes.cardHeader} title={doc && doc.todo.title} action={
            <IconButton aria-label="trash" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          }/>
        ) : null}
        {doc && doc.todo ? (
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  詳細
                </Typography>
                <Typography>{doc && doc.todo.detail}</Typography>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  作成日時
                </Typography>
                <Typography>
                  {dayjs(doc && doc.todo.create_at.toDate()).format(
                    'YYYY年MM月DD日HH時mm分ss秒',
                  )}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  更新日時
                </Typography>
                <Typography>
                  {dayjs(doc && doc.todo.update_at.toDate()).format(
                    'YYYY年MM月DD日HH時mm分ss秒',
                  )}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        ) : null}
      </Card>
    </Grid>
  );
}
