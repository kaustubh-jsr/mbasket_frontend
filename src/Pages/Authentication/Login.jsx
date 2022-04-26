import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth-context";
import { loginFormValidator } from "../../utilities";
import { Spinner } from "react-bootstrap";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;

  const auth = useAuth();

  useEffect(() => {
    if (auth.token) {
      navigate("/", { replace: true });
    }
  }, []);

  const loginFormHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let email = formData.get("email");
    let password = formData.get("password");
    let errors = loginFormValidator(email, password);
    if (errors !== false) {
      setEmailError(errors.emailErrors[0]);
      setPassError(errors.passwordErrors[0]);
    } else {
      auth.login(formData, () => {
        // If the login page is reached from a private unaccessible route, this will
        // redirect it to the same page it came from, or if no previous private route is there
        // it will redirect to the page from which login was page was reached
        if (from) {
          navigate(from, { replace: true });
        } else {
          navigate(-1, { replace: true });
        }
      });
    }
  };

  const fillDemoCreds = () => {
    setEmail("kaustubhp.jsr@gmail.com");
    setPassword("test@mantra");
  };

  return (
    <div className="login-page-container">
      <div className="card login-card">
        <h2 className="text-center">Login</h2>
        <form onSubmit={loginFormHandler}>
          <input
            type="email"
            className="form-field login-input"
            placeholder="Enter your email here"
            name="email"
            value={email}
            onChange={(e) => {
              setEmailError("");
              setEmail(e.target.value);
            }}
          />
          <p style={{ color: "red" }}>{emailError}</p>
          <input
            type="password"
            className="form-field login-input"
            placeholder="Enter your password here"
            name="password"
            value={password}
            onChange={(e) => {
              setPassError("");
              setPassword(e.target.value);
            }}
          />
          <p style={{ color: "red" }}>{passError}</p>
          <p className="text-left">
            <Link to="/forgot_password" className="btn btn-link p-sm">
              Forgot Password?
            </Link>
          </p>
          <button
            type="button"
            className="btn btn-outline-primary btn-login"
            onClick={fillDemoCreds}
          >
            Use demo credentials
          </button>
          <button
            className="btn btn-primary btn-login"
            type="submit"
            disabled={auth.loading}
          >
            {auth.loading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="text-center">
          New Here?{" "}
          <Link to="/register" className="btn btn-link">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};
