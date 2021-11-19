import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <div className="pt-5" style={{ backgroundColor: "black" }}>
      <Box
        className="container pt-5"
        style={{ backgroundColor: "black" }}
        sx={{ flexGrow: 1 }}
      >
        <Grid className="py-5" style={{ color: "white" }} container spacing={2}>
          <Grid container xs={12} md={6}>
            <Grid item xs={6} md={6}>
              <div>
                <h5>Products</h5>
                <p>PRESSURE SWITCH</p>
                <p>TEMPARETURE SWITCH</p>
                <p>VACCUAM SWITCH</p>
                <p>LEVEL SWITCH</p>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div>
                <h5>Company</h5>
                <p>about us</p>
                <p>contact us</p>
                <p>News</p>
                <p>Certification</p>
              </div>
            </Grid>
          </Grid>
          <Grid container xs={12} md={6}>
            <Grid item xs={6} md={6}>
              <div>
                <h5>Vibor Srl</h5>
                <p>Via Grazioli 57 20161 Milano (MI) Italy</p>
                <p>REA - CCIAA Milano 2609297 - CAP.SOC. &Euro; 30.000,00</p>
                <p>COD. FISC / P. IVA - REG. IMPRESE MI IT11510320960</p>
              </div>
            </Grid>
            <Grid item xs={6} md={6}>
              <div className="text-center">
                <p>Tell - 777-7666-666</p>
                <p>info@vibor.com</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
