"use client";
import { motion } from "framer-motion";

type Props = {
  title: string;
  url: string;
  img: string;
  desc: string;
  index: number;
};

export const staggerVariants = {
  initial: {
    y: -150,
    scale: 0,
  },
  animate: (index: number) => ({
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const DesignProject: React.FC<Props> = ({ title, url, img, desc, index }) => {
  return (
    <motion.a
      variants={staggerVariants}
      transition={{ type: "spring" }}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
      href={url}
      className="group block w-full max-w-[320px] overflow-hidden rounded-15 shadow-sm transition-transform md:flex md:max-w-none lg:block lg:max-w-[350px]"
      aria-label={title + " design"}
    >
      <div className="relative max-h-[320px] md:w-1/2 lg:w-full">
        <div className="absolute h-full w-full transform bg-[rgba(29,28,30,0.5)] opacity-0 transition group-hover:opacity-100" />
        <img
          loading="lazy"
          src={img}
          alt={title + " design"} //yeah, I know it is not a good text :S
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 bg-VeryLightPeach px-[30px] py-8 text-center transition group-hover:bg-Peach md:w-1/2 lg:w-full">
        <h3 className="text-20 font-medium uppercase tracking-[5px] text-Peach transition group-hover:text-White">
          {title}
        </h3>
        <p className="text-base text-Black transition group-hover:text-White">
          {desc}
        </p>
      </div>
    </motion.a>
  );
};

export default DesignProject;
