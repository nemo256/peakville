import Router from 'next/router'
import { useEffect } from "react"

const Logout = () => {
  useEffect(() => {
    localStorage.setItem("is_authenticated", false)
    Router.push("/login")
  }, [])
}

export default Logout
