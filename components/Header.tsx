import React from "react";

const Header = () => {
  return (
    <div className="w-full  drop-shadow-lg p-8 flex flex-col items-center gap-4 bg-white">
      <h1 className=" text-black md:text-3xl  text-xl font-extrabold  uppercase leading-none tracking-wide">
        TSX PizzEriAs
      </h1>
      <div className=" shadow rounded-3xl border max-w-[30rem] flex justify-around w-full relative items-center bg-gray-200 ">
        <button className="bg-black rounded-3xl border border-neutral-600 text-white md:text-base text-xs font-extrabold flex-1 uppercase  md:p-2 p-1">
          Delivery
        </button>

        <button className="text-black text-xs font-normal md:text-base uppercase leading-3 tracking-wide text-center flex-1  md:p-2 p-1">
          PicK Up
        </button>
      </div>
      <footer className="flex flex-col gap-4 mt-8 w-full">
        <div className="flex w-full md:gap-16 gap-2 justify-center">
          <span className="opacity-80 text-center text-neutral-900 md:text-lg text-sm font-bold  leading-3">
            {" "}
            25 Min
          </span>
          <span className="opacity-80 text-center text-neutral-900 md:text-lg text-sm font-bold  leading-3">
            {" "}
            ₹ 20
          </span>
          <span className="opacity-80 text-center text-neutral-900 md:text-lg text-sm font-bold  leading-3">
            {" "}
            Discounts
          </span>
        </div>
        <div className=" text-center text-black  font-bold md:text-base text-xs ">
          Menu Hours: 10:00 AM to 11:00 PM
        </div>
      </footer>
    </div>
  );
};

export default Header;
