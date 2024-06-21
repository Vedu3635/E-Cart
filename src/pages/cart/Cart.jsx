import React, { useContext } from "react";

import { ShopContext } from "../../contex/shop-contex";
import { ProductContext } from "../../contex/product-contex";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const fetchedData = useContext(ProductContext);
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  } = useContext(ShopContext);

  let totalAmount = getTotalCartAmount();
  totalAmount = Math.ceil(totalAmount * 100) / 100;
  const navigate = useNavigate();

  if (fetchedData.loading) {
    return (
      <div className="cart">
        <div style={{ textAlign: "center" }}>
          <h1>Brewing up your content... Enjoy the aroma!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems flex">
        <ul className="cartItems-list flex">
          {fetchedData.dataall.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <li key={item.id} className="product flex">
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="details flex">
                    <p>
                      <b>
                        {item.title.length < 39
                          ? item.title
                          : item.title.slice(0, 38) + "..."}
                      </b>
                    </p>
                    <p>$ {item.price}</p>
                    <div className="countHandler flex">
                      <button
                        className="cart-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="number"
                        value={cartItems[item.id]}
                        onChange={(e) =>
                          updateCartItemCount(Number(e.target.value), item.id)
                        }
                      />
                      <button
                        className="cart-btn btn-plus"
                        onClick={() => addToCart(item.id)}
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        className="btn"
                        onClick={() => navigate(`/item/${item.id}`)}
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
      {totalAmount > 0 ? (
        <div className="checkout flex">
          <div style={{ margin: 10 }}>
            <p> Subtotal: {totalAmount} $ </p>
          </div>
          <div>
            <button className="checkout-btn" onClick={() => navigate("/")}>
              {" "}
              Continue Shopping{" "}
            </button>
            <button className="checkout-btn"> Checkout </button>
          </div>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </div>
  );
};

export default Cart;
