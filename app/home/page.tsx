import GetInTouchSection from "../components/layout/GetInTouchSection";
import MainContainer from "../components/layout/MainContainer";
import Wrapper from "../components/layout/Wrapper";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Leaf from "@/public/assets/shared/desktop/bg-pattern-leaf.svg";

const BgPattern: React.FC<{ reversed?: boolean }> = ({ reversed }) => {
  return (
    <Wrapper className="relative">
      <Leaf
        className={`absolute -z-10 hidden lg:block ${reversed ? "-right-[165px] -top-[370px] rotate-180" : "-left-[165px] -top-[400px] rotate-0"} `}
      />
    </Wrapper>
  );
};

const Page = () => {
  return (
    <MainContainer expanded={true}>
      <Header />
      <BgPattern />
      <Projects />
      <About />
      <BgPattern reversed={true} />
      <GetInTouchSection />
    </MainContainer>
  );
};

export default Page;
