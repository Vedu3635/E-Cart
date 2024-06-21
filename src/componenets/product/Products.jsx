import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../../contex/shop-contex";
import { ProductContext } from "../../contex/product-contex";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const fetchedData = useContext(ProductContext);
  const { addToCart, cartItems } = useContext(ShopContext);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  const navigate = useNavigate();

  return (
    <div className="allProducts ">
      {fetchedData.loading ? (
        <div style={{ textAlign: "center" }}>
          <h1>Brewing up your content... Enjoy the aroma!</h1>
        </div>
      ) : (
        <ul className="productsList">
          {fetchedData.dataall.map((item) => {
            const cartItemAmount = cartItems[item.id];
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
                  <div className="detail-btn flex">
                    <button onClick={() => addToCart(item.id)} className="btn">
                      Add To Cart{" "}
                      {cartItemAmount > 0 && <>({cartItemAmount})</>}
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
          })}
        </ul>
      )}
    </div>
  );
};

export default Product;
