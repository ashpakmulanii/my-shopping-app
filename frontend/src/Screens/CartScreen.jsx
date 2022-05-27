import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Actions/cartActions";
import "./cartScreen_style.css";
import { Ratings } from "../Components/Ratings";

export const CartScreen = () => {
  const { id } = useParams();
  console.log("Product ID is : ", id);
  const location = useLocation();
  const [qty, setQty] = useState(
    location.search ? Number(location.search.split("=")[1]) : 1
  );
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const addToCartHandler = () => {
    alert("Purchased !");
  };
  return (
    <div className="CartScreen">
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty <Link to="/">Go back</Link>
        </p>
      ) : (
        <div className="card" style={{ width: "100%" }}>
          <nav>
            <Link to="/">Back</Link>
          </nav>

          {cartItems.map((item) => (
            <div>
              <div
                className="description"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div className="photo">
                  <img src={item.image} height="100" />
                </div>
                <h3>{item.name}</h3>
                <h2>₹{item.price}</h2>
                <div
                  className="Count_Dropdown"
                  style={{ paddingBottom: "15px" }}
                >
                  <label for="qty"></label>
                  <select
                    name="qty"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(addToCart(item.product, e.target.value))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>{" "}
                {item.countInStock > 0 ? (
                  <button className="btn" onClick={addToCartHandler}>
                    Buy Now
                  </button>
                ) : (
                  <span
                    style={{
                      color: "red",
                      fontSize: "14px",
                      paddingRight: "7px",
                    }}
                  >
                    Out of Stock
                  </span>
                )}
                <i class="fa fa-trash" aria-hidden="true"></i>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
