import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login";
import Allswitches from "./Pages/Home/AllSwitches/Allswitches";
import Signup from "./Pages/Signup/Signup";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import NavBar from "./Shared/Navigation/NavBar";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import Dashboared from "./Pages/Dashbord/Dashboared/Dashboared";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/allswitches">
              <Allswitches></Allswitches>
            </Route>

            <PrivateRoute path="/dashboared">
              <Dashboared></Dashboared>
            </PrivateRoute>

            <PrivateRoute path="/checkout/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
