import React from "react";
import "../App.css";
import { Ratings } from "./Ratings";

export const Product = ({ product }) => {
  return (
    <div>
      <a href={`/public/${product._id}`}>
        <img src={product.image} alt="" />
      </a>

      <h3>{product.name}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="Flex">
        <Ratings
          value={product.rating}
          text={`${product.numReviews} reviews`}
          color={"gold"}
        />
      </div>
      <h6>₹ {parseInt(product.price * 63.07)} </h6>
      <button className="buy-1">Buy Now</button>
    </div>
  );
};
