import React, { useState, useEffect } from "react";
// import products from "../products";
import { Product } from "../Components/Product";
import "../App.css";
import axios from "axios";

export const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect =
    (() => {
      async function fetchProducts() {
        const { data } = await axios.get("http://127.0.0.1:8000/api/products/");
        setProducts(data);
      }
      fetchProducts();
    },
    []);
  return (
    <div className="HomeScreen">
      <fieldset>
        <legend>
          <h2>Latest Products</h2>
        </legend>
        <div className="gallery">
          {products.map((product) => (
            <div key={product._id} className="content">
              <Product product={product} />
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
