import React from "react";
import products from "../products";
import { Product } from "../Components/Product";
import "../App.css";

export const HomeScreen = () => {
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
