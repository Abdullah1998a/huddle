import illustrationMockups from "../../assets/images/illustration-mockups.svg";
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
export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row gap-12 justify-between items-center">
        <motion.div
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
          className="w-[95%] sm:w-[90%] md:w-2/3 text-center md:text-left"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug text-balance font-poppins_sb text-[hsl(192,100%,9%)]">
            Build The Community Your Fans Will Love
          </h1>
          <p className="my-6 text-[hsl(192,100%,9%)]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <motion.button
            variants={scaleVariants}
            whileHover={{ opacity: 0.6 }}
            className="btn text-base bg-[hsl(322,100%,66%)] text-white border-none"
          >
            Get Started For Free
          </motion.button>
        </motion.div>
        <motion.div variants={scaleVariants} initial="hidden" animate="visible">
          <img src={illustrationMockups} alt="illustration mockups" />
        </motion.div>
      </div>
    </header>
  );
}
