import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";


const ItemDetail = () => {
const { itemId } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const url = `https://warm-cliffs-40303.herokuapp.com/item/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  const handleRestock = () => {
    const restockInput = document.getElementById('itemInput');
    const amountText = restockInput.value;
    const amountValue = parseFloat(amountText);

    const totalItem = document.getElementById('totalQuantity');
    const totalAmountText = totalItem.innerText;
    const previouseTotalAmount = parseFloat(totalAmountText);
    totalItem.innerText = previouseTotalAmount + amountValue;
    restockInput.value = '';
  } 

  const handleDelivered = () => {
    const totalItem = document.getElementById('totalQuantity');
    const totalAmountText = totalItem.innerText;
    const previouseTotalAmount = parseFloat(totalAmountText);
    totalItem.innerText = previouseTotalAmount - 1;
  }

  return (
    <div>
        
      <img src={item.image} alt="" />
      <p>Product ID: {item._id}</p>
      <h2>Name: {item.productName}</h2>
      <p>Price: {item.price}</p>
      <p>CPU: {item.cpu}</p>
      <p>Ram: {item.ram}</p>
      <p>Storage: {item.storage}</p>
      <p>Display: {item.screen}</p>
      <p>Quantity: <span id="totalQuantity">{item.quantity}</span></p>
      <p>Supplier Name: {item.supplierName}</p>
      <p>Description: {item.description}</p>
      
          <button onClick={() => handleDelivered()}>Delivered</button>
          <br />
          <input type="text" id="itemInput" />
          <button onClick={() => handleRestock()}>Restock</button>
        
    </div>
  );
};

export default ItemDetail;