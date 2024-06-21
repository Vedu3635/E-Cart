import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [dataall, setDataall] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products/");
        const result = await response.json();
        setLoading(false);
        setDataall(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductContext.Provider
      value={{ dataall, setDataall, loading, setLoading }}
    >
      {children}
    </ProductContext.Provider>
  );
};
