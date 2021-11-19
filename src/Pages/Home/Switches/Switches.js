import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Spinner } from "react-bootstrap";

import SingleSwitch from "../SingleSwitch/SingleSwitch";

const Switches = () => {
  const [switches, setSwitches] = useState([]);
  useEffect(() => {
    fetch("https://floating-sands-61100.herokuapp.com/switches")
      .then((res) => res.json())
      .then((data) => setSwitches(data));
  }, []);
  if (switches.length === 0) {
    return (
      <div className="d-flex justify-content-center">
      <Spinner className="text-center d-flex justify-content-center" animation="border" role="status">
          <Spinner animation="grow" className="text-center" variant="info" />

      </Spinner>
      </div>
    );
  }
  return (
    <>
      <Box className="container" sx={{ flexGrow: 1 }}>
        <h1 className="text-light text-center py-5">
          Switches That You May Like
        </h1>
        <Grid container spacing={2}>
          {switches.slice(0, 6).map((eachSwitch) => (
            <Grid key={eachSwitch._id} item xs={12} md={4}>
              <SingleSwitch eachSwitch={eachSwitch}></SingleSwitch>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Switches;
