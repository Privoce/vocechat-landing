import React from "react";
import Head from "../components/Head";
import Booking from "../components/Booking";
type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <Head />
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-50 bg-[url('/img/bg.first.view.jpg')] bg-bottom bg-no-repeat bg-contain">
        <Booking />
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="text-lg font-bold text-gray-500">OR</div>
          <div className="font-semibold text-4xl p-4 border">
            Email: <a href="mailto:han@privoce.com">han@privoce.com</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
