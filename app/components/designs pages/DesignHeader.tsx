import Wrapper from "../layout/Wrapper";
import Circles from "@/public/assets/shared/desktop/bg-pattern-call-to-action.svg";

type Props = {
  title: string;
  text: string;
  reversed?: boolean;
};

const DesignHeader: React.FC<Props> = ({ title, text, reversed }) => {
  return (
    <header className="md:sectionX headerY">
      <Wrapper className="sectionInnerX sectionInnerY relative flex flex-col items-center gap-6 overflow-hidden bg-Peach md:rounded-15 ">
        <Circles
          className={`absolute right-0 top-0 -scale-y-[1] md:-right-[146px] md:top-1/2 md:-translate-y-1/2  ${reversed ? "lg:-left-1/2 lg:right-[initial] lg:translate-x-1/2 lg:scale-y-[1]" : "lg:right-0"}`}
        />
        <h1 className="z-10 text-center text-32 font-medium text-White md:text-5xl">
          {title}
        </h1>
        <p className="z-10 max-w-[330px] text-center text-15 text-White md:max-w-[385px] md:text-base">
          {text}
        </p>
      </Wrapper>
    </header>
  );
};

export default DesignHeader;
