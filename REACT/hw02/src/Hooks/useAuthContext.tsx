import { type } from "os";
import { useState, createContext, useContext } from "react";
import { json } from "stream/consumers";


export type tAuth = {
    login:string;
    password?:string
}

interface iAuthContext  {
    auth: tAuth;
    setAuth: (login:string) => void;
  };

 export const defaultAuth: iAuthContext = {
    auth: {login:'default'},
    setAuth: (login:string) => {}
  };
  

// register the context
export const AuthContext = createContext<iAuthContext>(defaultAuth);



// export a custom hook to use this specific context
export function useAuthContext() {
  return useContext(AuthContext);
}

export function getAuth(auth:tAuth){
  const oAuth = localStorage.getItem(auth.login);
  if (oAuth == null)
    return false
  const storageAuth =  JSON.parse(oAuth);
  return storageAuth.password == auth.password
};

export function setLogin(auth:tAuth){
  const oAuth = localStorage.getItem(auth.login);
  if (oAuth != null){
    return false;
  }
  localStorage.setItem(auth.login, JSON.stringify(auth))
  return true
};