import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteOtpFromDB,
  getOtpEmail,
  resetPassword,
  verifyOtp,
} from "../../apis";
import EnterOtp from "../../components/ForgotPassword/EnterOtp";
import GetOtp from "../../components/ForgotPassword/GetOtp";
import ResetPassword from "../../components/ForgotPassword/ResetPassword";
import { useAuth } from "../../contexts/auth-context";

const ForgotPassword = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [emailSentError, setEmailSentError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpSessionKey, setOtpSessionKey] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [resetPassError, setResetPassError] = useState("");
  //   const [resPassSessionKey, setResPassSessionKey] = useState("");
  //   const [otpVerified, setOtpVerified] = useState("");

  //   const initialState = {
  //     email: "",
  //     email,
  //   };
  //   const [passResetState, passResetAction] = useReducer(passResetReducer, {});

  const getOtpHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    await getOtpEmail(formData, (resp) => {
      setLoading(false);
      if (resp.status !== "ok") {
        setEmailSentError(true);
      } else {
        setEmailSentError(false);
        setEmail(resp.email);
        setOtpSessionKey(resp.otp_session_key);
      }
    });
  };
  // can store the reset password states in local storage so that it persissts after refresh
  const verifyOtpHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setLoading(true);
    await verifyOtp(formData, otpSessionKey, async (resp) => {
      setLoading(false);
      if (resp.status === "verified") {
        setOtpVerified(true);
        // move to the reset password form
      } else {
        //   call an api to delete otp from backend
        await deleteOtpFromDB(otpSessionKey);
        setEmail("");
        setOtpSessionKey("");
      }
    });
    setLoading(false);
  };

  const resetPasswordHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get("password");
    const rePassword = formData.get("rePassword");
    if (password !== rePassword) {
      setResetPassError("Passwords do not match.");
      setLoading(false);
    } else if (password.length <= 6 || rePassword.length <= 6) {
      setResetPassError("Passwords should be minimum 6 characters.");
      setLoading(false);
    } else {
      await resetPassword(formData, otpSessionKey, (resp) => {
        if (resp.status === "ok") {
          setEmail("");
          setOtpSessionKey("");
          setOtpVerified(false);
          setLoading(false);
          navigate("/login");
        }
      });
    }
  };
  useEffect(() => {
    if (auth.token) {
      navigate("/", { replace: true });
    }
  }, [auth.token, navigate]);
  return (
    <div className="login-page-container">
      <div className="card login-card">
        <h2 className="text-center">
          {!email
            ? "Forgot Password?"
            : email && otpSessionKey && !otpVerified
            ? "Verify OTP"
            : email && otpSessionKey && otpVerified && "Reset Password"}
        </h2>
        {!email && (
          <GetOtp
            getOtpHandler={getOtpHandler}
            loading={loading}
            emailSentError={emailSentError}
            setEmailSentError={setEmailSentError}
          />
        )}
        {email && otpSessionKey && !otpVerified && (
          <EnterOtp loading={loading} verifyOtpHandler={verifyOtpHandler} />
        )}
        {email && otpSessionKey && otpVerified && (
          <ResetPassword
            resetPasswordHandler={resetPasswordHandler}
            loading={loading}
            resetPassError={resetPassError}
            setResetPassError={setResetPassError}
          />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
