import { useLayoutEffect, useState } from "react"


export const defaultAuth = 'default'

export const useAuth = () => {
    const [auth, setAuth] = useState(
      localStorage.getItem('app-auth') || defaultAuth
    )
  
    useLayoutEffect(() => {
      document.documentElement.setAttribute('app-auth', auth)
      localStorage.setItem('app-auth', auth)
    }, [auth])
  
    return { auth, setAuth }
  }