import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.less'
import { CounterContext } from '@/contexts/Counter'
import { useContext } from 'react'

const PageA: NextPage = () => {
  const counter = useContext(CounterContext)
  console.log("111111")
  return (
    <div className={styles.container}>
      <Head>
        <title>page b</title>
      </Head>
      <h1>Page b</h1>
      <Image
        src="https://xmcdn.oss-cn-shanghai.aliyuncs.com/double_teach_resource/audioPlay.png"
        width={200}
        height={200}
      ></Image>
    </div>
  )
}

export default PageA
