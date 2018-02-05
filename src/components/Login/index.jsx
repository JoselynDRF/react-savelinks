import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import './login.css';

import Header from './Header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFields: {},
      userValid: false,
      formErrors: false,
      users: [
        {
          username: 'JoselynDRF',
          password: '1234',
        },
        {
          username: 'UserTest',
          password: '1111',
        },
      ],
    };

    this.onDismissAlert = this.onDismissAlert.bind(this);
    this.getFormFieldsValues = this.getFormFieldsValues.bind(this);
    this.checkFormFields = this.checkFormFields.bind(this);
    this.checkLoginForm = this.checkLoginForm.bind(this);
  }

  // Close errors alert
  onDismissAlert() {
    this.setState({
      formErrors: false,
    });
  }

  // Get form fields values
  getFormFieldsValues(field, event) {
    const { formFields } = this.state;
    formFields[field] = event.target.value.trim();

    this.setState({
      formFields,
    });
  }

  // Check fields required
  checkFormFields() {
    const { formFields } = this.state;
    let formIsValid = true;

    if (!formFields.username || !formFields.password) {
      formIsValid = false;
    }

    return formIsValid;
  }

  // Check user login (username and password)
  checkLoginForm(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const checkedUser = this.state.users.filter(user => user.username === username && user.password === password)[0];

    if (checkedUser) {
      this.setState({
        userValid: true,
        formErrors: false,
      });
    } else {
      this.setState({
        userValid: false,
        formErrors: true,
      });
    }
  }

  render() {
    return (
      <div>
        { (this.state.userValid) ? <Redirect to="/subjects" /> : false }

        <Header />

        <div className="d-flex justify-content-center mt-4">
          <Col xs={12} sm={8} lg={6} className="login-container">
            <h1 className="text-center title-login"> Login </h1>

            <Form onSubmit={this.checkLoginForm}>
              <FormGroup>
                <Label for="username" className="label-login-form"> Nombre de usuario </Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="JoselynDRF"
                  onChange={e => this.getFormFieldsValues('username', e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="label-login-form"> Contraseña </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="1234"
                  onChange={e => this.getFormFieldsValues('password', e)}
                />
              </FormGroup>

              <FormGroup>
                <Button
                  className="btn btn-block btn-login mt-4"
                  type="submit"
                  disabled={!this.checkFormFields()}
                >
                  Iniciar Sesión
                </Button>
              </FormGroup>

              <Alert color="danger" isOpen={this.state.formErrors} toggle={this.onDismissAlert}>
                Nombre de usuario o contraseña incorrecta.
              </Alert>
            </Form>
          </Col>
        </div>

      </div>
    );
  }
}

export default Login;
