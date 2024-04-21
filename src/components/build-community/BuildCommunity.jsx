import { motion } from "framer-motion";

const scaleVariants = {
  hidden: { scale: 0, translateY: "50%", opacity: 0 },
  visible: {
    scale: 1,
    translateY: "50%",
    opacity: 1,
  },
};
export default function BuildCommunity() {
  return (
    <motion.section
      variants={scaleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-[90%] sm:w-fit bg-white rounded-2xl shadow border-t-[1.5px] border-l-[1.5px] p-10 flex gap-6 flex-col justify-center mx-auto"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl leading-snug text-balance font-poppins_sb text-[hsl(192,100%,9%)] text-center">
        Ready To Build Your Community?
      </h2>
      <motion.button
        whileHover={{ opacity: 0.6 }}
        className="btn text-base w-fit mx-auto bg-[hsl(322,100%,66%)] text-white px-4 md:px-24 md:py-5 border-none"
      >
        Get Started For Free
      </motion.button>
    </motion.section>
  );
}
