import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OrderedItem from "../../components/Checkout/OrderedItem";

const OrderPlaced = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location?.state?.order;
  useEffect(() => {
    console.log(order);
    if (!order) {
      navigate("/");
    }
  }, [order, navigate]);
  return (
    <div className="min-h-screen flex justify-center checkout-page">
      <div className="min-h-screen flex justify-center order-placed-header">
        <div className="card flex flex-col justify-start order-placed-card">
          <h3 className="text-center text-green">Order Placed Successfully</h3>
          <h4 className="text-center">
            Your order for {order?.noOfItems} items has been placed and will be
            delivered.
          </h4>
          <div className="text-center ordered-items-list">
            {order?.orderedItems.map((item) => (
              <OrderedItem key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
