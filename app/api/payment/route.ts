import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

//razorpay.js
const Razorpay = require("razorpay");
const shortid = require("shortid");

export async function POST(request: Request) {
  const { taxAmt } = await request.json();
  // console.log("taxAmt", taxAmt, request.body);
  // Initialize razorpay object
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  // Create an order -> generate the OrderID -> Send it to the Front-end
  // Also, check the amount and currency on the backend (Security measure)
  const payment_capture = 1;
  const amount = taxAmt;
  const currency = "INR";
  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    // console.log({ response });
    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
      status: 200,
    });
  } catch (err) {
    //console.log(err);
    return NextResponse.json({
      message: "Failed Payment",
      error: err,
    });
  }
}
