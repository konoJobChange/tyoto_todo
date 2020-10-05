import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect } from 'react';
import Head from 'next/head';

const config = {
  signInOptions: [
    { provider: firebase.auth.EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl: '/',
};

export default function Login() {
  useEffect(() => {
    if (process.browser) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const firebaseui = require('../modules/firebase-ui');
      const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebase-auth-container', config);
    }
  }, []);

  return (
    <div>
      <Head>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css"
        />
      </Head>
      <div id="firebase-auth-container"></div>
    </div>
  );
}
