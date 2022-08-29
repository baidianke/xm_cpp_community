import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.less';
import { CounterContext } from '@/contexts/Counter';
import { useContext } from 'react';

const PageA: NextPage = () => {

  const counter = useContext(CounterContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>page a</title>
      </Head>
      <h1 onClick={() => {throw new Error('Sentry Frontend Error')}}>Page a</h1>
    </div>
  )
}

export default PageA
