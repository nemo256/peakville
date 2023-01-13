import Head from 'next/head'
import Image from 'next/image'

// custom imports
import Header from '../components/Header.jsx'
import Alarm from '../components/Alarm.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <Head>
        <title>Blackout - Alarm</title>
        <meta name="description" content="Retro-terminal web app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="max-w-screen-xl mx-auto flex flex-col h-screen justify-between scroll-smooth snap-y snap-mandatory">
        <Header />
        <Alarm />
        <Footer />
      </div>
    </>
  )
}

export default Home
