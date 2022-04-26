import React from "react";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
const GetOtp = ({
  getOtpHandler,
  loading,
  emailSentError,
  setEmailSentError,
}) => {
  return (
    <form onSubmit={getOtpHandler}>
      <input
        type="email"
        className="form-field login-input"
        placeholder="Enter your email to get an OTP to reset password"
        name="email"
        required
        onChange={() => setEmailSentError(false)}
      />
      {emailSentError && (
        <p style={{ color: "red" }}>
          This email is not registered with us,you can sign up{" "}
          <Link to="/register" style={{ textDecoration: "underline" }}>
            here
          </Link>{" "}
        </p>
      )}
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
          "Get OTP"
        )}
      </button>
    </form>
  );
};

export default GetOtp;
