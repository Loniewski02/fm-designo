import Circle from "@/public/assets/shared/desktop/bg-pattern-small-circle.svg";

type Props = {
  title: string;
  text: string;
  img: JSX.Element;
  index: number;
};

const AboutItem: React.FC<Props> = ({ title, text, img, index }) => {
  return (
    <article className="flex max-w-[330px] flex-col items-center md:max-w-[690px] md:flex-row md:gap-11 xl:max-w-[350px] xl:flex-col xl:gap-0">
      <div className="relative mb-12 w-max md:mb-0 xl:mb-12">
        <Circle
          className="absolute"
          style={{ transform: `rotate(${360 / index}deg)` }}
        />
        {img}
      </div>
      <div className="text-center text-Black md:text-left xl:text-center">
        <h3 className="mb-8 text-20 font-medium uppercase tracking-[5px]">
          {title}
        </h3>
        <p className="text-base">{text}</p>
      </div>
    </article>
  );
};

export default AboutItem;
