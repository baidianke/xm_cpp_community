import { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/test.module.less';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>首页</title>
      </Head>

      <h1>首页</h1>
    </div>
  );
};

export default Home;
