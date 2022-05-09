import { TrashIcon } from "@heroicons/react/outline";
import React from "react";
import useItems from "../Hooks/useItems";

const ManageItem = () => {
  const [items, setItems] = useItems();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/item/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div>
      {items.map((item) => (
        <div className="grid justify-items-center border" key={item._id}>
          
          <img src={item.image} alt="" />
          <h2 className="mb-2"><span className="font-bold">Name:</span> {item.productName}</h2>
          <p className="mb-2"><span className="font-bold">Price:</span> {item.price}</p>
          <p className="mb-2"><span className="font-bold">Quantity:</span> {item.quantity}</p>
          <p className="mb-2"><span className="font-bold">Supplier Name:</span> {item.supplierName}</p>
          <button className="flex items-center mb-5 bg-blue-500 text-white px-5 py-2" onClick={() => handleDelete(item._id)}>
          <TrashIcon className="h-5 w-5"></TrashIcon>
          <p>Delete</p>
          </button>
          
        </div>
      ))}
    </div>
  );
};

export default ManageItem;