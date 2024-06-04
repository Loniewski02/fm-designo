import Wrapper from "./Wrapper";
import Leaf from "@/public/assets/shared/desktop/bg-pattern-leaf.svg";

type Props = { reversed?: boolean; top: string };

const BgPatternLeaf: React.FC<Props> = ({ reversed, top }) => {
  return (
    <Wrapper className="relative">
      <Leaf
        className={`absolute -z-10 hidden lg:block ${top ? top : ``} ${reversed ? "-right-[165px] rotate-180" : "-left-[165px] rotate-0"}`}
      />
    </Wrapper>
  );
};

export default BgPatternLeaf;
