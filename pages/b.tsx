import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/test.module.less';
import { apiGetUserInfo } from '@/services/user';
import { GetServerSideProps, NextPage } from 'next';

interface Props {
  userInfo: null | XM_SSO.XM_SSO_USER;
}
const PageA: NextPage<Props> = ({ userInfo }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>page b</title>
      </Head>
      <h1>{userInfo?.nickname}</h1>
      <Image
        src="https://xmcdn.oss-cn-shanghai.aliyuncs.com/double_teach_resource/audioPlay.png"
        width={200}
        alt="111"
        height={200}></Image>
    </div>
  );
};

export default PageA;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.user_token;
  let userInfo = null;
  if (token) {
    try {
      userInfo = await apiGetUserInfo({ token });
    } catch (e) {
      console.log(11111, e);
    }
  }

  return {
    props: {
      userInfo,
    },
  };
};
