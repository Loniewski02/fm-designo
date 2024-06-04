"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { MAIN_ROUTES } from "@/app/routes";

import logo from "@/public/assets/shared/desktop/logo-light.png";

const FooterNavigation = () => {
  const pathname = usePathname();

  return (
    <section className="mb-8 flex flex-col items-center gap-8 md:mb-0 md:flex-row md:justify-between">
      <Link href="/home" aria-label="home page" className="block">
        <img src={logo.src} alt="" className="w-full max-w-[202px]" />
      </Link>
      <div className="block h-px w-full bg-LightGrey opacity-20 md:hidden" />
      <div className="flex flex-col gap-8 text-center md:flex-row">
        {MAIN_ROUTES.map((route) => (
          <Link
            href={route.url}
            aria-label={route.name + " page"}
            key={route.id}
            className={`${pathname===route.url && "active"} link text-14 uppercase tracking-[2px] text-White`}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FooterNavigation;
