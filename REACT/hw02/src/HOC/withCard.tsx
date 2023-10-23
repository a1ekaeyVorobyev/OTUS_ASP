import React, { useContext } from "react";
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import { withTheme } from "./withTheme";
import Main from "../Components/Main";
import About from "../Components/About";
import NotFound from "../Components/NotFound";
import Login from "../Components/Login";
import Registration from "../Components/Registration";
import ClearLocalStorage from "../Components/ClearLocalStorage";


interface iTheme{
    name: string
}


interface AwaysCoolStateProps {
  text?: string;
}

export function withCard(ChildComp: React.ComponentType<any >) {
    return class Component<T> extends React.Component< T&iTheme> 
    {
     render() {
        return (
            <MDBContainer >
              <MDBCard>
                <MDBCardBody>
                   <ChildComp {...this.props}/>
                  </MDBCardBody>
              </MDBCard>
            </MDBContainer>
        );
      }
    };
  }


export const AppReg = withTheme(withCard(Registration));
export const AppLogin = withTheme(withCard(Login));
export const AppAbout = withTheme(withCard(About));
export const AppMain = withTheme(withCard(Main));
export const AppNotFound = withTheme(withCard(NotFound));

export const AppClearLocalStorage = withTheme(withCard(ClearLocalStorage));




