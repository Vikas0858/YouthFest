const axios = require("axios");

// import useToast from "../Hooks/useToast";
export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const makePayment = async (amount, email, username, callBack) => {
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    return;
  }

  const response = await axios.post(process.env.RAZORPAY_API, {
    amount,
    email,
  });
  const data = await response.data;
  console.log(`helper` + process.env.RAZORPAY_KEY);
  var options = {
    key: process.env.RAZORPAY_KEY,
    name: "YouthfestMnit",
    currency: data.currency,
    amount: parseInt(data.amount),
    order_id: data.id,
    description: "Thankyou for buying credits",
    // image: "",
    handler: async function (response) {
      const razorData = {
        orderCreationId: data.id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await fetch("/api/paymentSuccess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(razorData),
      });

      const res = await result.json();
      console.log(res);
      await callBack();
      console.log("done");
      // notify(res.status,res.message)
    },
    prefill: {
      name: username,
      email: email,
    },
    theme: {
      color: "#61dafb",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
