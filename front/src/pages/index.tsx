import Head from 'next/head';
import { Container, List, ListItem, ListItemText } from '@material-ui/core';
import SimpleList from 'src/components/SimpleList';

import styles from '../styles/Home.module.css';

import TodoList, { ToDo as ITodo } from '../api/todos';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List>
        {TodoList.map((v: ITodo) => {
          return <SimpleList key={v.id} />;
        })}
      </List>
    </>
  );
};

export default IndexPage;
