type Props = {
  title: string;
  text: string;
  img: JSX.Element;
};

const AboutItem: React.FC<Props> = ({ title, text, img }) => {
  return (
    <div className="flex max-w-[330px] flex-col items-center md:max-w-[690px] md:flex-row md:gap-11 xl:max-w-[350px] xl:flex-col xl:gap-0">
      <div className="mb-12 w-max rounded-full bg-gradient-to-tr from-[#5d02021f] to-transparent md:mb-0 xl:mb-12">
        {img}
      </div>
      <div className="text-center text-Black md:text-left xl:text-center">
        <h3 className="text-20 mb-8 font-medium uppercase tracking-[5px]">
          {title}
        </h3>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default AboutItem;
