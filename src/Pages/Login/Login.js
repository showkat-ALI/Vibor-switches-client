import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useLocation, useHistory } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import "./Login.css";
// import {Container, TextField, Typography} from "@mui/material"
// import Box from '@mui/material/Box';

const Login = () => {
  const { signin, error, user, loading } = useAuth();
  const [signinInfo, setSigninInfo] = useState({});
  const location = useLocation();
  const history = useHistory();
  const getSigninInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const signinData = { ...signinInfo };
    signinData[field] = value;
    setSigninInfo(signinData);
  };
  const handleLogininfo = (e) => {
    e.preventDefault();
    signin(signinInfo?.email, signinInfo?.password, location, history);
  };

  return (
    <>
      <div className="container" style={{ height: "100vh" }}>
        <h1 className=" text-center text-primary">Login</h1>

        <form onSubmit={handleLogininfo}>
          <input
            className=" mb-4 py-2 px-4"
            name="email"
            onChange={getSigninInput}
            type="email"
          />
          <br />
          <input
            className="py-2 px-4 mb-5"
            name="password"
            onChange={getSigninInput}
            type="password"
          />
          <br />
          <button type="submit" className="btn-grad mb-4">
            Login
          </button>
        </form>
        {loading && (
          <>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <br />
            <br />
          </>
        )}
        {user?.email && (
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>Your have loged in</p>
          </Alert>
        )}
        {error && (
          <Alert variant="danger">
            <Alert.Heading>Oh snap</Alert.Heading>
            <p>{error}</p>
          </Alert>
        )}
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <button className="btn-grad-reg">New user? please register</button>
        </NavLink>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
