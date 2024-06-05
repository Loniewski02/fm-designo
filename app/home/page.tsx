import BgPatternLeaf from "../components/layout/BgPatternLeaf";
import GetInTouchSection from "../components/layout/GetInTouchSection";
import MainContainer from "../components/layout/MainContainer";
import About from "./components/About";
import HomeHeader from "./components/HomeHeader";
import Projects from "./components/PortfolioLinks";

const Page = () => {
  return (
    <MainContainer expanded>
      <HomeHeader />
      <BgPatternLeaf top="-top-[370px]" />
      <Projects />
      <About />
      <BgPatternLeaf reversed top="-top-[400px]" rotated />
      <GetInTouchSection />
    </MainContainer>
  );
};

export default Page;
