import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useCallback, useEffect } from 'react';
import Head from 'next/head';
import CloseIcon from '@material-ui/icons/Close';
import {
  Grid,
  Paper,
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Avatar,
  makeStyles,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { useRouter } from 'next/router';

const useStyles = makeStyles({
  cardHeader: {
    backgroundColor: green[500],
  },
});

const config = {
  signInOptions: [
    { provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
};
export default function Login() {
  const styles = useStyles();
  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const firebaseui = require('../modules/firebase-ui');
      const ui =
        firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebase-auth-container', config);
    }
  }, []);

  const exist = useCallback(() => {
    router.replace('/');
  }, [router]);

  return (
    <div>
      <Head>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
        />
      </Head>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Card>
          <CardHeader
            className={styles.cardHeader}
            title="ログイン"
            subheader="ログインするとToDoを登録できるよ！"
            avatar={<Avatar aria-label="login">？</Avatar>}
            action={
              <IconButton onClick={exist}>
                <CloseIcon />
              </IconButton>
            }
          />
          <CardContent>
            <div id="firebase-auth-container"></div>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
