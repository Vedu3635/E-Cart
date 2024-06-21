import React from "react";
import Product from "../../componenets/product/Products";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-Shop</h1>
      </div>
      <div className="products">
        <Product />
      </div>
    </div>
  );
};

export default Shop;
