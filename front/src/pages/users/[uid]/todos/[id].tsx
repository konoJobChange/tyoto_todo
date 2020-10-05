import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ToDo } from 'src/api/todos';
import dayjs from 'dayjs';
const useStyles = makeStyles({
  cardHeader: {
    backgroundColor: green[500],
  },
});

export default function Profile() {
  const classes = useStyles();
  const router = useRouter();
  const [todo, setTodo] = useState<ToDo | undefined | null>(undefined);

  useEffect(() => {
    let isMount = true;
    async function fetch() {
      const todo = (
        await firebase
          .firestore()
          .doc(`users/${router.query.uid}/todos/${router.query.id}`)
          .get()
      ).data() as ToDo;
      if (isMount) {
        setTodo(todo || null);
      }
    }
    fetch();
    return () => {
      isMount = false;
    };
  }, []);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      {todo === undefined ? <CircularProgress /> : null}
      <Card>
        {todo ? (
          <CardHeader className={classes.cardHeader} title={todo.title} />
        ) : null}
        {todo ? (
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  詳細
                </Typography>
                <Typography>{todo.detail}</Typography>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  作成日時
                </Typography>
                <Typography>
                  {dayjs(todo.create_at.toDate()).format(
                    'YYYY年MM月DD日HH時mm分ss秒',
                  )}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  更新日時
                </Typography>
                <Typography>
                  {dayjs(todo.update_at.toDate()).format(
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
