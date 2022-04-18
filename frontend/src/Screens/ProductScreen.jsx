import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";
import { Ratings } from "../Components/Ratings";
import axios from "axios";

export const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${id}/`);
      setProduct(data);
    }
    fetchProduct();
  }, [product]);

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
                <strong>Price</strong> : ₹ {product.price}
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
            <strong>₹ {product.price}</strong>
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
