import React, { useState } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {  getAuth, useAuthContext } from "../Hooks/useAuthContext";
import "./Login.css";

function Login(login?:string) {
   const auth = useAuthContext();
   

  const navigate = useNavigate();

  const onClickCancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/MyApp");
    event.preventDefault();
  };
  const onClickReg = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/Registration");
    event.preventDefault();
  };

  let user: string = "name@example.com";
  let password: string = '';
  //let error:string = '';
  const [error, setError] = useState("");
  const onClickOK = (event: React.MouseEvent<HTMLButtonElement>) => {
    //  alert(user)
    //  alert(password)
    if (getAuth({ login: user, password: password })) {
      setError("");
      auth.setAuth(user);
      navigate("/MyApp");
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
            placeholder={user}
            onChange={(e) => {
              user = e.target.value;
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="lg"
            type="password"
            placeholder={password}
            onChange={(e) => {
              password = e.target.value;
            }}
          />
        </Form.Group>
      </div>
      <div>
        <h2 className="errorMessage">{error}</h2>
      </div>
      <Row>
        <Col className="btn-group d-flex">
          <Button variant="primary" size="lg" onClick={onClickOK}>
            Ok
          </Button>
        </Col>
        <Col className="btn-group d-flex">
          <Button variant="primary" size="lg" onClick={onClickCancel}>
            Cancel
          </Button>
        </Col>
        <Col className="btn-group d-flex">
          <Button variant="primary" size="lg" onClick={onClickReg}>
            Register
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;

