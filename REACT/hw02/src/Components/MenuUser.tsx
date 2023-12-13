import { type } from "os";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { FaThumbsUp } from "react-icons/fa";
import login_white from "../ico/login_white_24dp.svg";
import login_black from "../ico/login_black_24dp.svg";
import person_white from "../ico/person_white_24dp.svg";
import person_black from "../ico/person_black_24dp.svg";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { tAuth, useAuthContext } from "../Hooks/useAuthContext";

type tTheme = "light" | "dark";

export interface iShema {
  theme: string;
  updateTheme: () => void;
}

type tMenu = {
  name: string;
  linkComp: string;
};

const listMenu: tMenu[] = [
  { name: "/MyApp", linkComp: "Main" },
  { name: "/ClearLocalStorage", linkComp: "ClearLocalStorage" },
  { name: "/Error", linkComp: "Error" },
  { name: "/Login", linkComp: "Login" },
  { name: "/Article", linkComp: "Article" },
  { name: "/About", linkComp: "About" },
];

const Menu = () => {
  return listMenu.map((item) => {
    return <Nav.Link href={item.name}>{item.linkComp}</Nav.Link>;
  });
};

function MenuUser(props: iShema ) {
  const auth= useAuthContext();

  const nameUser = auth.auth.login == "default" ? "Login" : auth.auth.login;

  const colorLabel = props.theme != "light" ? "light" : "dark";
  let iconLogin: React.JSX.Element;

  const navigate = useNavigate();
  const onClickLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/Login");
    event.preventDefault();
  };

  if (nameUser == "Login") {
    if (props.theme == "dark")
      iconLogin = <img src={login_white} alt="Your SVG" />;
    else iconLogin = <img src={login_black} alt="Your SVG" />;
  } else {
    if (props.theme == "dark")
      iconLogin = <img src={person_white} alt="Your SVG" />;
    else iconLogin = <img src={person_black} alt="Your SVG" />;
  }

  const project = () => {
    return (
      // <Navbar bg="primary" data-bs-theme="dark">
      <Navbar bg={props.theme} data-bs-theme={props.theme}>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">{Menu()}</Nav>
        </Container>
        <div className={`form-check form-switch text-${colorLabel}`}>
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(e) => {
              props.updateTheme();
            }}
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.theme}
          </label>
        </div>
        <Button
          variant={props.theme}
          style={{ display: "flex", justifyContent: "right" }}
          onClick={onClickLogin}
        >
          {iconLogin}
          {nameUser}
        </Button>
      </Navbar>
    );
  };
  return (
    <>
      <div>{project()} </div>
    </>
  );
}

export default MenuUser;
