import axios from "axios";
import { useState, useEffect } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummery } from "./OrderSummery";
import { PaymentSummary } from "./PaymentSummary";
import "./CheckoutPage.css";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummery, setPaymentSummery] = useState([null]);

  useEffect(() => {
    axios
      .get("api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

    axios.get("api/payment-summary").then((response) => {
      setPaymentSummery(response.data);
    });
  }, []);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummery deliveryOptions={deliveryOptions} cart={cart} />
          <PaymentSummary paymentSummery={paymentSummery} />
          
        </div>
      </div>
    </>
  );
}
