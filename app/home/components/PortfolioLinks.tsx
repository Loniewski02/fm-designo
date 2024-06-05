import Wrapper from "@/app/components/layout/Wrapper";
import DesignLink from "@/app/components/designs pages/DesignLink";

import { DESIGN_ROUTES } from "@/app/routes";

const PortfolioLinks = () => {
  return (
    <section className="sectionY sectionX">
      <Wrapper className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(2,308px)]">
        <h2 className="invisible absolute h-0 w-0">Checkout our work</h2>
        {DESIGN_ROUTES.map((item, index) => (
          <DesignLink
            key={item.url}
            id={item.id}
            url={item.url}
            name={item.name}
            className={`${index == 0 && "row-span-2"} lg:h-full`}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default PortfolioLinks;
