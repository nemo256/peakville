import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useState, useEffect } from "react";

const Login = () => {
  const [error, setError] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(null)

  useEffect(() => {
    setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')))
  }, [])

  if (isAuthenticated == true) Router.push('/')

  return (
    <>
      <Head>
        <title>Blackout - Login</title>
        <meta name="description" content="Retro-terminal web app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="max-w-screen-xl text-white mx-auto flex flex-col h-screen justify-between scroll-smooth">
        <section className="sm:text-l md:text-xl bg-primary text-accent text-center p-4 font-bold">
          Login
        </section>
      </div>
    </>
  )
}

export default Login
