import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "../Dashboared/Dashbored.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [madeadmin, setMadeadmin] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlmakeAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch(`https://floating-sands-61100.herokuapp.com/users/admin`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then((data) => {
      setMadeadmin(true);
      console.log(data);
    });
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <h1 className="text-light text-center">Make Admin</h1>
      <form onSubmit={handlmakeAdmin}>
        <input
          className="px-4 py-2"
          type="email"
          onBlur={handleOnBlur}
          placeholder="Email"
        />
        <br />
        <br />
        <input className="btn-grad-admin-submit" type="submit" />
      </form>
      {madeadmin && (
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>Made Admin Successfully</p>
        </Alert>
      )}
    </div>
  );
};

export default MakeAdmin;
