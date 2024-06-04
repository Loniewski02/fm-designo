import FooterNav from "../UI/FooterNavigation";
import Socials from "../UI/Socials";
import Info from "./Info";
import Wrapper from "./Wrapper";

import { LOCATIONS } from "@/app/constant";

type Props = { expanded?: boolean };

const Footer: React.FC<Props> = ({ expanded }) => {
  let centralLocation: LocationT[] = LOCATIONS.filter(
    (location) => location.country.toLowerCase() === "canada",
  );

  return (
    <footer
      className={`${expanded && "pt-[250px] md:pt-[160px] lg:pt-[144px]"} sectionX bg-Black py-16 md:py-[80px]`}
    >
      <Wrapper>
        <FooterNav />
        <div className="mb-8 mt-10 hidden h-px w-full bg-LightGrey opacity-20 md:block" />
        <section className="flex flex-col gap-10 md:flex-row md:justify-between">
          <Info
            title={`P: ${centralLocation[0].office.name}`}
            paragraph1={centralLocation[0].office.adress1}
            paragraph2={centralLocation[0].office.adress2}
          />
          <Info
            title="Contact Us (Central Office)"
            paragraph1={`P: ${centralLocation[0].contact.phone}`}
            paragraph2={`M: ${centralLocation[0].contact.email}`}
          />
          <Socials />
        </section>
      </Wrapper>
    </footer>
  );
};

export default Footer;
