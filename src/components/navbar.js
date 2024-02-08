"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import { links } from "@/static-data";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import Socials from "./socials";
import Switch from "./switch";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "var(--primary)" },
  };
  const centerVariant = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariant = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "var(--primary)" },
  };

  const listVariants = {
    closed: { x: "100dvw" },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -10 },
    opened: { opacity: 1, x: 0 },
  };

  const MotionLink = motion(Link);

  return (
    <nav className="h-20 flex items-center justify-between container mx-auto px-12 sticky top-5 z-20 bg-white dark:bg-black backdrop-blur-md dark:bg-opacity-5 bg-opacity-50 shadow-lg rounded-full">
      {/* page links */}
      <div className="hidden md:flex gap-2 text-xl">
        {links.map(({ url, title }) => (
          <NavLink url={url} key={url} title={title}></NavLink>
        ))}
      </div>

      {/* logo */}
      <div className="md:hidden lg:block">
        <Link href="/">
          <Image
            src={logo}
            alt="mohammed fayad logo"
            width={40}
            height={30}
            style={{ width: "auto" }}
          />
        </Link>
      </div>

      {/* socials */}
      <Socials />

      {/* menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between relative z-50 "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black dark:invert rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black dark:invert rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black dark:invert rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="fixed z-10 top-0 left-0 w-[100dvw] h-[100dvh] bg-black text-white flex flex-col gap-8 items-center justify-center text-4xl"
          >
            {links.map(({ url, title }) => (
              <MotionLink
                variants={linkVariants}
                key={url}
                href={url}
                className="capitalize"
              >
                {title}
              </MotionLink>
            ))}
          </motion.div>
        )}
      </div>

      <Switch />
    </nav>
  );
};
export default Navbar;
