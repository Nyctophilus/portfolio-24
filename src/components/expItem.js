"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ExpItem = ({ i, title, desc, date, company }) => {
  const [mob, setMob] = useState(true);

  useEffect(() => {
    setMob(window.innerWidth < 768);
  }, []);

  const exp = (
    <>
      <div className="bg-white dark:text-black p-3 font-semibold rounded-b-lg rounded-s-lg capitalize">
        {title}
      </div>
      <div className="flex gap-1 flex-col my-4 px-4 text-pretty">
        {desc.map((d) => (
          <div key={d} className="text-sm">
            • {d}
          </div>
        ))}
      </div>
      <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
      {company && (
        <div className="py-1 px-3 rounded-lg bg-white dark:text-black text-sm font-semibold w-fit">
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
      {!mob && <div className="w-1/3">{i % 2 === 0 && exp}</div>}
      {/* CENTER */}
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {/* RIGHT */}
      <div className={`${mob ? "w-5/6" : "w-1/3"} pb-12`}>
        {mob ? exp : i % 2 !== 0 && exp}
      </div>
    </motion.div>
  );
};
export default ExpItem;
