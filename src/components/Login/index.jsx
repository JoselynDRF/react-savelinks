import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css';

import Header from './Header';

function Login() {
  return (
    <div>
      <Header />

      <div className="d-flex justify-content-center mt-4">
        <Col xs={12} sm={8} lg={6} className="login-container">
          <h1 className="text-center title-login"> Login </h1>
          <Form>
            <FormGroup>
              <Label for="username" className="label-login-form"> Nombre de usuario </Label>
              <Input type="text" name="username" id="username" placeholder="JoselynDRF" />
            </FormGroup>
            <FormGroup>
              <Label for="password" className="label-login-form"> Contraseña </Label>
              <Input type="password" name="password" id="password" placeholder="1234" />
            </FormGroup>


            <FormGroup className="text-center">
              <Button className="btn btn-block btn-form-primary mt-4"> Iniciar Sesión </Button>
            </FormGroup>
          </Form>

          <Link to="/subjects" className=""> Iniciar Sesión </Link>
        </Col>
      </div>
    </div>
  );
}

export default Login;
