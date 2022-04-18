import React, { useState, useEffect } from "react";
// import products from "../products";
import { Product } from "../Components/Product";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { listProducts } from "../Actions/productActions";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, []);

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
