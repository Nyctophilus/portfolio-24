"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Loading from "@/app/loading";

const Bubbles = dynamic(() => import("@/components/bubbles"), {
  loading: () => <Loading />,
});
const Socials = dynamic(() => import("@/components/socials"), {
  loading: () => <Loading />,
});
const StackSection = dynamic(
  () => import("./StackSection").then((mod) => mod.StackSection),
  {
    loading: () => <Loading />,
  }
);

const HomePage = ({ projects }) => {
  return (
    <motion.section
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto flex flex-col gap-y-12 flex-wrap items-center justify-center mt-12 mb-24 p-3 max-w-lg"
    >
      <div className="flex justify-between items-center w-full border p-5 rounded-lg border-zinc-800">
        <div className="flex flex-col justify-center items-start w-full">
          <div className="flex justify-center items-center gap-2">
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full animate-beat cursor-pointer">
              <Image
                src="/hero.jpg"
                className="aspect-square h-full w-full"
                fill
                sizes="5vw"
                alt="image of mohammed fayad"
              />
            </span>
            <div>
              <h1 className="font-semibold leading-7">Muhammed Yousry Fayad</h1>
              <p className="text-xs font-light">Full (MERN) Stack Engineer</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <p className="text-xs font-normal">
              Looking to hire me? Email me @{" "}
              <Link
                className="cursor-pointer"
                href={"mailto:mohammed.yuossry@gmail.com"}
              >
                mohammed.yuossry@gmail.com
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Socials />
        </div>
      </div>

      {/* brief */}
      <div className="flex flex-col w-full relative">
        <Bubbles />

        <p className="text-sm">
          Hello! digital art is my passion. Generally I'm a Software Engineer
          focus on frontend development with React.js. I love to read books and
          write clean code and I'm always looking for new challenges.
        </p>
        <div className="flex gap-x-6 mt-4">
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

      <div className="flex flex-col w-full">
        <h2 className="capitalize text-xl font-bold dark:font-semibold">
          freelance work 🖥️
        </h2>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 h-[1px] mt-2 w-full bg-zinc-400 dark:bg-zinc-800"
        ></div>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
          {Array.isArray(projects) &&
            projects
              .filter((project) => !project.gitUrl)
              .map((project) => (
                <Link
                  target="_blank"
                  className="flex flex-col w-full"
                  href={project.previewUrl}
                  key={project.title}
                >
                  <p className="font-bold dark:font-normal light:font-bold text-sm hover:underline leading-7">
                    {project.title}
                  </p>
                  <p className="ps-1 text-sm text-gray-400 font-medium dark:font-normal">
                    {project.description}
                  </p>
                </Link>
              ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col w-full">
        <h2 className="capitalize text-xl font-bold dark:font-semibold">
          Tech Stack 🛠️
        </h2>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 h-[1px] mt-2 w-full bg-zinc-400 dark:bg-zinc-800"
        ></div>

        <StackSection />
      </div>
    </motion.section>
  );
};
export default HomePage;

// const OldView_Backup = () => (
//   <>
//     {/* image container */}
//     <div className="h-[20dvh] md:h-[50dvh] w-full md:w-1/2 relative">
//       <Image
//         src="/hero.jpg"
//         className="object-contain"
//         fill
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         alt="image of mohammed fayad"
//       />
//     </div>

//     {/* text container */}
//     <div className="h-1/2 w-full md:h-full md:w-1/2 flex flex-col gap-4 justify-center relative">
//       <Bubbles />
//       <h1 className="text-4xl md:text-6xl font-black">
//         Hi, I&apos;m Mohamed Fayad
//       </h1>
//       <p>
//         I&apos;m Computer Engineering graduate specializing in Web Development.
//         I fond of creating beautiful fluid eye-pleasing websites. I&apos;m a
//         highly self-motivated Agilest developer, I create full-stack web apps by
//         (Next14 | Tailwind | Mongoose)
//       </p>
//       <div className="flex gap-4 mt-4">
//         <Link
//           href="https://drive.google.com/file/d/1fxP5qrmVgm8dNeEaW73W8RZXGP5zSVT0/view"
//           className="btn"
//           target="_blank"
//         >
//           download CV
//         </Link>
//         <Link href="/portfolio" className="btn-alt">
//           view my work
//         </Link>
//       </div>
//     </div>
//   </>
// );
