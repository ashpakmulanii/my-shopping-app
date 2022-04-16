import React from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import products from "../products";
import { Ratings } from "../Components/Ratings";

export const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  console.log(product);

  return (
    <div className="ProductScreen">
      <div className="card">
        <nav>
          <Link to="/">Back</Link>
          <div className="rightSide">
            <ul>
              <li>
                <strong>Status</strong> :{" "}
                {product.countInStock > 0 ? "In Stocks" : "Out of Stocks"}
              </li>
              <li>
                <strong>Price</strong> : ₹ {parseInt(product.price * 63.6)}
              </li>
            </ul>
          </div>
        </nav>
        <div className="photo">
          <img src={product.image} />
        </div>
        <div className="description">
          <h2>{product.name}</h2>
          <h4>{product.description}</h4>
          <Ratings
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color={"gold"}
          />
          <h1>
            <strong>₹ {parseInt(product.price * 63.6)}</strong>
          </h1>
          <p>
            Product branch is {""}
            <strong>{product.brand} </strong> with {product.countInStock}{" "}
            available stocks.
          </p>
          {product.countInStock > 0 ? (
            <button>Add to Cart</button>
          ) : (
            <span
              style={{ color: "red", fontSize: "14px", paddingRight: "7px" }}
            >
              Out of Stock
            </span>
          )}
          <button>Wishlist</button>
        </div>
      </div>
    </div>
  );
};
