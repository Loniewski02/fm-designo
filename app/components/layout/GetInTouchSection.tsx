"use client";
import { useRouter } from "next/navigation";

import Button from "../UI/Button";
import Wrapper from "./Wrapper";
import Circles from "@/public/assets/shared/desktop/bg-pattern-call-to-action.svg";

const GetInTouchSection = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push("/contact");
  };

  return (
    <section className="sectionX lg:pt[80px] pb-0 pt-[60px]">
      <Wrapper className="sectionX relative flex flex-col items-center overflow-hidden rounded-15 bg-Peach py-16 lg:flex-row lg:justify-between lg:px-24 lg:py-[72px]">
        <Circles className="reflect absolute bottom-1/2 right-1/2 -translate-x-1/2 translate-y-1/4 lg:bottom-0 lg:right-0 lg:translate-x-0 " />
        <div className="z-10 max-w-[280px] text-center text-White md:max-w-[420px] lg:w-full lg:text-left">
          <h2 className="mb-3 text-32 font-medium md:text-40">
            Let’s talk about your project
          </h2>
          <p className="mb-8 text-15 md:text-base">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Button onClick={navigateHandler}>get in touch</Button>
      </Wrapper>
    </section>
  );
};

export default GetInTouchSection;
