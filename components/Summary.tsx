"use client";
import React, { useState } from "react";
import Modal from "./Modal";

const Summary = () => {
  return (
    <div className="w-full flex gap-6 flex-col mt-4">
      <div className="text-neutral-700 md:text-3xl text-xl pb-2 font-black w-max border-red-500 leading-[18px] border-b-4">
        Summary
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex w-full justify-between border-b-2 pb-2">
          <span className="text-zinc-500 text-[15px] md:text-xl font-normal leading-[18px]">
            Subtotal
          </span>
          <span className="text-neutral-700 text-[15px] md:text-xl font-normal  leading-[18px]">
            ₹ 1760.00
          </span>
        </div>

        <div className="flex w-full justify-between border-b-2 pb-2">
          <span className="text-zinc-500 text-[15px] md:text-xl font-normal leading-[18px]">
            Discount
          </span>
          <span className="text-blue-400 text-[15px] md:text-xl font-normal  leading-[18px]">
            - ₹ 765.56
          </span>
        </div>
        <div className="flex w-full justify-between border-b-2 pb-2">
          <span className="text-zinc-500 text-[15px] md:text-xl font-normal leading-[18px]">
            Delivery Fee
          </span>
          <span className="text-neutral-700 text-[15px] md:text-xl font-normal  leading-[18px]">
            ₹ 12.00
          </span>
        </div>
        <div className="flex w-full justify-between border-b-2 pb-2">
          <span className="text-zinc-500 text-[15px] md:text-xl font-normal leading-[18px]">
            Taxes
          </span>
          <span className="text-neutral-700 text-[15px] md:text-xl font-normal  leading-[18px]">
            ₹ 46.15
          </span>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <span className="text-neutral-700 md:text-3xl text-xl  font-black ">
          Total
        </span>
        <span className="text-neutral-700 md:text-3xl text-xl  font-black ">
          ₹ 1058.56
        </span>
      </div>
     
    </div>
  );
};

export default Summary;
