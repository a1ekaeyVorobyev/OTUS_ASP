import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MenuUser from "./Components/MenuUser";
import { useTheme } from "./Hooks/useTheme";
import {
  AppReg,
  AppAbout,
  AppMain,
  AppNotFound,
  AppLogin,
  AppClearLocalStorage,
} from "./HOC/withCard";
import {
  AuthContext,
  defaultAuth,
  useAuthContext,
} from "./Hooks/useAuthContext";
import { ThemeContext, defaultState, useThemeContext } from "./Hooks/useThemeContext";
import { useAuth } from "./Hooks/useAuth";

// export const ThemeContext = createContext<string>('');



function App() {

  const authContext = useAuthContext();
  
  const { theme, setTheme } = useTheme();
  const { auth, setAuth } = useAuth();

  authContext.setAuth = (login:string)=>{
    setAuth(login);
  }
  authContext.auth.login = auth;

  const updateTheme = () => {
    if (theme == "light") setTheme("dark");
    else setTheme("light");
  };


  const bgColor = theme == "dark" ? "bg-dark" : "bg-lig";

  const textColor = theme == "dark" ? "text-black" : "text-white";

  return (
    <div className={theme}>
      {auth} -- {authContext.auth.login}
      <div className="p-3 mb-2 {bgColor} {textColor}">
        <ThemeContext.Provider value={defaultState}>
          <AuthContext.Provider value={authContext}>
            <BrowserRouter>
              <MenuUser theme={theme}  updateTheme={updateTheme} />
              <Routes>
                <Route path="/MyApp" element={<AppMain name={theme} />} />
                <Route path="/Login" element={<AppLogin name={theme} />} />
                <Route path="/ClearLocalStorage" element={<AppClearLocalStorage name={theme} />} />
                <Route path="/About" element={<AppAbout name={theme} />} />
                <Route path="/Registration" element={<AppReg name={theme} />} />
                <Route path="*" element={<AppNotFound name={theme} />} />
              </Routes>
            </BrowserRouter>
          </AuthContext.Provider>
        </ThemeContext.Provider>
      </div>
    </div>

  );
}

export default App;
