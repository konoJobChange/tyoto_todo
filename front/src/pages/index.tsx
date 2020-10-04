import { useState } from 'react';
import Head from 'next/head';
import { Button, Container, List, ListItem, ListItemText } from '@material-ui/core';

import styles from '../styles/Home.module.css';

import ButtonAppBar from '../components/ButtonAppBar';
import TodoList, { ToDo as ITodo } from '../api/todos';

const IndexPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [avatarImage, setAvatarImage] = useState('');

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleAvater = () => {
    setAvatarImage('orange');
  };

  return (
    <Container>
      <ButtonAppBar isLogin={isLogin} avatarImage={avatarImage} />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List>
        {TodoList.map((v: ITodo) => {
          return (
            <ListItem key={v.id}>
              <ListItemText>
                {v.title}
                {v.detail}
              </ListItemText>
            </ListItem>
          );
        })}
      </List>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">TyotoTODO</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <Button onClick={handleLogin} color="primary">
          set login
        </Button>

        <Button onClick={handleAvater} color="secondary">
          set orange
        </Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Container>
  );
};

export default IndexPage;
