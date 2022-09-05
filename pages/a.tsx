import Head from 'next/head';
import styles from '@/styles/test.module.less';
import { useContext } from 'react';
import UserContext from '@/contexts/UserContext';

const PageA: NextPageWithCustomConfig = () => {
  const { userInfo, login, logout, registet } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>page a</title>
      </Head>

      <span className="iconfont icon-baocunhaibao"></span>
      <h1>{userInfo?.nickname || '--'}</h1>

      <button onClick={login}>login</button>
      <button onClick={registet}>register</button>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default PageA;

PageA.needSign = true;
