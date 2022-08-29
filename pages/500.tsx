import Head from 'next/head'
import Image from 'next/image'
import type { ReactElement } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import type { GetStaticProps, GetStaticPaths, GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const ErrorPage: NextPage = () => {
  return (
   <div>500</div>
  )
}


export default ErrorPage
