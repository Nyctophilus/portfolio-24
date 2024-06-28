"use client";
import SlideToRight from "@/components/TextStyles/SlideToRight";
import { motion } from "framer-motion";

export default function Loading() {
  const cubeVariants = {
    spin: {
      rotateX: 360,
      rotateY: 360,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="h-16 w-16 rounded-2xl bg-[#fce3e3]"
        variants={cubeVariants}
        animate="spin"
        style={{ perspective: 200 }}
      ></motion.div>

      <p className="text-xl mt-10">
        <SlideToRight>Loading...</SlideToRight>
      </p>
    </div>
  );
}
