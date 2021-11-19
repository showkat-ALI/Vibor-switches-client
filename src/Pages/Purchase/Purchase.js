import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Rating from "react-rating";
import { Alert } from "react-bootstrap";
import "../Dashbord/Dashboared/Dashbored.css";

import useAuth from "../../hooks/useAuth";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [singleSwitch, setSingleSwitch] = useState({});
  const [switchAdded, setSwitchAdded] = useState(false);
  const { _id, name, desc, price, img, ratting } = singleSwitch;
  console.log(user);
  useEffect(() => {
    fetch(`https://floating-sands-61100.herokuapp.com/checkout/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleSwitch(data));
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.existprdc = { name };
    data.existprdcprice = { price };
    data.prdcid = { _id };
    data.prdcimg = { img };
    data.status = "pending";
    fetch("https://floating-sands-61100.herokuapp.com/confirmedorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setSwitchAdded(true);
          reset();
        }
      });
  };

  return (
    <Box
      style={{ backgroundColor: "black" }}
      className="container"
      sx={{ flexGrow: 1 }}
    >
      {switchAdded && (
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>Your Switch Added</p>
        </Alert>
      )}
      <h1 className="text-center text-light"> Purchase Yout Product</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{ maxWidth: "25rem" }}
            style={{ backgroundColor: "dark-gray" }}
          >
            <CardMedia component="img" image={img} alt="green iguana" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="text-primary"
              >
                {name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-primary"
              >
                {desc}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-primary"
              >
                $ {price}
              </Typography>
              <div>
                <Rating
                  initialRating={ratting}
                  readonly
                  emptySymbol={<FaRegStar />}
                  fullSymbol={<FaStar />}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              className="mb-4 py-2 px-4"
              defaultValue={user?.displayName}
              {...register("userName")}
            />
            <br />
            <input
              className="mb-4 py-2 px-4"
              defaultValue={user?.email}
              {...register("userEmail")}
            />
            <br />

            <input
              className="mb-4 py-2 px-4"
              disabled
              defaultValue={singleSwitch.name}
              {...register("productName")}
            />

            <br />

            <input
              className="mb-4 py-2 px-4"
              disabled
              defaultValue={singleSwitch.price}
              {...register("productPrice")}
            />

            <br />

            {/* include validation with required or other standard HTML validation rules */}
            <input
              className="mb-4 py-2 px-4"
              {...register("address", { required: true })}
              placeholder="Your Address"
            />
            <br />

            <input
              className="mb-4 py-2 px-4"
              {...register("phone", { required: true })}
              placeholder="Your Phone"
            />
            <br />
            <input
              className="mb-4 py-2 px-4"
              {...register("opinion", { required: true })}
              placeholder="Your Opinion"
            />
            <br />

            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" className="btn-grad-orders" />
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Purchase;
