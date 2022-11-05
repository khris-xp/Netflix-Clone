import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon" />
      </Head>
      
      <Header />

      <main>
        {/* Banner */}
      </main>
    </div>
  )
}

export default Home
