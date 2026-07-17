import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummery } from "./OrderSummery";
import { PaymentSummary } from "./PaymentSummary";
import "./CheckoutPage.css";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummery, setPaymentSummery] = useState([null]);

  useEffect(() => {
    const fetchCheckoutData = async () =>{
      let response = await axios.get("api/delivery-options?expand=estimatedDeliveryTime")
      setDeliveryOptions(response.data);
      response = await axios.get("api/payment-summary")
      setPaymentSummery(response.data);
    }
    fetchCheckoutData();

  }, [cart]);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummery deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />
          <PaymentSummary paymentSummery={paymentSummery} />
          
        </div>
      </div>
    </>
  );
}
