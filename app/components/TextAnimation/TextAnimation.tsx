"use client";
import { motion, spring, Variants } from "framer-motion";

const TextAnimation = (prop: TextAnimationProp) => {
  let characters = prop.text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.01 * i,
      },
    }),
  };

  const character = {
    hidden: {
      opacity: 0,
      x: -30,
      transition: {
        type: "spring",
        dumping: 50,
        stiffness: 70,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        dumping: 50,
        stiffness: 70,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ overflow: "hidden", display: "flex" }}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={character}>
          {char == " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface TextAnimationProp {
  text: string;
}

export default TextAnimation;
