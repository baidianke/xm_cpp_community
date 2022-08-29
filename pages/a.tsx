import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.less';

const PageA: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>page a</title>
      </Head>
      <h1
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}>
        Page a
      </h1>
    </div>
  );
};

export default PageA;
