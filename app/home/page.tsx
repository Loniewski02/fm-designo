import BgPatternLeaf from "../components/layout/BgPatternLeaf";
import GetInTouchSection from "../components/layout/GetInTouchSection";
import MainContainer from "../components/layout/MainContainer";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/PortfolioLinks";

const Page = () => {
  return (
    <MainContainer expanded>
      <Header />
      <BgPatternLeaf top="-top-[370px]" />
      <Projects />
      <About />
      <BgPatternLeaf reversed top="-top-[400px]" />
      <GetInTouchSection />
    </MainContainer>
  );
};

export default Page;
