"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Switch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const isDark = params.get("isDark");

  useEffect(() => {
    const store = localStorage.getItem("isDark");
    store && router.push(`?isDark=${store}`);
    isDark === "true"
      ? document?.body.classList.add("dark")
      : document?.body.classList.remove("dark");
  }, []);

  isDark === "true"
    ? document?.body.classList.add("dark")
    : document?.body.classList.remove("dark");

  return (
    <button
      className="toggleBtn"
      data-darkmode={isDark === "true"}
      style={{ justifyContent: isDark === "true" ? "flex-end" : "flex-start" }}
      onClick={() => {
        router.push(`?isDark=${isDark === "true" ? false : true}`);
        localStorage.setItem("isDark", isDark === "true" ? false : true);
      }}
    >
      <motion.div layout className="handle">
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            className="icon"
            key={isDark === "true" ? "moon" : "sun"}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark === "true" ? <>&#127769;</> : <>&#9788;</>}
          </motion.i>
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default Switch;
