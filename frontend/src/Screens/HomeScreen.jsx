import React from "react";
import products from "../products";
import { Product } from "../Components/Product";
import "../App.css";

export const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="gallery">
        {products.map((product) => (
          <div key={product._id} className="content">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
