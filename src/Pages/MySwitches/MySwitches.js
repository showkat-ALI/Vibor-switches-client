import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
const MySwitches = () => {
  const { user } = useAuth();
  const [usersSwitch, setUsersSwitch] = useState([]);
  useEffect(() => {
    fetch(
      `https://floating-sands-61100.herokuapp.com/confirmedorder?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setUsersSwitch(data));
  }, []);
  return (
    <>
      <div style={{ height: "100vh" }}>
        <h1 className="text-center text-light">
          My switches are:{usersSwitch.length}
        </h1>

        <Table
          style={{ color: "white" }}
          striped
          bordered
          hover
          className="destination-table"
        >
          <thead>
            <tr style={{ color: "white" }}>
              <th>image</th>
              <th className="wiiBlock">Switch Name</th>
              <th className="wiiBlock">Price</th>
              <th>User Name</th>
              <th>Adress</th>
              <th>Phone</th>
              {/* <th>Status</th> */}
              {/* <th>Cancel</th> */}
            </tr>
          </thead>
          <tbody>
            {usersSwitch?.map((eachSwitch) => (
              <tr key={eachSwitch._id} style={{ color: "white" }}>
                <td>
                  <img width="50px" src={eachSwitch?.prdcimg.img} alt="" />
                </td>
                <td style={{ color: "white" }} className="wiiBlock">
                  {eachSwitch?.existprdc?.name}
                </td>
                <td style={{ color: "white" }} className="wiiBlock">
                  $ {eachSwitch?.existprdcprice?.price}
                </td>
                <td style={{ color: "white" }}>{user?.displayName}</td>
                <td style={{ color: "white" }}>{eachSwitch?.address}</td>
                <td style={{ color: "white" }}>{eachSwitch?.phone}</td>
                {/* <td>{eachSwitch?.status}</td> */}
                {/* <td>
                  <button
                    onClick={() => {
                      remove(eachSwitch._id);
                    }}
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MySwitches;
