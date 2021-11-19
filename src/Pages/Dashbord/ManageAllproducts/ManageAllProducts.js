import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

const ManageAllProducts = () => {
  const [switches, setSwitches] = useState([]);
  useEffect(() => {
    fetch("https://floating-sands-61100.herokuapp.com/switches")
      .then((res) => res.json())
      .then((data) => setSwitches(data));
  }, []);
  const removeProduct = (id) => {
    const confirmDelete = window.confirm("Do you want to Delete");
    if (confirmDelete) {
      fetch(
        `https://floating-sands-61100.herokuapp.com/switches/delete/${id}`,
        {
          method: "delete",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remainingSwitch = switches.filter(
              (product) => product._id !== id
            );
            setSwitches(remainingSwitch);
          } else {
            alert("Somethin went Wrong");
          }
        });
    }
  };
  const textColor = { color: "white" };
  if (switches.length === 0) {
    return (
      <Spinner className="text-center" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <h1 className="text-center text-light">
        Total Products are:
        {switches.length}
      </h1>

      <Table
        className="text-light"
        style={{ backgroundColor: "black" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr style={{ color: "white" }}>
            <th>image</th>
            <th>Switch Name</th>
            <th> Price</th>
            <th> Ratting</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody style={{ color: "white" }}>
          {switches?.map((eachSwitch) => {
            const { price, name, img, _id, ratting } = eachSwitch;
            return (
              <tr key={_id} style={{ color: "white" }}>
                <td>
                  <img width="50px" src={img} alt="" />
                </td>
                <td style={textColor}>{name}</td>
                <td style={textColor}>$ {price}</td>
                <td style={textColor}>{ratting}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeProduct(_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageAllProducts;
