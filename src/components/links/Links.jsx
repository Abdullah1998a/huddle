import { footerLinks } from "../../data/footerLinks";
import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
const slideRightVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const slideLeftVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Links() {
  return (
    <motion.div
      variants={scaleVariants}
      className="my-6 md:my-0 flex flex-wrap gap-8 md:gap-24"
    >
      <ul className="space-y-4">
        {footerLinks.map(({ id, name, link }) => {
          if (id < 4) {
            return (
              <motion.li variants={slideRightVariants} key={id}>
                <motion.a
                  whileHover={{ textDecoration: "underline" }}
                  href={link}
                >
                  {name}
                </motion.a>
              </motion.li>
            );
          }
        })}
      </ul>
      <ul className="space-y-4">
        {footerLinks.map(({ id, name, link }) => {
          if (id >= 4) {
            return (
              <motion.li variants={slideLeftVariants} key={id}>
                <motion.a
                  whileHover={{ textDecoration: "underline" }}
                  href={link}
                >
                  {name}
                </motion.a>
              </motion.li>
            );
          }
        })}
      </ul>
    </motion.div>
  );
}
