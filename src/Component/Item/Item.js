import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const {
    _id,
    productName,
    image,
    price,
    quantity,
    supplierName,
    description,
  } = item;
  const navigate = useNavigate();

  const navigateToItemDetail = (id) => {
    navigate(`/item/${id}`);
  };
  return (
    <div className="border bg-gray-100">
      <img src={image} alt="" />
      <div className="p-5 font-semibold">
        <h2>{productName}</h2>
        <p>
          Price: <span className="font-thin">{price}</span>
        </p>
        <p>
          Quantity: <span className="font-thin">{quantity}</span>
        </p>
        <p>
          Supplier Name: <span className="font-thin">{supplierName}</span>
        </p>
        <p>
          Description: <span className="font-thin">{description}</span>
        </p>
        <button
          className="rounded bg-blue-500 text-white font-bold h-10 w-28 mt-5"
          onClick={() => navigateToItemDetail(_id)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Item;