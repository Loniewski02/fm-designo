import Wrapper from "./Wrapper";
import Leaf from "@/public/assets/shared/desktop/bg-pattern-leaf.svg";

type Props = { reversed?: boolean; top: string; rotated?: boolean };

const BgPatternLeaf: React.FC<Props> = ({ reversed, top, rotated }) => {
  return (
    <Wrapper className="relative">
      <Leaf
        className={`absolute -z-10 hidden lg:block ${top ? top : ``} ${reversed ? "-right-[165px] " : "-left-[165px]"} ${rotated ? "rotate-180" : "rotate-0"}`}
      />
    </Wrapper>
  );
};

export default BgPatternLeaf;
