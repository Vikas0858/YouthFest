import { useRef } from "react";
import useToast from "/Hooks/useToast";
import { useAuth } from "../context/AuthContext";

const axios = require("axios");
const { makePayment } = require("../helper/paymentHelper");

const Payment = () => {
  const notify = useToast();
  const { currentUser } = useAuth();
  const amountRef = useRef();
  console.log(currentUser);
  const paymentHandler = (e) => {
    e.preventDefault();
    console.log(amountRef.current.value);
    const userAmount = amountRef.current.value;
    if (userAmount) {
      makePayment(userAmount, currentUser.email, currentUser.displayName);
    } else {
      notify("error", "Please enter amount");
    }
  };
  return (
    <>
      {currentUser ? (
        <form onSubmit={paymentHandler}>
          <input type="number" ref={amountRef} required />
          <input type="submit" value="Pay Now" />
        </form>
      ) : (
        <div>Please login</div>
      )}
    </>
  );
};

export default Payment;
