import { motion } from "framer-motion";

const slideUPVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};
export default function Feature({ feature }) {
  const {
    img: { src, alt },
    title,
    body,
  } = feature;
  return (
    <div className="px-8 lg:pl-24 lg:pr-8 py-12 lg:py-6 shadow-lg rounded-lg border-t-[1px] border-l-[1px] flex flex-col-reverse gap-8 lg:flex-row lg:justify-between items-center lg:even:flex-row-reverse lg:even:pl-8 lg:even:pr-24 ">
      <motion.div
        variants={slideUPVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full lg:w-2/5 text-center lg:text-left"
      >
        <h3 className="text-xl lg:text-2xl text-[hsl(192,100%,9%)] font-poppins_sb">
          {title}
        </h3>
        <p className="text-[hsl(208,11%,55%)] mt-3">{body}</p>
      </motion.div>
      <motion.img
        variants={scaleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:max-w-md mx-auto lg:mx-0"
        src={src}
        alt={alt}
      />
    </div>
  );
}
