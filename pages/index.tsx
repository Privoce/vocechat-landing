import type { NextPage } from 'next'
import Head from 'next/head'
import FirstView from '../components/FirstView'
import Features from '../components/Features'
import Deploy from '../components/Deploy'
import Compare from '../components/Compare'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>VoceChat</title>
        <meta name="description" content="Welcome to vocechat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <FirstView />
        <Features />
        <Deploy />
        <Compare />
      </main>

      <Footer />
    </div>
  )
}

export default Home
