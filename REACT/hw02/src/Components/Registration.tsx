import React, { useState } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  setLogin,
  tAuth,
  useAuthContext,
} from "../Hooks/useAuthContext";
import "./Registration.css";

function Registration() {
  const { auth, setAuth } = useAuthContext();
  const [reg ,setReg] = useState(auth.login);
  const navigate = useNavigate();

  let login: string;
  let password: string;
  let confirmPassword: string;
  //let error:string = '';
  const [error, setError] = useState("");
  const onClickOK = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (password == confirmPassword) {
      if (setLogin({ login: login, password: password }) == true) {
        setReg(login);
        navigate("/MyApp");
      }
    } else {
      setError("Нету пользователя или пароль введен с ошибкой");
    }
    event.preventDefault();
  };
  return (
    <div className="form">
      <div className="form-body">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Login</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            placeholder="name@example.com"
            onChange={(e) => {
              login = e.target.value;
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            onChange={(e) => {
              password = e.target.value;
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            onChange={(e) => {
              confirmPassword = e.target.value;
            }}
          />
        </Form.Group>
      </div>
      {/* <div className="btn-group d-flex" role="group"> */}
      <div>
        <h2 className="errorMessage">{error}</h2>
      </div>
      <Row>
        <Col className="btn-group d-flex">
          <Button variant="primary" size="lg" onClick={onClickOK}>
            Ok
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Registration;
