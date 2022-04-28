import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { registerFormValidator } from "../../utilities";
import { useAuth } from "../../contexts/auth-context";
import { Spinner } from "react-bootstrap";

export const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (auth.token) {
      navigate("/", { replace: true });
    }
  }, []);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [mismatchError, setMismatchError] = useState("");

  const registerFormHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let email = formData.get("email");
    let password = formData.get("password");
    let rePassword = formData.get("rePassword");
    let errors = registerFormValidator(
      firstName,
      lastName,
      email,
      password,
      rePassword
    );
    if (errors === false) {
      // register user api call
      auth.register(formData, () => {
        navigate("/login", { replace: true, state: { from: location } });
      });
    } else {
      setFirstNameError(errors.firstNameError);
      setLastNameError(errors.lastNameError);
      setEmailError(errors.emailError);
      setPassError(errors.passError);
      setMismatchError(errors.mismatchError);
    }
  };
  return (
    <div className="login-page-container">
      <form className="card signup-card" onSubmit={registerFormHandler}>
        <h2 className="text-center">Sign Up</h2>
        <input
          type="text"
          className="form-field signup-input"
          placeholder="First Name"
          name="firstName"
          required
          onChange={() => setFirstNameError("")}
        />
        {firstNameError && <p style={{ color: "red" }}>{firstNameError}</p>}
        <input
          type="text"
          className="form-field signup-input"
          placeholder="Last Name"
          name="lastName"
          required
          onChange={() => setLastNameError("")}
        />
        {lastNameError && <p style={{ color: "red" }}>{lastNameError}</p>}
        <input
          type="email"
          className="form-field signup-input"
          placeholder="Your Email"
          name="email"
          required
          onChange={() => setEmailError("")}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <input
          type="password"
          className="form-field signup-input"
          placeholder="Password"
          name="password"
          required
          onChange={() => setPassError("")}
        />
        {passError && <p style={{ color: "red" }}>{passError}</p>}
        <input
          type="password"
          className="form-field signup-input"
          placeholder="Confirm Password"
          name="rePassword"
          required
          onChange={() => setMismatchError("")}
        />
        {mismatchError && <p style={{ color: "red" }}>{mismatchError}</p>}
        <button
          type="submit"
          className="btn btn-primary btn-login"
          disabled={auth.loading}
        >
          {auth.loading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            "Sign Up"
          )}
        </button>
        <p className="text-center">
          Already signed up?{" "}
          <Link to="/login" className="btn btn-link">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};
