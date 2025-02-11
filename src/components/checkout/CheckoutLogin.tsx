// components/CheckoutLogin.tsx
"use client";
import SignInFormCheckout from "@/forms/SignInFormCheckout";
import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

const CheckoutLogin = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { user, isAuthenticated } = useAuth();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  if (isAuthenticated) {
    return (
      <div className="checkout-verify-item">
        <div className="welcome-message p-4 bg-emerald-50 rounded-lg">
          <p className="text-emerald-700 font-medium">
            Welcome back, {user?.name}! You're signed in and ready to checkout.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-verify-item">
      <p className="checkout-verify-reveal">
        Returning customer?
        <button
          type="button"
          className="checkout-login-form-reveal-btn"
          onClick={handleCheckboxChange}
        >
          Click here to login
        </button>
      </p>
      {isChecked && (
        <div
          id="returnCustomerLoginForm"
          className="return-customer"
          style={{
            display: isChecked === true ? "block" : "none",
          }}
        >
          <SignInFormCheckout onLoginSuccess={() => setIsChecked(false)} />
        </div>
      )}
    </div>
  );
};

export default CheckoutLogin;