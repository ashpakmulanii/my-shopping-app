import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../App.css";
import { Ratings } from "../Components/Ratings";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../Actions/productActions";

export const ProductScreen = () => {
  const { id } = useParams();
  console.log(id);
  const [qty, setQty] = useState(1);
  const history = useNavigate();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch]);
  const addToCartHandler = () => {
    console.log("This is addToCartHandler !", id);
    history(`/cart/${id}?qty=${qty}`);
  };

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
          <div className="Count_Dropdown" style={{ paddingBottom: "15px" }}>
            <label for="qty" style={{ paddingRight: "10px", opacity: "0.7" }}>
              Quantity :
            </label>
            <select
              name="qty"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            >
              {[...Array(product.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>

          {product.countInStock > 0 ? (
            <button onClick={addToCartHandler}>Add to Cart</button>
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
