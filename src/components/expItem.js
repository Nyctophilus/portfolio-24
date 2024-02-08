"use client";
import { motion } from "framer-motion";

const ExpItem = ({ align, title, desc, date, company }) => {
  const exp = (
    <>
      <div className="bg-white dark:text-black p-3 font-semibold rounded-b-lg rounded-s-lg">
        {title}
      </div>
      <div className="p-3 text-sm italic">{desc}</div>
      <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
      {company && (
        <div className="p-1 rounded bg-white dark:text-black text-sm font-semibold w-fit">
          {company}
        </div>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-between h-fit"
    >
      {/* LEFT */}
      <div className="w-1/3 pb-12">{align === "left" && exp}</div>
      {/* CENTER */}
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-1/3">{align === "right" && exp}</div>
    </motion.div>
  );
};
export default ExpItem;
