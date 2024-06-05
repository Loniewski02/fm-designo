import BgPatternLeaf from "../components/layout/BgPatternLeaf";
import LocationsSection from "../components/layout/LocationsSection";
import MainContainer from "../components/layout/MainContainer";
import ContactHeader from "./components/ContactHeader";

const Page = () => {
  return (
    <MainContainer>
      <ContactHeader />
      <LocationsSection padding />
      <BgPatternLeaf top="-bottom-[160px]" reversed />
    </MainContainer>
  );
};

export default Page;
