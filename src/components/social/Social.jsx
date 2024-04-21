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
const scaleVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};
const icons = [
  {
    id: 1,
    link: "https://www.facebook.com",
    svg: {
      path: "M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5Z",
    },
  },
  {
    id: 2,
    link: "https://www.twitter.com",
    svg: {
      path: "M8.283 20.263c7.547 0 11.676-6.259 11.676-11.677c0-.176 0-.352-.008-.528A8.36 8.36 0 0 0 22 5.928a8.317 8.317 0 0 1-2.36.649a4.129 4.129 0 0 0 1.808-2.273a8.163 8.163 0 0 1-2.61.993A4.096 4.096 0 0 0 15.847 4a4.109 4.109 0 0 0-4.106 4.106c0 .32.04.632.104.936a11.654 11.654 0 0 1-8.46-4.29a4.115 4.115 0 0 0 1.273 5.482A4.151 4.151 0 0 1 2.8 9.722v.056a4.113 4.113 0 0 0 3.29 4.026a4.001 4.001 0 0 1-1.08.144c-.265 0-.521-.024-.77-.072a4.104 4.104 0 0 0 3.834 2.85a8.231 8.231 0 0 1-5.098 1.76c-.328 0-.656-.016-.976-.056a11.674 11.674 0 0 0 6.283 1.833",
    },
  },
  {
    id: 3,
    link: "https://www.instagram.com",
    svg: {
      path: "M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z",
    },
  },
];
export default function Social() {
  return (
    <motion.ul
      variants={faddingVariants}
      className="my-6 md:my-0 flex gap-6 self-center md:self-start"
    >
      {icons.map(({ id, link, svg: { path } }) => (
        <motion.li
          className="group aspect-square p-1 border-2 rounded-full border-white hover:border-[hsl(322,100%,66%)] duration-200"
          key={id}
          variants={scaleVariants}
        >
          <a href={link}>
            {id === 3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.2em"
                className="flex justify-center items-center fill-white group-hover:fill-[hsl(322,100%,66%)] duration-200 translate-y-[0.2rem]"
                viewBox="0 0 20 21"
              >
                <path d={path} />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                className="flex justify-center items-center fill-white group-hover:fill-[hsl(322,100%,66%)] duration-200 translate-y-[0.125rem]"
                viewBox="0 0 24 29"
              >
                <path d={path} />
              </svg>
            )}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}
