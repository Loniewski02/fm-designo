"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { MAIN_ROUTES } from "../../routes";

import Wrapper from "../layout/Wrapper";
import BurgerBtn from "./BurgerBtn";

import logo from "@/public/assets/shared/desktop/logo-dark.png";

const Navigation = () => {
  const [isNavItemsShown, setIsNavItemsShown] = useState(false);
  const [isNavShown, setIsNavShown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavItemsShown(true);
      } else {
        setIsNavItemsShown(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const navbarBehavior = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavShown(false);
      } else {
        setIsNavShown(true);
      }
      if (window.innerWidth >= 768) {
        setIsNavItemsShown(true);
      } else {
        setIsNavItemsShown(false);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", navbarBehavior);

    return () => {
      window.removeEventListener("scroll", navbarBehavior);
    };
  }, [lastScrollY]);

  const toggleMobileMenuHandler = () => {
    setIsNavItemsShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsNavItemsShown(false);
  };

  return (
    <nav
      className={`${isNavShown ? "animate-show" : "animate-hide"} ${lastScrollY > 100 && "animate-reduce shadow-sm"} sectionX magic sticky left-0 right-0 top-0 z-20 bg-White py-8 md:py-10`}
    >
      <Wrapper className="flex flex-row items-center justify-between gap-4">
        <Link
          href="/home"
          aria-label="Home Page"
          className={`block text-Black`}
        >
          <img src={logo.src} alt="" className="w-full max-w-[202px]" />
        </Link>
        <BurgerBtn
          isShown={isNavItemsShown}
          onClick={toggleMobileMenuHandler}
        />
        <AnimatePresence>
          {isNavItemsShown && (
            <motion.div
              initial={{ opacity: 0, top: "-100%" }}
              animate={{ opacity: 1, top: "100px" }}
              exit={{ opacity: 0, top: "-100%" }}
              className={`fixed left-0 right-0 h-full bg-[rgba(0,0,0,0.5)] md:static md:block md:bg-transparent `}
            >
              <div className="flex flex-col items-start gap-6 bg-Black px-6 py-12 md:flex-row md:gap-10 md:bg-transparent md:p-0">
                {MAIN_ROUTES.map((route) => (
                  <Link
                    key={route.id}
                    href={route.url}
                    aria-label={`${route.name} Page`}
                    onClick={hideMobileMenuHandler}
                    className={`${pathname === route.url && "active"} link text-2xl uppercase tracking-[2px] text-White md:text-14 md:text-DarkGrey`}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
