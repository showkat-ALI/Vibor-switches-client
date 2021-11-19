import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
import "./signup.css";
import Footer from "../../Shared/Footer/Footer";
import "./signup.css";
const Signup = () => {
  const { user, signupUser, loading, error } = useAuth();
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
    if (signinInfo.password !== signinInfo.confirmpassword) {
      alert("your password didnt matched");
      return;
    }
    console.log(signinInfo);
    signupUser(
      signinInfo?.email,
      signinInfo?.password,
      signinInfo?.name,
      location,
      history
    );
  };

  return (
    <>
      <div>
        <div className="container">
          <h1 className="text-center text-warning">Register</h1>
          {!loading && (
            <form onSubmit={handleLogininfo}>
              <input
                className="mb-5 py-2 px-4"
                name="name"
                placeholder="Name"
                onChange={getSigninInput}
                type="text"
              />
              <br />
              <br />
              <input
                className="mb-5 py-2 px-4"
                name="email"
                placeholder="Email"
                onChange={getSigninInput}
                type="email"
              />
              <br />
              <br />
              <input
                className=" mb-5 py-2 px-4"
                name="password"
                placeholder="password"
                onChange={getSigninInput}
                type="password"
              />
              <br />
              <br />
              <input
                className="py-2 px-4"
                name="confirmpassword"
                placeholder="confirmpassword"
                onChange={getSigninInput}
                type="password"
              />
              <br />
              <br />
              <button type="submit" className="btn-grad">
                Signup
              </button>
            </form>
          )}
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
              <p>Your Account created</p>
            </Alert>
          )}
          {error && (
            <Alert variant="danger">
              <Alert.Heading>Oh snap</Alert.Heading>
              <p>{error}</p>
            </Alert>
          )}
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <button className="btn-grad-reg">
              Already have an account? please log in
            </button>
          </NavLink>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Signup;
