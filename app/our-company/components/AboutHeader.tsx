import Wrapper from "@/app/components/layout/Wrapper";
import Circles from "@/public/assets/about/mobile/bg-pattern-hero-about-mobile.svg";
import BigCircle from "@/public/assets/about/desktop/bg-pattern-hero-about-desktop.svg";

const AboutHeader = () => {
  return (
    <header
      className="md:headerY md:sectionX pt-[30px]"
    >
      <Wrapper className="relative overflow-hidden bg-Peach md:rounded-15 lg:flex lg:items-center">
        <div className="z-10 order-1 h-[320px] w-full bg-[url('/assets/about/mobile/image-about-hero.jpg')] bg-cover bg-no-repeat md:bg-[url('/assets/about/tablet/image-about-hero.jpg')] lg:h-[480px] lg:w-[486px] lg:min-w-[486px] lg:bg-[url('/assets/about/desktop/image-about-hero.jpg')]" />
        <article className="sectionInnerX xl:sectionInnerX sectionInnerY relative flex flex-col items-center gap-6 overflow-hidden text-center text-White md:gap-8 lg:static lg:items-start lg:px-[72px] lg:text-left">
          <Circles className="absolute -top-[146px] right-0 md:hidden" />
          <BigCircle className="absolute -left-[120px] -top-[430px] hidden md:block lg:-top-[150px] lg:left-0" />
          <h1 className="z-10 text-32 font-medium md:text-5xl">About Us</h1>
          <p className="z-10 max-w-[330px] text-15 md:max-w-[570px] md:text-base">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </article>
      </Wrapper>
    </header>
  );
};

export default AboutHeader;
