export type transactionDetails = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
  id: string;
  currency: string;
  amount: number;
  status: number;
};