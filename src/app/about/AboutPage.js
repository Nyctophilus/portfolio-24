"use client";
import Bubbles from "@/components/bubbles";
import ExpItem from "@/components/expItem";
import ScrollSVG from "@/components/scrollSVG";
import Skill from "@/components/skill";
import { expriences, skills } from "@/static-data";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full lg:flex overflow-hidden">
        <div className="px-4 container mx-auto grid">
          {/* BIOGRAPHY */}
          <div className="relative flex flex-col gap-6 justify-center mt-16 lg:mt-32">
            <Bubbles />
            <motion.span initial={{ x: -200 }} whileInView={{ x: 0 }}>
              <Image
                src="/hero.jpg"
                alt="Muhammed fayad image"
                width={50}
                height={50}
                className="w-fit h-20 rounded-full object-cover"
                loading="lazy"
              />
            </motion.span>
            <motion.h1
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              className="font-bold text-2xl"
            >
              ABOUT ME
            </motion.h1>
            <motion.p
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              className="text-lg"
            >
              My name is Muhammed Fayad, I&apos;m located in Alexandria
              originally. Graduated from Pharos University, Engineering Faculty
              in computer major with a B-Eng Degree with total degree:
              &apos;B+&apos;
            </motion.p>
            <motion.p
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              className="text-lg"
            >
              I have a year of freelance experience in web development. My
              projects have included dashboards, real-estate websites, blogs,
              and portfolios. I specialize in{" "}
              <strong>React, Next.js, and Tailwind</strong> for front-end
              development. Additionally, I am familiar with back-end
              technologies such as Node, Express, and Mongoose. My experience
              extends to hosting websites on both shared hosting and VPS
              servers. I&apos;m excited to showcase my skills and passion for
              clean, efficient code!
            </motion.p>
            <motion.p
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              className="text-lg"
            >
              Awkwardly, I love Javascript! I keen on learning new Techs and
              tools. I dedicate -easily- 6h/day. You can say it&apos;s more like
              a hobbit to me. Also reading self-development & tech books has
              become one of my lastest interests!💡
            </motion.p>
            <motion.p
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              className="text-lg"
            >
              My <strong>graduation project</strong> was in AI & Machine
              learning specialization. GANS model to colorize grey scale videos
              based on Generative adversarial networks deep learning techniques.
              I got grade &apos;A&apos; on the project
            </motion.p>
            <motion.span
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              className="italic"
            >
              Free Palestine! 🇵🇸
            </motion.span>

            <ScrollSVG toSection={`skills`} />
          </div>

          {/* SKILLS CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center min-h-[100dvh]"
            id="skills"
          >
            <motion.h1
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring" }}
              className="flex gap-4 flex-wrap"
            >
              {skills.map((skill) => (
                <Skill skill={skill} key={skill} />
              ))}
            </motion.div>

            <ScrollSVG toSection={`exp`} />
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pt-32 mb-12"
            id="exp"
          >
            <motion.h1
              initial={{ x: "-500px" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              {expriences.map((exp, i) => (
                <ExpItem key={exp.title + exp.desc} i={i} {...exp} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
