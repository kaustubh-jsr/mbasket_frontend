import React, { useState } from "react";
import { useEffect } from "react";
import { useCart } from "../../contexts/cart-context";
import OrderPlaced from "../OrderPlaced/OrderPlaced";
import { getCartStateApi, placeOrder as placeOrderApi } from "../../apis";
import "./Checkout.css";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import CheckoutAddress from "../../components/Checkout/CheckoutAddress";
import { AddressModal } from "../../components/Checkout/AddressModal";
import { toast } from "react-toastify";
const Checkout = () => {
  const cart = useCart();
  const navigate = useNavigate();
  const { token, userDetails } = useAuth();
  const [selectedAddress, setSelectedAddress] = useState(
    userDetails?.address_book?.[0]
  );
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponErr, setCouponErr] = useState(false);
  const [couponMsg, setCouponMsg] = useState();
  const [discountAmt, setDiscountAmt] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [order, setOrder] = useState();
  const [modalShow, setModalShow] = useState(false);
  const deliveryAmt = 40;
  const subtotal = cart.cartState.cartTotalAmount + deliveryAmt;
  const grandTotal = cart.cartState.cartTotalAmount + deliveryAmt - discountAmt;

  const handleCoupon = () => {
    if (coupon) {
      if (coupon === "FREEDELIVERY" && !couponApplied) {
        setCouponErr(false);
        setCouponMsg("Coupon Applied");
        setDiscountAmt(40);
      } else if (coupon !== "FREEDELIVERY" && !couponApplied) {
        setCouponErr(true);
        setCouponMsg("Invalid Coupon");
        setDiscountAmt(0);
      } else {
        setCouponErr(false);
        setCouponMsg("");
        setDiscountAmt(0);
      }
      setCouponApplied((prev) => !prev);
    }
  };

  const placeOrder = async () => {
    // create order api
    displayRazorpay();
  };

  useEffect(() => {
    if (!cart.cartState.cart.length) {
      navigate("/", { replace: true });
    }
  }, [cart, navigate]);
  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Razorpay SDK failed to load.Please try again later.");
      return;
    }

    const options = {
      key: "rzp_test_tekx6FpFavqqHb",
      amount: grandTotal * 100,
      currency: "INR",
      name: "Mantra Basket",
      description: "Groceries at your doors",
      handler: async function (response) {
        const resp = await placeOrderApi(
          token,
          cart,
          grandTotal,
          deliveryAmt,
          discountAmt,
          setBtnLoading
        );
        // clear cart, get order details from api
        await getCartStateApi(token, cart.cartDispatch, cart.CART_ACTIONS);
        // set OrderPlaced and order details from backend to show in OrderPlaced
        setOrder(resp.data.order);
        setOrderPlaced(true);
        navigate("/order_summary", {
          replace: true,
          state: { order: resp.data.order },
        });
      },
      prefill: {
        name: userDetails.full_name,
        email: userDetails.email,
        contact: "9988776655",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="min-h-screen flex justify-center checkout-page">
      <div className="card flex checkout-shipping-info">
        <div className="address-info flex flex-col">
          <h4 className="info-header">Shipping address</h4>
          <p className="font-semibold">{userDetails.full_name}</p>
          {selectedAddress ? (
            <CheckoutAddress
              address={selectedAddress}
              setModalShow={setModalShow}
            />
          ) : (
            <button onClick={placeOrder} className="btn btn-warning">
              Add Address
            </button>
          )}
        </div>
        <div className="address-info flex flex-col">
          <h4 className="info-header">Payment Method</h4>
          <p className="font-semibold">Online Payment</p>
        </div>
        <div className="address-info flex flex-col">
          <h4 className="info-header">Voucher, Coupon Code</h4>
          <div className="flex flex-col coupon-section">
            <div className="flex coupon-section">
              <input
                type="text"
                placeholder="FREEDELIVERY"
                className="coupon-input"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                disabled={couponApplied}
              />
              <button
                onClick={handleCoupon}
                className="btn btn-primary btn-coupon"
              >
                {!couponApplied ? "Apply" : "Remove"}
              </button>
            </div>
            {couponMsg &&
              (couponErr ? (
                <p className="coupon-err">Coupon Invalid</p>
              ) : (
                <p className="coupon-success">Coupon Applied</p>
              ))}
          </div>
        </div>
      </div>
      <AddressModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="card flex flex-col checkout-order-details justify-start">
        <p className="h5">Order Summary</p>
        <div className="flex flex-col order-detail-content">
          <div className="flex justify-between">
            <p>Items: </p>
            <p>₹ {cart.cartState.cartTotalAmount}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery : </p>
            <p>₹ 40</p>
          </div>
          <div className="flex justify-between">
            <p>Total: </p>
            <p>₹ {subtotal}</p>
          </div>
          {discountAmt !== 0 && (
            <div className="flex justify-between">
              <p>Coupon Discount: </p>
              <p>- ₹ {discountAmt}</p>
            </div>
          )}
          <hr />
          <div className="flex justify-between color-black">
            <p className="h5">You Pay: </p>
            <p className="h5">₹ {grandTotal}</p>
          </div>
          <hr />
        </div>
        <button
          disabled={btnLoading}
          onClick={placeOrder}
          className="btn btn-success"
        >
          {btnLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            "Pay and Place Order"
          )}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
