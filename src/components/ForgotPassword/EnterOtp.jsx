import React from "react";
import { Spinner } from "react-bootstrap";
const EnterOtp = ({ loading, verifyOtpHandler }) => {
  return (
    <form onSubmit={verifyOtpHandler}>
      <input
        type="number"
        className="form-field login-input"
        placeholder="Enter your OTP recieved to reset password."
        name="otp"
        required
      />
      <button
        className="btn btn-primary btn-login"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          "Verify OTP"
        )}
      </button>
    </form>
  );
};

export default EnterOtp;
