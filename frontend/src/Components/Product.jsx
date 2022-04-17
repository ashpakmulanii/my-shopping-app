import React from "react";
import "../App.css";
import { Ratings } from "./Ratings";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="" />
      </Link>

      <Link to={`/product/${product._id}`}>
        <h3>{product.name}</h3>{" "}
      </Link>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="Flex">
        <Ratings
          value={product.rating}
          text={`${product.numReviews} reviews`}
          color={"gold"}
        />
      </div>
      <h6>₹ {product.price} </h6>
      <button className="buy-1">Buy Now</button>
    </div>
  );
};
