import React, { useState } from "react";
import ReactDOM from "react-dom";
const CheckoutAddress = ({ address, setModalShow }) => {
  return (
    <>
      <p>{`${address.houseNumber} ${address.locality}`}</p>
      <p>
        {address.city}, {address.state}
      </p>
      <p>Phone : {address.contact}</p>
      {/* <button className="btn btn-warning" onClick={() => setModalShow(true)}>
        Change address
      </button> */}
    </>
  );
};

export default CheckoutAddress;
