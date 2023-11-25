"use client";
import { NextApiResponse } from "next";
import React, { useState } from "react";
import ModalComponent from "./Modal";
import { transactionDetails } from "@/type";

const MakePaymentComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [transactionDetails, setTransactionDetails] =
    useState<transactionDetails>();
  const makePayment = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taxAmt: 1058.56,
      }),
    }).then((t) => t.json());
    console.log({ data });
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "TSX PIZZERIAS",
      currency: data.currency,
      amount: data.amount ,
      order_id: data.id,
      description: "Your Pizza Will Ready In 20 Min....",
      image: "https://1tsp.in/wp-content/uploads/2021/07/image-1.jpg",
      //@ts-ignore
      handler: function (response) {
        setTransactionDetails({ ...response, ...data });
        setShowModal(true);
      },
    };
    //@ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <>
      <button
        className=" bg-black p-2 rounded-xl mt-4 w-full hover:bg-neutral-900"
        onClick={() => makePayment()}
      >
        <div className=" text-center text-neutral-50 text-[15px] md:text-2xl font-extrabold  uppercase leading-[13px] tracking-wide">
          place order
        </div>
      </button>
      {showModal && (
        <ModalComponent
          showModal={showModal}
          setShowModal={setShowModal}
          transactionDetails={transactionDetails}
        />
      )}
    </>
  );
};

export default MakePaymentComponent;
