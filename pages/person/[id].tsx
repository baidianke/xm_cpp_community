import Head from 'next/head';
import styles from '@/styles/person.module.less';
import { GetServerSideProps, NextPage } from 'next';

interface Props {
  userId: string;
}
const Person: NextPage<Props> = ({ userId }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>个人中心</title>
      </Head>

      <h1>个人中心</h1>
      <h2>id: {userId}</h2>
    </div>
  );
};

export default Person;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('id-------', context.query);

  return {
    props: {
      userId: context.query.id,
    },
  };
};
