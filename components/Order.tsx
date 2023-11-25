const Order = () => {
  return (
    <div className="flex flex-col md:gap-8 gap-4 mt-4 w-full">
      <div className="flex justify-between w-full items-center ">
        <h1 className=" text-neutral-700 md:text-2xl text-xl font-black leading-[18px]">
          Your Order
        </h1>
        <div className="  text-rose-600 md:text-2xl  text-sm font-black  leading-[18px]">
          Add items +
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between items-center ">
          <div className="flex gap-4 items-start">
            <div className="  text-center text-white text-[15px] font-normal bg-rose-600 rounded-md md:p-2 p-1 leading-[18px]">
              1
            </div>
            <div className="flex flex-col gap-1">
              <div className="   text-neutral-700 text-[15px]  md:text-3xl  font-normal  leading-[18px]">
                Margarita B
              </div>
              <div className="  text-zinc-500 text-xs font-normal  leading-[18px]">
                tuna & cucumber
              </div>
            </div>
          </div>
          <div className="  text-neutral-700 md:text-3xl text-[15px] font-normal  leading-[18px]">
            ₹112.00
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex gap-4 items-start">
            <div className="  text-center text-white text-[15px] font-normal bg-rose-600 rounded-md md:p-2 p-1 leading-[18px]">
              2
            </div>
            <div className="flex flex-col gap-1">
              <div className="   text-neutral-700 text-[15px] md:text-3xl font-normal  leading-[18px]">
                Margarita A
              </div>
              <div className="  text-zinc-500 text-xs md:text-xl font-normal  leading-[18px]">
                crab & cucumber
              </div>
            </div>
          </div>
          <div className="  text-neutral-700 text-[15px] md:text-3xl font-normal  leading-[18px]">
            ₹412.00
          </div>
        </div>
        <div className="flex justify-between items-start ">
          <div className="flex gap-4 items-start">
            <div className="  text-center text-white text-[15px] font-normal bg-rose-600 rounded-md md:p-2 p-1 leading-[18px]">
              3
            </div>
            <div className="flex flex-col gap-1">
              <div className=" md:text-3xl  text-neutral-700 text-[15px] font-normal  leading-[18px]">
                Margarita C
              </div>
              <div className="  text-zinc-500 text-xs md:text-xl font-normal md:w-[30rem] max-w-[15rem] leading-[18px]">
                smoked salmon over rice with extra sauce to check if this line
                works
              </div>
            </div>
          </div>
          <div className="  text-neutral-700 text-[15px] font-normal md:text-3xl leading-[18px]">
            ₹1268.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
