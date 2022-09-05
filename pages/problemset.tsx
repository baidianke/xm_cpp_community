import { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/problemset.module.less';

const Question: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>题库</title>
      </Head>

      <h1>题库</h1>
    </div>
  );
};

export default Question;
