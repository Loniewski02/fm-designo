"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerVariants } from "@/app/variants";

type Props = {
  title: string;
  url: string;
  img: string;
  desc: string;
  index: number;
};

const DesignProject: React.FC<Props> = ({ title, url, img, desc, index }) => {
  return (
    <motion.a
      variants={staggerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
      href={url}
      className="group block w-full max-w-[320px] overflow-hidden rounded-15 shadow-sm transition-transform active:scale-95 md:flex md:max-w-none lg:block lg:max-w-[350px]"
      aria-label={title + " design"}
    >
      <div className="relative max-h-[320px] md:w-1/2 lg:w-full">
        <div className="absolute h-full w-full transform bg-[rgba(29,28,30,0.5)] opacity-0 transition group-hover:opacity-100" />
        <Image
          loading="lazy"
          width={320}
          height={350}
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
