import Head from 'next/head';
import SimpleList from 'src/components/SimpleItem';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Create Next Tyoto TodoApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SimpleList />
    </>
  );
};

export default IndexPage;
