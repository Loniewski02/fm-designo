import Wrapper from "@/app/components/layout/Wrapper";
import LocationItem from "./LocationItem";

import { LOCATIONS } from "@/app/constant";

const Locations = () => {
  return (
    <section className="md:sectionX headerY">
      <Wrapper className="relative flex flex-col gap-10 md:gap-[120px] lg:gap-8">
        <h2 className="invisible absolute h-0 w-0">find us</h2>
        {LOCATIONS.map((location, index) => (
          <LocationItem
            reversed={index % 2 != 0}
            country={location.country}
            office={location.office}
            contact={location.contact}
            map={location.map}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default Locations;
