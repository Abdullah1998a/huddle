import footerLogo from "../../assets/images/footer-logo.svg";
import { Attribution } from "../attribution";
import { FooterInfo } from "../footer-info";
import { motion } from "framer-motion";
import { Social } from "../social";
import { Links } from "../links";

const faddingVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const slideRightVariants = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
const personal = {
  name: "Abdullah Alnoime",
  website: "#",
};
export default function Footer() {
  return (
    <footer className="bg-[hsl(192,100%,9%)] text-neutral-100 pt-40 pb-10">
      <motion.div
        variants={faddingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-8"
      >
        <motion.a variants={slideRightVariants}>
          <img className="w-40 md:w-48" src={footerLogo} alt="footer logo" />
        </motion.a>
        <motion.div
          variants={faddingVariants}
          className="flex flex-col md:flex-row flex-wrap items-start md:gap-24 my-8"
        >
          <FooterInfo />
          <Links />
          <Social />
        </motion.div>
        <motion.div
          variants={faddingVariants}
          className="flex flex-col gap-5 md:flex-row items-center justify-between text-sm text-center md:text-left"
        >
          <motion.p variants={slideRightVariants}>
            &copy; Copyright 2018 Huddle. All rights reserved.
          </motion.p>
          <Attribution personal={personal} />
        </motion.div>
      </motion.div>
    </footer>
  );
}
