import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Table } from "react-bootstrap";

const ManageAllorders = () => {
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    fetch("https://floating-sands-61100.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [reload]);
  const cancel = (id) => {
    const confirmDelete = window.confirm("Do you want to Delete");
    if (confirmDelete) {
      fetch(`https://floating-sands-61100.herokuapp.com/delete/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          } else {
            alert("something went Wrong");
          }
        });
    }
  };
  const confirmation = (id) => {
    const confirmOrder = window.confirm("Do you want to Confirm");
    if (confirmOrder) {
      fetch(`https://floating-sands-61100.herokuapp.com/confirm/${id}`, {
        method: "put",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount === 1) {
            setReload(!reload);
          }
        });
    }
  };

  const textColor = { color: "white" };
  if (orders.length === 0) {
    return (
      <Spinner className="text-center" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <h1 className="text-center text-light">
        Orders for Review are:
        {orders.length}
      </h1>
      <Table
        styel={{ color: "white" }}
        striped
        bordered
        hover
        className="destination-table"
      >
        <thead style={{ color: "white" }}>
          <tr>
            <th>image</th>
            <th className="wiiBlock">Switch Name</th>
            <th className="wiiBlock">Price</th>
            <th>User Name</th>
            <th>User email</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Cancel</th>
            <th>cofirmation</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((eachorder) => (
            <tr key={eachorder._id}>
              <td>
                <img width="50px" src={eachorder?.prdcimg.img} alt="" />
              </td>
              <td className="wiiBlock" style={textColor}>
                {eachorder?.existprdc?.name}
              </td>
              <td className="wiiBlock" style={textColor}>
                $ {eachorder?.existprdcprice?.price}
              </td>
              <td style={textColor}>{eachorder.userName}</td>
              <td style={textColor}>{eachorder.userEmail}</td>
              <td style={textColor}>{eachorder?.address}</td>
              <td style={textColor}>{eachorder?.phone}</td>
              <td style={textColor}>{eachorder?.status}</td>
              <td>
                <button
                  onClick={() => cancel(eachorder._id)}
                  className="btn btn-warning"
                >
                  cancel
                </button>
              </td>
              <td>
                <button
                  onClick={() => confirmation(eachorder._id)}
                  className="btn btn-success"
                >
                  Confirm
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllorders;
