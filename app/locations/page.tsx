import GetInTouchSection from "../components/layout/GetInTouchSection";
import MainContainer from "../components/layout/MainContainer";
import Locations from "./components/Locations";



const Page = () => {
  return (
    <MainContainer expanded>
      <Locations/>
      <GetInTouchSection />
    </MainContainer>
  );
};

export default Page;
