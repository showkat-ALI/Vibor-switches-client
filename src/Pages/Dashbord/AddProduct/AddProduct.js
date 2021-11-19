import React from "react";
import { useForm } from "react-hook-form";
// import { Alert, Spinner } from 'react-bootstrap';

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://floating-sands-61100.herokuapp.com/switches/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    reset();
    alert("Product Added");
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <h1 className="text-light text-center">Add Product to List</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="mb-4 py-2 px-4"
          placeholder="Product Name"
          {...register("name")}
        />
        <br />
        <br />
        <input
          className="mb-4 py-2 px-4"
          placeholder="Product Price"
          {...register("price")}
        />
        <br />
        <br />
        <input
          className="mb-4 py-2 px-4"
          placeholder="Valid image url"
          {...register("img")}
        />
        <br />
        <br />
        <input
          className="mb-4 py-2 px-4"
          placeholder="Description for the product"
          {...register("desc")}
        />
        <br />
        <br />
        <input
          className="mb-4 py-2 px-4"
          placeholder="rate (0 - 5.0)"
          {...register("ratting", { min: 0.0, max: 5.0 })}
        />
        <br />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="btn btn-success p-3" type="submit" />
      </form>
    </div>
  );
}
