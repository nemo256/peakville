import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useState, useEffect } from "react";

// custom imports
import Header from '../components/Header.jsx'
import Main from '../components/Main.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')))
    if (isAuthenticated == false) {
      Router.push('/login')
    }
  }, [isAuthenticated])

  return (
    <>
      <Head>
        <title>Blackout - Home</title>
        <meta name="description" content="Retro-terminal web app" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <div className="font-body max-w-screen-xl mx-auto flex flex-col h-screen justify-between scroll-smooth snap-y snap-mandatory">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default Home
