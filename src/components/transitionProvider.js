"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import whatsapp from "/public/whatsapp.svg";

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  const [out, setOut] = useState(false);

  useEffect(() => {
    setOut(false);

    const outId = setTimeout(() => {
      setOut(true);
    }, 5000);

    return () => clearTimeout(outId);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <div
          key={pathname}
          className="bg-gradient-to-b from-blue-50 to-red-100 dark:from-slate-950 dark:to-[#0f0505] dark:text-white"
        >
          {!out && (
            <>
              <motion.div
                className="w-[100dvw] h-[100dvh] fixed bg-black rounded-b-[100px] z-50"
                animate={{ height: "0dvh" }}
                exit={{ height: "140dvh" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.div
                className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit capitalize"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {pathname.slice(1) === "" ? "home" : pathname.slice(1)}
              </motion.div>

              <motion.div
                className="w-[100dvw] h-[100dvh] fixed bg-black rounded-t-[100px] bottom-0 z-40"
                initial={{ height: "140dvh" }}
                animate={{ height: "0dvh", transition: { delay: 0.5 } }}
              />
            </>
          )}
          <Navbar />
          <main className="min-h-[100dvh]">
            <Suspense>{children}</Suspense>
          </main>
        </div>
      </AnimatePresence>
      <Link
        href="https://wa.link/syyevq"
        target="_blank"
        title="Contact Me"
        className="fixed z-90 bottom-10 right-8 bg-green-600 p-3 rounded-full drop-shadow-3xl grid place-items-center text-white text-4xl hover:bg-green-700 hover:scale-90 duration-500"
      >
        <Image src={whatsapp} alt="WhatsApp Button" width={25} height={25} />
      </Link>
    </>
  );
};
export default TransitionProvider;
