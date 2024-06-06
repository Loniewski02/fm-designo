"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import Wrapper from "../layout/Wrapper";
import Circles from "@/public/assets/shared/desktop/bg-pattern-call-to-action.svg";

type Props = {
  title: string;
  text: string;
  reversed?: boolean;
};

const DesignHeader: React.FC<Props> = ({ title, text, reversed }) => {
  let { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [50, 150, 200], [1, 0.5, 0]);

  const scaleTitle = useTransform(scrollY, [0, 150, 250], [1, 1.25, 1.35]);
  const yTitle = useTransform(scrollY, [50, 150, 200, 250], [1, 50, 70, 100]);
  const scaleHeader = useTransform(scrollY, [0, 200, 400], [1, 1.15, 1.25]);

  return (
    <motion.header
      style={{ scale: scaleHeader }}
      className="md:sectionX headerY z"
    >
      <Wrapper className="sectionInnerX sectionInnerY relative flex flex-col items-center gap-6 overflow-hidden bg-Peach md:rounded-15 ">
        <Circles
          className={`absolute right-0 top-0 -scale-y-[1] md:-right-[146px] md:top-1/2 md:-translate-y-1/2  ${reversed ? "lg:-left-1/2 lg:right-[initial] lg:translate-x-1/2 lg:scale-y-[1]" : "lg:right-0"}`}
        />
        <motion.h1
          style={{ scale: scaleTitle, y: yTitle }}
          className="z-10 text-center text-32 font-medium text-White md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          style={{ opacity: opacity }}
          className="z-10 max-w-[330px] text-center text-15 text-White md:max-w-[385px] md:text-base"
        >
          {text}
        </motion.p>
      </Wrapper>
    </motion.header>
  );
};

export default DesignHeader;
