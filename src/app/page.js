"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.section
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="container h-[calc(100dvh-6rem)] mx-auto px-4 flex flex-col md:flex-row md:gap-10 mt-12"
    >
      {/* image container */}
      <div className="h-1/2 w-full md:h-full md:w-1/2 relative">
        <Image
          src="/hero.jpg"
          className="object-contain"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="image of mohammed fayad"
        />
      </div>

      {/* text container */}
      <div className="h-1/2 w-full md:h-full md:w-1/2 flex flex-col gap-8 justify-center">
        <h1 className="text-4xl md:text-6xl font-black">
          Hi, I'm Mohamed Fayad
        </h1>
        <p>
          I'm Computer Engineering graduate specializing in Web Development. I
          fond of creating beautiful fluid eye-pleasing websites. I'm a highly
          self-motivated Agilest developer, I create full-stack web apps by
          (Next14 | Tailwind | Mongoose)
        </p>
        <div className="flex gap-4">
          <Link
            href="https://drive.google.com/file/d/1fxP5qrmVgm8dNeEaW73W8RZXGP5zSVT0/view"
            className="btn"
            target="_blank"
          >
            download CV
          </Link>
          <Link href="/portfolio" className="btn-alt">
            view my work
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Homepage;
