import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container mt-4">
      <h1> Login </h1>
      <Link to="/subjects"> Iniciar Sesión </Link>
    </div>
  );
}

export default Login;
