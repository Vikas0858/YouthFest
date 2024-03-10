const Razorpay = require("razorpay");
import { nanoid } from "nanoid";
export default async function handler(req, res) {
  // console.log(process.env.RAZORPAY_KEY, process.env.RAZORPAY_SECRET)
  if (req.method === "POST") {
    const { amount, email } = JSON.parse(req.body);
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const intamount = parseInt(amount);
    console.log(typeof intamount);
    const payment_capture = 1;
    const currency = "INR";
    const options = {
      amount: (intamount * 100).toString(),
      currency,
      receipt: nanoid(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  } else {
    res.status(400).json({ message: "Wrong request method" });
  }
}
