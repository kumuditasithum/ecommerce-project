
import axios from "axios";
import { formatMoney } from "../../utils/money";
import { useState } from "react";

export function CartItemDetails({cartItem, loadCart}) {
 const [quantity, setQuantity] = useState(cartItem.quantity);
 const [update, setUpdate] = useState(false);

 const deleteCartItem = async()=>{
  await axios.delete(`/api/cart-items/${cartItem.productId}`);
  await loadCart();
 }
 const updateItem = async()=>{
  if(update){
    await axios.put(`/api/cart-items/${cartItem.productId}`,{
    quantity: Number(quantity)
    });
    setUpdate(false);
    await loadCart();
  }else{
    setUpdate(true);
  }
 }
 function changeQuantity(event){
  setQuantity(event.target.value);
 } 
 function inputKey(event){
  if (event.key == 'Enter'){
    updateItem();
  } else  if(event.key == 'Escape'){
    setQuantity(cartItem.quantity);
    setUpdate(false);
  }
 }

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            <span className="quantity-label">
              { update ? <input type="text" className="quantity-input" value={quantity}
                onChange={changeQuantity}
                onKeyDown={inputKey}/>
                      : cartItem.quantity}
            </span>
          </span>
          <span className="update-quantity-link link-primary" onClick={updateItem}>Update</span>
          <span className="delete-quantity-link link-primary" onClick={deleteCartItem}>Delete</span>
        </div>
      </div>

    </>
  );
}
