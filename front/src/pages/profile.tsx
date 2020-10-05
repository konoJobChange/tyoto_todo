import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAuth } from 'src/modules/hooks/useAuth';
import dayjs from 'dayjs';

const useStyles = makeStyles({
  cardHeader: {
    backgroundColor: green[500],
  },
});

export default function Profile() {
  const { user } = useAuth();
  const styles = useStyles();

  console.dir(user?.multiFactor);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Card>
        {user ? (
          <CardHeader
            className={styles.cardHeader}
            title={`${user.displayName}さんのプロフィール`}
            avatar={
              <Avatar
                alia-label="profile"
                src={user.photoURL || undefined}
              ></Avatar>
            }
          />
        ) : null}
        {user ? (
          <CardContent>
            <Grid container spacing={2} direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  登録日
                </Typography>
                <Typography>
                  {dayjs(user.metadata.creationTime).format('YYYY年MM月DD日')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle2">
                  最終ログイン日時
                </Typography>
                <Typography>
                  {dayjs(user.metadata.lastSignInTime).format('YYYY年MM月DD日')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle2">
                  メールアドレス
                </Typography>
                <Typography>{user.email || '登録なし'}</Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="subtitle2">
                  電話番号
                </Typography>
                <Typography>{user.phoneNumber || '登録なし'}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        ) : null}
      </Card>
    </Grid>
  );
}
