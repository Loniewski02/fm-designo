"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

import { MAIN_ROUTES } from "@/app/routes";

import Wrapper from "../../layout/Wrapper";
import BurgerBtn from "./BurgerBtn";

import logo from "@/public/assets/shared/desktop/logo-dark.png";

const navItemsVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
};

const Navigation = () => {
  const [isNavItemsShown, setIsNavItemsShown] = useState(false);
  const [isNavShown, setIsNavShown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const navbarBehavior = () => {
      if (window.scrollY > lastScrollY) {
        setIsNavShown(false);
      } else {
        setIsNavShown(true);
      }

      setIsNavItemsShown(false);

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", navbarBehavior);

    return () => {
      window.removeEventListener("scroll", navbarBehavior);
    };
  }, [lastScrollY]);

  const showMobileMenuHandler = () => {
    setIsInitial(false);
    setIsNavItemsShown((prevState) => !prevState);
  };

  const hideMobileMenuHandler = () => {
    setIsNavItemsShown(false);
  };

  return (
    <nav
      className={`${isNavShown ? "animate-show" : "animate-hide"} ${lastScrollY > 100 && "shadow-sm"} sectionX sticky left-0 right-0 top-0 z-20 bg-White py-8 md:py-10`}
    >
      <Wrapper className="flex flex-row items-center justify-between gap-4">
        <Link
          href="/home"
          aria-label="Home Page"
          className={`block text-Black`}
        >
          <img src={logo.src} alt="" className="w-full max-w-[202px]" />
        </Link>
        <BurgerBtn isShown={isNavItemsShown} onClick={showMobileMenuHandler} />
        <div
          className={`${isNavItemsShown && "animate-showNavItems"} ${!isInitial && !isNavItemsShown && "animate-hideNavItems"} magic  fixed -top-[100%] left-0 right-0 h-full md:static md:block md:bg-transparent `}
        >
          <div className="flex flex-col items-start gap-6 bg-Black px-6 py-12 md:flex-row md:gap-10 md:bg-transparent md:p-0">
            {MAIN_ROUTES.map((route, index) => (
              <motion.div
                key={route.id}
                variants={navItemsVariants}
                initial="initial"
                whileInView="animate"
                custom={index + 1}
              >
                <Link
                  href={route.url}
                  aria-label={`${route.name} Page`}
                  onClick={hideMobileMenuHandler}
                  className={`${pathname === route.url && "active"} link block text-2xl uppercase tracking-[2px] text-White md:text-14 md:text-DarkGrey`}
                >
                  {route.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navigation;
