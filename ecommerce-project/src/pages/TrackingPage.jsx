import axios from 'axios';
import dayjs from 'dayjs';
import { Link, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import './TrackingPage.css';



export function TrackingPage({cart}) {
  const { orderId, productId } = useParams();
  const [order, setOrder] = useState(null);
  useEffect(()=>{
    const getTrackingData = async ()=>{
    const response = await axios.get(`/api/orders/${orderId}?expand=products`);
    setOrder(response.data);
    }
    getTrackingData();
  },[orderId])
  
  if(!order){return null}
 const product = order.products.find((product) => product.productId ===productId)
  return (
    <>
     <Link rel="icon" type="image/svg+xml" to="tracking-favicon.png" />
     <title>Tracking</title>
      <Header cart={cart}/>
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-Link Link-primary" to="/orders">
            View all orders
          </Link >

          <div className="delivery-date">Arriving on {dayjs(product.estimatedDeliveryTimeMs)
            .format("dddd, MMMM D")}</div>

          <div className="product-info">
            {product.product.name}
          </div>

          <div className="product-info">Quantity: {product.quantity}</div>

          <img
            className="product-image"
            src={product.product.image}
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
