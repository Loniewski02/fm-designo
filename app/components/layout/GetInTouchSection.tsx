"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Button from "../UI/Button";
import Wrapper from "./Wrapper";
import Circles from "@/public/assets/shared/desktop/bg-pattern-call-to-action.svg";

const GetInTouchSection = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push("/contact");
  };

  return (
    <section className="sectionX lg:pt[80px] relative -mb-[183px] pb-0 pt-[60px] md:-mb-[100px]">
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Wrapper className="sectionInnerX sectionInnerY relative flex flex-col items-center overflow-hidden rounded-15 bg-Peach lg:flex-row lg:justify-between">
          <Circles className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/4 lg:bottom-1/2 lg:translate-x-0 lg:translate-y-1/2" />
          <div className="z-10 max-w-[280px] text-center text-White md:max-w-[420px] lg:w-full lg:text-left">
            <h2 className="mb-3 text-32 font-medium md:text-40">
              Let’s talk about your project
            </h2>
            <p className="mb-8 text-15 md:text-base lg:mb-0">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Button onClick={navigateHandler}>get in touch</Button>
        </Wrapper>
      </motion.div>
    </section>
  );
};

export default GetInTouchSection;
