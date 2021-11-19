import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function SingleReview({ eachReview }) {
  const { userName, opinion, userEmail, _id, ratting } = eachReview;
  return (
    <Card sx={{ maxWidth: "25rem" }} style={{ backgroundColor: "dark-gray" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-success"
        >
          {userName}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="text-success"
        >
          {userEmail}
        </Typography>
        <Typography variant="body2" className="success">
          {opinion}
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
  );
}
