import logo from "../../assets/images/logo.svg";
import { motion } from "framer-motion";

const slideRightVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const slideLeftVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 md:px-8 py-8 flex justify-between items-center">
      <motion.a
        variants={slideRightVariants}
        initial="hidden"
        animate="visible"
      >
        <img className="w-32 md:w-44" src={logo} alt="logo" />
      </motion.a>
      <motion.button
        variants={slideLeftVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ opacity: 0.6 }}
        className="btn"
      >
        Try It Free
      </motion.button>
    </nav>
  );
}
