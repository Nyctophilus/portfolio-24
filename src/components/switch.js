"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Switch = () => {
  const [isDark, setIsDark] = useState(true);
  const handleChangeTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
    isDark
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
  };

  useEffect(() => {
    if (document?.readyState) {
      setIsDark(document.documentElement.classList.contains("dark"));

      // On page load or when changing themes with respecting the operating system preference
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  return (
    <button
      className="toggleBtn"
      data-darkmode={isDark}
      style={{ justifyContent: isDark ? "flex-end" : "flex-start" }}
      onClick={handleChangeTheme}
    >
      <motion.div layout className="handle">
        <AnimatePresence mode="wait" initial={false}>
          <motion.i
            className="icon"
            key={isDark ? "moon" : "sun"}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <>&#127769;</> : <>&#9788;</>}
          </motion.i>
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default Switch;
