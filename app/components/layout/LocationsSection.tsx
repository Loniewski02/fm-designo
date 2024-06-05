"use client";
import { useRouter } from "next/navigation";
import Wrapper from "@/app/components/layout/Wrapper";
import Canada from "@/public/assets/shared/desktop/illustration-canada.svg";
import Australia from "@/public/assets/shared/desktop/illustration-australia.svg";
import Uk from "@/public/assets/shared/desktop/illustration-united-kingdom.svg";
import Button from "@/app/components/UI/Button";
import Circle from "@/public/assets/shared/desktop/bg-pattern-small-circle.svg";

const DATA = [
  { id: "canada", img: <Canada />, title: "canada", url: "/locations#canada" },
  {
    id: "australia",
    img: <Australia />,
    title: "australia",
    url: "/locations#australia",
  },
  { id: "uk", img: <Uk />, title: "united kingdom", url: "/locations#uk" },
];

const LocationsSection: React.FC<{ padding?: boolean }> = ({ padding }) => {
  const router = useRouter();
  const navigateHandler = (url: string) => {
    router.push(url);
  };

  return (
    <section
      className={`sectionX ${padding ? "pb-[120px] pt-[60px] lg:pb-[160px] lg:pt-20" : "sectionY "}`}
    >
      <Wrapper className="relative flex flex-col items-center gap-12 md:gap-20 lg:flex-row lg:justify-center">
        <h2 className="invisible absolute h-0 w-0">our locations</h2>
        {DATA.map((item, index) => (
          <div
            key={item.id}
            className="flex w-max flex-col items-center gap-8 lg:w-[350px]"
          >
            <div className="relative mb-4">
              <Circle
                className={`absolute`}
                style={{ transform: `rotate(${360 / index}deg)` }}
              />
              {item.img}
            </div>
            <h3 className="text-20 font-medium uppercase tracking-[5px] text-Black">
              {item.title}
            </h3>
            <Button onClick={navigateHandler.bind(null, item.url)} dark>
              see location
            </Button>
          </div>
        ))}
      </Wrapper>
    </section>
  );
};

export default LocationsSection;
