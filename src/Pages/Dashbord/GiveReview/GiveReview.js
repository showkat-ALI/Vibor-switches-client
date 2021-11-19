import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../../Shared/Footer/Footer";
import "../Dashboared/Dashbored.css";

const GiveReview = () => {
  const { user } = useAuth();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://floating-sands-61100.herokuapp.com/usersreview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(reset());
  };

  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <h1 className="text-light text-center">Give review here</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="py-2 px-4 mb-4"
            defaultValue={user?.displayName}
            {...register("userName")}
          />
          <br />
          <input
            className="py-2 px-4 mb-4"
            defaultValue={user?.email}
            {...register("userEmail")}
          />
          <br />
          <input
            className="py-2 px-4 mb-4"
            {...register("ratting", { required: true })}
            placeholder="Your Ratting (0-5)"
          />
          <br />

          <input
            className="py-2 px-4 mb-4"
            {...register("opinion", { required: true })}
            placeholder="Your Opinion"
          />
          <br />

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="btn-grad-products" type="submit" />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default GiveReview;
