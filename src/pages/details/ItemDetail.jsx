import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../contex/product-contex";
import "./ItemDetail.css";

const ItemDetail = () => {
  const fetchedData = useContext(ProductContext);
  const params = useParams();
  //   console.log(params.itemId);
  const selectedItem = fetchedData.dataall.find(
    (item) => Number(item.id) === Number(params.itemId)
  );
  //   console.log(selectedItem);

  return (
    <>
      {" "}
      {!selectedItem ? (
        <div style={{ textAlign: "center" }}>
          {/* <h1>Brewing up your content... Enjoy the aroma!</h1> */}
        </div>
      ) : (
        <div className="Itemdetails flex">
          <div className="detail-image">
            <img src={selectedItem.image} alt="" />
          </div>
          <div className="item-details flex">
            <p>
              <b>{selectedItem.title}</b>
            </p>
            <p>
              <b>Price:</b>$ {selectedItem.price}
            </p>
            <p>
              {" "}
              <b>Descroption:</b> {selectedItem.description}
            </p>
            <p>
              <b>Category:</b> {selectedItem.category}
            </p>
            <p>
              <b>Ratings:</b> {selectedItem.rating.rate} <b>Count:</b>{" "}
              {selectedItem.rating.count}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
