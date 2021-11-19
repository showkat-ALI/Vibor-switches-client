import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../../../Shared/Footer/Footer";
import SingleSwitch from "../SingleSwitch/SingleSwitch";
import { Spinner } from "react-bootstrap";

const Allswitches = () => {
  const [switches, setSwitches] = useState([]);
  useEffect(() => {
    fetch("https://floating-sands-61100.herokuapp.com/switches")
      .then((res) => res.json())
      .then((data) => setSwitches(data));
  }, []);
  if (switches.length === 0) {
    return (
      <Spinner className="text-center" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div style={{ backgroundColor: "black" }}>
      <Box className="container" sx={{ flexGrow: 1 }}>
        <h1 className="text-center text-light py-5">
          Find the best Switches for your Need
        </h1>
        <Grid container spacing={2}>
          {switches.map((eachSwitch) => (
            <Grid key={eachSwitch._id} item xs={12} md={4}>
              <SingleSwitch eachSwitch={eachSwitch}></SingleSwitch>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer></Footer>
    </div>
  );
};

export default Allswitches;
