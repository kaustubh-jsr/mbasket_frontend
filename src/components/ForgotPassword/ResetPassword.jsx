import React from "react";
import { Spinner } from "react-bootstrap";

const ResetPassword = ({
  resetPasswordHandler,
  loading,
  resetPassError,
  setResetPassError,
}) => {
  return (
    <form onSubmit={resetPasswordHandler}>
      <input
        type="password"
        className="form-field login-input"
        placeholder="New Password"
        name="password"
        onChange={() => setResetPassError("")}
        required
      />
      <input
        type="password"
        className="form-field login-input"
        placeholder="Confirm new password"
        name="rePassword"
        onChange={() => setResetPassError("")}
        required
      />
      {resetPassError && <p style={{ color: "red" }}>{resetPassError}</p>}
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
          "Update Password"
        )}
      </button>
    </form>
  );
};

export default ResetPassword;
