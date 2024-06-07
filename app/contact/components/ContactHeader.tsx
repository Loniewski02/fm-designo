"use client";
import { useState, useEffect } from "react";
import Wrapper from "@/app/components/layout/Wrapper";
import Circles from "@/public/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import BigCircle from "@/public/assets/contact/desktop/bg-pattern-hero-desktop.svg";
import ContactForm from "./ContactForm";
import { AnimatePresence, motion } from "framer-motion";

const ContactHeader = () => {
  const [isMessageShown, setIsMessageShown] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsMessageShown(false);
    }, 10000);

    return () => clearTimeout(identifier);
  }, [isMessageShown]);

  const successHandler = () => {
    setIsMessageShown(true);
  };
  return (
    <header className="headerY md:sectionX">
      <Wrapper className="sectionInnerX sectionInnerY relative flex flex-col items-center overflow-hidden bg-Peach md:rounded-15 lg:flex-row lg:justify-between lg:gap-6">
        <AnimatePresence>
          {isMessageShown && (
            <motion.div
              initial={{ bottom: -200 }}
              animate={{ bottom: 0 }}
              exit={{ bottom: -200 }}
              className="absolute bottom-0 right-1/2 z-50 w-full max-w-[360px] -translate-y-1/2 translate-x-1/2 rounded-15 border bg-VeryLightPeach px-8 py-3 text-base italic text-Black shadow-sm lg:right-[96px] lg:max-w-[380px] lg:translate-x-0"
            >
              Message sent! 😎
            </motion.div>
          )}
        </AnimatePresence>
        <Circles className="absolute -left-24 top-0 md:hidden" />
        <BigCircle className="absolute -left-[122px] -top-20 hidden md:block lg:bottom-0 lg:left-0 lg:top-[initial]" />
        <div className="relative z-10 mb-12 md:mb-10 lg:mb-0">
          <h1 className="mb-6 text-center text-32 font-medium text-White md:mb-8 md:text-left md:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-[360px] text-center text-15 text-White md:max-w-[620px] md:text-left md:text-base lg:max-w-[445px]">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <ContactForm onSuccess={successHandler} />
      </Wrapper>
    </header>
  );
};

export default ContactHeader;
