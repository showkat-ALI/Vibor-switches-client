import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import newsimage from "../../../resources/60dafdd7fe9f62d4362ed2e2_Why choose us-1 (2)-p-500.png";
import anothernewsimage from "../../../resources/60dafdd809d6c48242c28502_Why choose us-3 (2)-p-500.png";

const Whyus = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-light py-5">WHY CHOOSE US</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid container className="py-5 border" xs={12} md={12}>
            <Grid item xs={12} md={6}>
              <img className="md:w-50 w-100" src={newsimage} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3 className="text-light">TECHNICAL SUPPORT</h3>
              <p className="text-light">
                WE FOLLOW THE CUSTOMER IN CHOOSING THE RIGHT PRODUCT FOR HIS
                NEEDS, ALSO OFFERING A TECHNICAL AFTER-SALES SERVICE.
              </p>
            </Grid>
          </Grid>
          <Grid container className="py-5 mt-5 border" xs={12} md={12}>
            <Grid item xs={12} md={6}>
              <img className="md:w-50 w-100" src={anothernewsimage} alt="" />
            </Grid>
            <Grid item xs={12} md={6}>
              <h4 className="text-light">PRODUCTS QUALITY</h4>
              <p className="text-light">
                INNOVATIVE IDEAS AND PAYING PARTICULAR ATTENTION TO THE
                ENVIRONMENTAL IMPACTS OF INDUSTRIAL PRODUCTION ARE THE VIBOR’S
                MISSION.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Whyus;
