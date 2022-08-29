import Head from 'next/head';
import styles from '@/styles/Home.module.less';
import { CounterContext } from '@/contexts/Counter';
import { useContext } from 'react';
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next';

interface Props {
  data: string;
}

const PageA: NextPage<Props> = ({ data }) => {
  const counter = useContext(CounterContext);
  console.log('1111-------', data);
  return (
    <div className={styles.container}>
      <Head>
        <title>page a</title>
      </Head>
      <h1 onClick={() => counter?.decrease()}>Page a----{counter?.count}</h1>
      {/* <p>data: {data.id}</p> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(111111, context.params);
  return {
    props: {
      data: context.params,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
};

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {}
//   }
// }

export default PageA;
