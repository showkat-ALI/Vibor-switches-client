import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Spinner } from "react-bootstrap";

import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [usersReviews, setUserReviews] = useState([]);
  useEffect(() => {
    fetch("https://floating-sands-61100.herokuapp.com/usersreview")
      .then((res) => res.json())
      .then((data) => setUserReviews(data));
  }, []);
  if (usersReviews.length === 0) {
    return (
      <Spinner className="text-center" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <>
      <Box className="container py-5" sx={{ flexGrow: 1 }}>
        <h1 className="text-center  py-5" style={{ color: "white" }}>
          Reviews
        </h1>
        <Grid container className="py-5" spacing={2}>
          {usersReviews.map((eachReview) => (
            <Grid key={eachReview._id} item xs={12} md={4}>
              <SingleReview eachReview={eachReview}></SingleReview>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Reviews;
