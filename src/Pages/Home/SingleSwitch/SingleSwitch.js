import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

export default function SingleSwitch({ eachSwitch }) {
  const { price, name, desc, img, _id, ratting } = eachSwitch;
  return (
    <Card sx={{ maxWidth: "25rem" }}>
      <CardMedia component="img" image={img} alt="green iguana" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-success"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-success"
        >
          {desc.slice(0, 35)}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-success"
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
      <CardActions>
        <NavLink to={`/checkout/${_id}`}>
          <button className="btn btn-danger" size="small">
            Buy
          </button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
