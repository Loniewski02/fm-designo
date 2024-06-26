"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

import Wrapper from "@/app/components/layout/Wrapper";
import Circle from "../../../public/assets/home/desktop/bg-pattern-hero-home.svg";
import phoneImg from "@/public/assets/home/desktop/image-hero-phone.png";
import Button from "@/app/components/UI/Button";

const HomeHeader = () => {
  let { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [200, 400, 700, 800], [1, 0.7, 0.4, 0]);

  const scale1 = useTransform(scrollY, [0, 200, 400], [1, 1.15, 1.25]);
  const router = useRouter();

  const redirectHandler = () => {
    router.push("/our-company");
  };

  return (
    <motion.header
      style={{ scale: scale1, opacity: opacity }}
      className="md:sectionX headerY"
    >
      <Wrapper className="sectionInnerX relative z-10 flex flex-col items-center overflow-hidden bg-Peach pt-[80px] md:rounded-15 lg:py-[145px]">
        <Circle className="absolute -right-[280px] top-[100px] md:-right-[145px] lg:right-0 lg:top-0" />
        <div className="z-10 flex w-full max-w-[327px] flex-col items-center text-center text-White md:max-w-none  lg:items-start lg:text-left">
          <h1 className="mb-[14px] text-32 font-medium md:mb-6 md:max-w-[573px] md:text-5xl lg:max-w-[540px]">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="mb-6 text-15 md:max-w-[445px] md:text-base lg:px-0">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <Button onClick={redirectHandler}>learn more</Button>
        </div>
        <img
          src={phoneImg.src}
          alt=""
          className="-mb-[200px] min-w-[340px] xs:-mb-[300px] xs:-mt-12 xs:w-[500px] xs:min-w-[500px] md:-mb-[370px] md:-mt-20 md:w-max lg:absolute lg:-bottom-[240px] lg:-right-[80px] lg:m-0"
        />
      </Wrapper>
    </motion.header>
  );
};

export default HomeHeader;
