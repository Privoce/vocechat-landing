import React, { ChangeEvent, useState, useRef, FormEvent } from "react";
import { PopupModal } from "react-calendly";
type Props = {};

const Booking = (props: Props) => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [opened, setOpened] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!emailRef.current?.checkValidity()) {
      return;
    }
    const emailVal = evt.currentTarget.email.value;
    console.log("wtf", emailVal);
    setEmail(emailVal);
    setOpened(true);
  };
  return (
    <section className="flex flex-col items-center py-24">
      <h3 className="font-semibold text-4xl sm:text-5xl md:text-4xl tracking-tight text-gray-900 w-[768px] sm:w-[80%] md:w-[768px] text-center">
        Want to build your own chat app based on VoceChat? Book a meeting with our CEO
      </h3>
      <p className="w-192 text-center text-xl text-gray-500 mt-5 mb-16 ">
        Be the first to know about releases and industry news and insights.
      </p>
      <form
        action="#"
        className="flex gap-4 sm:flex-col sm:items-center md:flex-row"
        onSubmit={handleSubmit}
      >
        <input
          required
          name="email"
          ref={emailRef}
          className="rounded-md outline-none border border-gray-300 px-4 py-3 w-[360px] sm:text-xl md:text-md  focus:invalid:border-red-300 focus:valid:border-green-300 "
          type="email"
          placeholder="Enter your email"
        />
        <button type="submit" className="btn-primary">
          Click here to schedule!
        </button>
      </form>
      {opened && (
        <PopupModal
          url="https://calendly.com/hansu"
          prefill={{ email }}
          onModalClose={() => setOpened(false)}
          open={true}
          // open={opened}
          rootElement={document.getElementById("root_modal") as HTMLElement}
        />
      )}
    </section>
  );
};

export default Booking;
