import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Skill from "./skill";

const ProjectItem = ({
  _id,
  title,
  description,
  image,
  skills,
  gitUrl,
  previewUrl,
  index,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opcityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div
      className="snap-start mx-auto min-h-[100dvh] pt-20 flex items-center justify-center bg-gradient-to-r from-sky-50 to-indigo-100 dark:from-slate-950 dark:to-[#0f0505]"
      id={title.toLowerCase().replaceAll(" ", "-")}
      key={_id}
    >
      <motion.div
        ref={ref}
        style={{
          opacity: opcityProgress,
          scale: scaleProgress,
        }}
        className="flex flex-col lg:flex-row gap-12 mt-7 lg:mt-0 lg:pt-20 dark:text-white rounded-3xl bg-slate-50 dark:bg-slate-900 max-w-[90dvw]"
      >
        <div
          className={`relative w-full h-80 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px] rounded-tl-3xl rounded-tr-3xl shadow-2xl overflow-hidden ${
            index % 2
              ? "lg:rounded-tr-3xl lg:rounded-tl-none shadow-[16px_0px_50px_0px_#00000050] hover:rotate-1 origin-bottom-left"
              : "lg:rounded-tl-3xl lg:rounded-tr-none -shadow-[16px_0px_50px_0px_#00000050] hover:-rotate-1 origin-bottom-right"
          } mt-auto transition-transform duration-500`}
        >
          <Image
            src={image}
            alt={`${title} project image`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="lazy"
            className="object-cover object-top"
          />
        </div>

        <div
          className={`${
            index % 2 ? "" : "lg:-order-1"
          } flex flex-col gap-4 px-6`}
        >
          <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
            {title}
          </h1>
          <p className="w-full lg:w-[500px] lg:text-lg xl:w-[600px]">
            {description}
          </p>

          <div className="flex gap-4 flex-wrap">
            {skills.map((skill, i) => (
              <Skill skill={skill} key={i} i={i} portfolio />
            ))}
          </div>

          <div className="flex gap-2 mt-auto mb-2 self-end">
            {gitUrl ? (
              <Link
                href={gitUrl}
                target="_blank"
                className="p-2 text-sm md:p-4 md:text-md ring ring-gray-800 dark:ring-white lg:text-lg text-white bg-gray-800 hover:bg-transparent hover:text-gray-800 transition-colors dark:bg-white dark:text-gray-800 dark:hover:text-white dark:hover:bg-transparent font-semibold m-4 rounded"
              >
                GitHub repo
              </Link>
            ) : (
              <div className="cursor-not-allowed p-2 text-sm md:p-4 md:text-md ring ring-gray-400 dark:ring-white lg:text-lg text-white bg-gray-400 transition-colors dark:bg-white dark:text-gray-400 font-semibold m-4 rounded">
                Private Project
              </div>
            )}
            <Link
              href={previewUrl}
              target="_blank"
              className="p-2 text-sm md:p-4 md:text-md ring ring-gray-800 dark:ring-white lg:text-lg text-white bg-gray-800 hover:bg-transparent hover:text-gray-800 transition-colors dark:bg-white dark:text-gray-800 dark:hover:text-white dark:hover:bg-transparent font-semibold m-4 rounded"
            >
              See Demo
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectItem;
