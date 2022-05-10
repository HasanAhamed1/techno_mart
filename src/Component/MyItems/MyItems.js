
import React, { useEffect, useState } from "react";

import useItems from "../Hooks/useItems";

const MyItems = () => {
const [items, setItems] = useItems();



  return (
    <div>
        
      <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 pt-10">
        {items.map((item) => (
          <div key={item._id}>
            <div className="border bg-gray-100">
              <img src={item.image} alt="" />
              <div className="p-5 font-semibold">
                <h2>{item.productName}</h2>
                <p>
                  Price: <span className="font-thin">{item.price}</span>
                </p>
                <p>
                  Quantity: <span className="font-thin">{item.quantity}</span>
                </p>
                <p>
                  Supplier Name: <span className="font-thin">{item.supplierName}</span>
                </p>
                <p>
                  Email: <span className="font-thin">{item.email}</span>
                </p>
                <p>
                  Description: <span className="font-thin">{item.description}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems