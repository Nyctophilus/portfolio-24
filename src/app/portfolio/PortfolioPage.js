"use client";

import ProjectItem from "@/components/projectItem";
import { motion } from "framer-motion";
import Link from "next/link";

const PortfolioPage = ({ projects = [] }) => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <section className="h-[calc(100vh-80px)] flex items-center justify-center relative">
        <h1 className="text-[10svw] lg:text-8xl text-center">My Work</h1>

        <Link className="absolute bottom-14 animate-bounce" href="#projects">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary size-12 rotate-90"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M5 12l14 0"
              strokeDasharray="50%"
              strokeDashoffset="50%"
            ></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </Link>
      </section>

      <section id="projects">
        {projects.map((project, index) => (
          <ProjectItem key={project.id} {...project} index={index} />
        ))}
      </section>

      <section className="snap-start h-[100dvh] flex flex-col gap-16 items-center justify-center text-center -z-10">
        <h1 className="text-4xl md:text-8xl">Do you have a opportunity?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath
                xlinkHref="#circlePath"
                className="text-xl dark:fill-white"
              >
                MERN Stack Developer & PS Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white dark:text-black dark:bg-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </section>
    </motion.div>
  );
};
export default PortfolioPage;
