"use client";
import { usePathname } from "next/navigation";

import Wrapper from "../layout/Wrapper";

import { DESIGN_ROUTES } from "@/app/routes";
import DesignLink from "./DesignLink";

const DesignLinks = () => {
  const pathname = usePathname();
  let filteredRoutes = DESIGN_ROUTES.filter((route) => route.url !== pathname);

  return (
    <section className="sectionX sectionY">
      <Wrapper className="relative flex flex-col gap-6 lg:flex-row lg:gap-10">
        <h2 className="invisible absolute h-0 w-0">Other Designs</h2>
        {filteredRoutes.map((route) => (
          <DesignLink
            key={route.id}
            url={route.url}
            name={route.name}
            id={route.id}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default DesignLinks;
