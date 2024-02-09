import { motion } from "framer-motion";

const Skill = ({ skill, i, portfolio }) => {
  return (
    <motion.div
      key={skill}
      className={`rounded-lg p-2 text-sm cursor-pointer ${
        portfolio ? "dark:invert" : ""
      } bg-black text-white hover:bg-white hover:text-black`}
      whileInView={{
        opacity: [0, 1],
      }}
      transition={{ delay: 0.1 * i }}
    >
      {skill}
    </motion.div>
  );
};
export default Skill;
