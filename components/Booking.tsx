import React from "react";
type Props = {};

const Booking = (props: Props) => {
  return (
    <section className="flex flex-col items-center py-24">
      <h3 className="font-semibold text-4xl sm:text-6xl md:text-4xl tracking-tight text-gray-900 w-[768px] sm:w-[80%] md:w-[768px] text-center">
        Want to build your own chat app based on VoceChat? Book a meeting with our CEO
      </h3>
      <p className="w-192 text-center text-xl text-gray-500 mt-5 mb-16 ">
        Be the first to know about releases and industry news and insights.
      </p>
      <div className="flex gap-4 sm:flex-col sm:items-center md:flex-row">
        <input
          className="rounded-md border border-gray-300 px-4 py-3 w-[360px] text-md sm:text-2xl md:text-md"
          type="email"
          placeholder="Enter your email"
        />
        <button className="btn-primary"> Subscribe</button>
      </div>
    </section>
  );
};

export default Booking;
