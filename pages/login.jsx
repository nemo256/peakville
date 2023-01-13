import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useState, useEffect } from "react";

// custom imports
import Footer from '../components/Footer.jsx'

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
      <div className="max-w-screen-xl text-white mx-auto flex flex-col h-screen justify-between">
        <div className="flex-grow sm:text-sm md:text-sm text-secondary p-4 text-center font-bold">
          <div className="pt-16 flex justify-center items-center h-full">
            <div className="block p-6 rounded-lg shadow-lg max-w-sm">
              <img className="pb-10" src="/peakville.png" alt="Unknown image" />
              <form>
                <div className="form-group mb-4">
                  <input type="username" className="form-control
                    block
                    w-full
                    px-4
                    py-2
                    placeholder-gray-700
                    text-base
                    text-green-900
                    bg-[#0B0C0B] bg-clip-padding
                    border-2 border-solid border-gray-800
                    transition
                    ease-in-out
                    m-0
                    hover:text-green-900 hover:bg-[#090909] hover:border-green-900 outline-none
                    focus:text-green-900 focus:bg-[#090909] focus:border-green-900 outline-none"
                    aria-describedby="usernameHelp" placeholder="Username" />
                </div>
                <div className="form-group mb-6">
                  <input type="password" className="form-control
                    block
                    w-full
                    px-4
                    py-2
                    placeholder-gray-700
                    text-base
                    text-green-900
                    bg-[#0B0C0B] bg-clip-padding
                    border-2 border-solid border-gray-800
                    transition
                    ease-in-out
                    m-0
                    hover:text-green-900 hover:bg-[#090909] hover:border-green-900 outline-none
                    focus:text-green-900 focus:bg-[#090909] focus:border-green-900 outline-none"
                    aria-describedby="passwordHelp" placeholder="Password" />
                </div>
                <button type="submit" className="
                  w-full
                  py-2.5
                  bg-green-900
                  text-[#B0B0B0]
                  leading-tight
                  hover:bg-green-800 hover:shadow-lg hover:text-[#E0E0E0]
                  focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-blue-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out">Log In</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Login
