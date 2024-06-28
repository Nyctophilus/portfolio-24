"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Socials from "@/components/socials";
import SlideToRight from "@/components/TextStyles/SlideToRight";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(error.text);
        }
      );
  };

  return (
    <motion.div
      className="h-full py-28"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 gap-12 lg:gap-2 container mx-auto">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-12 items-center justify-center">
          <div className="text-center text-6xl">
            <SlideToRight>Say Hello</SlideToRight>
            😊
          </div>
          <p className="font-semibold px-12">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <span className="self-start ps-12 -mt-8">
            <Socials />
          </span>
        </div>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-slate-50 dark:bg-black bg-opacity-90 rounded-2xl text-xl flex flex-col gap-6 justify-center p-4 lg:p-12"
        >
          <input
            name="user_name"
            type="text"
            placeholder="User Name"
            className="ps-4 pt-2 bg-transparent border-b-2 border-b-black bg-slate-100 dark:bg-[#9494942f] dark:bg-opacity-90 outline-none"
          />

          <textarea
            rows={6}
            className="ps-4 pt-2 bg-transparent border-b-2 border-b-black bg-slate-100 dark:bg-[#9494942f]  dark:bg-opacity-90 outline-none resize-none"
            placeholder="Message"
            name="message"
          />
          <input
            name="email"
            placeholder="Your Email Address"
            type="email"
            className="ps-4 pt-2 bg-transparent border-b-2 border-b-black bg-slate-100 dark:bg-[#9494942f]  dark:bg-opacity-90 outline-none"
          />
          <button className="bg-slate-950 text-slate-50 dark:bg-[#9494942f] rounded hover:bg-slate-50 hover:text-slate-950 dark:hover:bg-slate-400 font-semibold p-4 mt-10 ring ring-slate-800">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong! {error}
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
