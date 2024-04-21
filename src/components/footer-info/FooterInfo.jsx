import { footerData } from "../../data/footerData";
import { motion } from "framer-motion";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: {
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
export default function FooterInfo() {
  return (
    <motion.ul
      variants={faddingVariants}
      className="w-[85%] md:w-1/3 my-6 md:my-0 space-y-4"
    >
      {footerData.map(({ id, img: { src, alt }, body }) => (
        <motion.li variants={slideRightVariants} className="flex gap-2 items-start" key={id}>
          <img className="translate-y-1" src={src} alt={alt} />
          <span>{body}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
