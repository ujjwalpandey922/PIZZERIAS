import Header from "@/components/Header";
import Order from "@/components/Order";
import MakePaymentComponent from "@/components/MakePaymentComponent";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-12 p-4 justify-between max-w-[60rem] bg-gray-100 m-auto gap-8">
      <Header />
      <Order />
      <Summary />
      <MakePaymentComponent/>
    </main>
  );
}
