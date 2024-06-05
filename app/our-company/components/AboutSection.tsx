import Wrapper from "@/app/components/layout/Wrapper";

type Props = {
  hero: string;
  title: string;
  text1: string;
  text2: string;
  reversed?: boolean;
  padding?: boolean;
};

const AboutSection: React.FC<Props> = ({
  hero,
  reversed,
  padding,
  title,
  text1,
  text2,
}) => {
  return (
    <section
      className={`md:sectionX ${padding ? "sectionY" : "md:sectionY pb-[60px]"}`}
    >
      <Wrapper className="relative overflow-hidden md:rounded-15 lg:flex">
        <div
          className={`${reversed ? "order-1" : "order-2"} h-[320px] w-full bg-cover bg-no-repeat lg:h-[640px] lg:w-[476px] lg:min-w-[476px] ${hero}`}
        />
        <article
          className={`${reversed ? "order-2" : "order-1"} sectionInnerX sectionInnerY xl:sectionInnerX bg-VeryLightPeach flex flex-col items-center gap-6 text-center lg:items-start lg:justify-center lg:px-[72px] lg:text-left`}
        >
          <h2 className="text-32 font-medium text-Peach md:text-40">{title}</h2>
          <p className="max-w-[330px] text-15 text-Black md:max-w-[570px] md:text-base">
            {text1}
          </p>
          <p className="max-w-[330px] text-15 text-Black md:max-w-[570px] md:text-base">
            {text2}
          </p>
        </article>
      </Wrapper>
    </section>
  );
};

export default AboutSection;
