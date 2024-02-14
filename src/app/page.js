"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Bubbles from "@/components/bubbles";

const Homepage = () => {
  return (
    <motion.section
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-10 items-center"
    >
      {/* image container */}
      <div className="h-[20dvh] md:h-[50dvh] w-full md:w-1/2 relative">
        <Image
          src="/hero.jpg"
          className="object-contain"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="image of mohammed fayad"
        />
      </div>

      {/* text container */}
      <div className="h-1/2 w-full md:h-full md:w-1/2 flex flex-col gap-4 justify-center relative">
        <Bubbles />
        <h1 className="text-4xl md:text-6xl font-black">
          Hi, I&apos;m Mohamed Fayad
        </h1>
        <p>
          I&apos;m Computer Engineering graduate specializing in Web
          Development. I fond of creating beautiful fluid eye-pleasing websites.
          I&apos;m a highly self-motivated Agilest developer, I create
          full-stack web apps by (Next14 | Tailwind | Mongoose)
        </p>
        <div className="flex gap-4 mt-4">
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
