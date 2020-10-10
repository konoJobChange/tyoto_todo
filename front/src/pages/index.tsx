import Head from 'next/head';
import { List } from '@material-ui/core';
import SimpleList from 'src/components/SimpleItem';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Create Next Tyoto Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List>
        <SimpleList />
      </List>
    </>
  );
};

export default IndexPage;
