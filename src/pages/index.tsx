import Head from 'next/head';
import SimpleList from 'src/containers/SimpleList';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Create Next Tyoto TodoApp Cached</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SimpleList />
    </>
  );
};

export default IndexPage;
