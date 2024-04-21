import { motion } from "framer-motion";

const slideLeftVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Attribution({ personal }) {
  const { name, website } = personal;
  return (
    <motion.div variants={slideLeftVariants}>
      Challenge by{" "}
      <motion.a
        whileHover={{ textDecoration: "underline", color: "hsl(322,100%,66%)" }}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </motion.a>
      . Coded by{" "}
      <motion.a
        whileHover={{ textDecoration: "underline", color: "hsl(322,100%,66%)" }}
        href={website}
        target="_blank"
      >
        {name}
      </motion.a>
      .
    </motion.div>
  );
}
