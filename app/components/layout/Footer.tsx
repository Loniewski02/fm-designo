"use client";

import FooterNav from "../UI/FooterNavigation";
import Socials from "../UI/Socials";
import LocationItem from "./LocationItem";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="sectionX bg-Black py-16 md:py-[80px]">
      <Wrapper>
        <FooterNav />
        <div className="mb-8 mt-10 hidden h-px w-full bg-LightGrey opacity-20 md:block" />
        <section className="flex flex-col gap-10 md:flex-row md:justify-between">
          <LocationItem
            title="Designo Central Office"
            paragraph1="3886 Wellington Street"
            paragraph2="Toronto, Ontario M9C 3J5"
          />
          <LocationItem
            title="Contact Us (Central Office)"
            paragraph1="P : +1 253-863-8967"
            paragraph2="M : contact@designo.co"
          />
          <Socials />
        </section>
      </Wrapper>
    </footer>
  );
};

export default Footer;