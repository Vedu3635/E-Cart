import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductContextProvider } from "./contex/product-contex.jsx";
import { ShopContextProvider } from "./contex/shop-contex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductContextProvider>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </ProductContextProvider>
  </React.StrictMode>
);
