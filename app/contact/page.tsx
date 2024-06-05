import BgPatternLeaf from "../components/layout/BgPatternLeaf";
import MainContainer from "../components/layout/MainContainer";
import ContactHeader from "./components/ContactHeader";
import ContactLoctions from "./components/ContactLocations";

const Page = () => {
  return (
    <MainContainer>
      <ContactHeader />
      <ContactLoctions />
      <BgPatternLeaf top="-bottom-[160px]" reversed />
    </MainContainer>
  );
};

export default Page;
