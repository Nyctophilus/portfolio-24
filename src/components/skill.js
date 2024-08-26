import { motion } from "framer-motion";

const Skill = ({ skill, i, portfolio }) => {
  return (
    <motion.div
      key={skill}
      className={`capitalize rounded-lg p-2 text-sm cursor-pointer ${
        portfolio ? "dark:invert" : ""
      } bg-black text-white hover:bg-white hover:text-black duration-300 transition-colors`}
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
