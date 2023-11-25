import { transactionDetails } from "@/type";

const ModalComponent = ({
  showModal,
  setShowModal,
  transactionDetails,
}: {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  transactionDetails: transactionDetails | undefined;
}) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto ${
        showModal ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100">
        <div
          className={`relative bg-white shadow-lg rounded-lg text-gray-900 z-20 ${
            showModal ? "scale-100" : "scale-0"
          }`}
        >
          <header className="flex flex-col justify-center items-center p-3 text-green-600">
            <div className="flex justify-center w-28 h-28 border-4 border-green-600 rounded-full mb-4">
              <svg className="fill-current w-20" viewBox="0 0 20 20">
                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
              </svg>
            </div>
            <h2 className="font-semibold text-2xl">Success</h2>
          </header>
          <main className="p-3 flex-col flex gap-4 text-left w-full">
            <div className="flex gap-4 w-full items-center">
              <h1 className="sm:text-2xl text-lg font-bold">Order Id:</h1>
              <span className="sm:text-lg text-sm text-gray-700 font-bold">
                {" "}
                {transactionDetails?.razorpay_order_id}
              </span>
            </div>
            <div className="flex gap-4 w-full items-center">
              <h1 className="sm:text-2xl text-lg font-bold">Payment Id:</h1>
              <span className="sm:text-lg text-sm text-gray-700 font-bold">
                {transactionDetails?.razorpay_payment_id}
              </span>
            </div>
            <div className="flex gap-4 w-full items-center">
              <h1 className="sm:text-2xl text-lg font-bold">Amount:</h1>
              <span className="sm:text-lg text-sm text-gray-700 font-bold">
                ₹{""}
                {transactionDetails?.amount &&
                  (transactionDetails?.amount / 100).toFixed(2)}
              </span>
            </div>
          </main>
          <footer className="flex justify-center bg-transparent">
            <button
              className="bg-green-600 font-semibold text-white py-3 w-full rounded-b-md hover:bg-green-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
              onClick={() => setShowModal(false)}
            >
              Confirm
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
