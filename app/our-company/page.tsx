import BgPatternLeaf from "../components/layout/BgPatternLeaf";
import GetInTouchSection from "../components/layout/GetInTouchSection";
import LocationsSection from "../components/layout/LocationsSection";
import MainContainer from "../components/layout/MainContainer";
import AboutHeader from "./components/AboutHeader";
import AboutSection from "./components/AboutSection";

const Page = () => {
  return (
    <MainContainer expanded>
      <AboutHeader />
      <BgPatternLeaf top="-top-[250px]" />
      <AboutSection
        reversed
        title="World-class talent"
        text1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
        text2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
        hero="bg-[url('/assets/about/mobile/image-world-class-talent.jpg')] md:bg-[url('/assets/about/tablet/image-world-class-talent.jpg')] lg:bg-[url('/assets/about/desktop/image-world-class-talent.jpg')]"
      />
      <LocationsSection />
      <BgPatternLeaf reversed top="-top-[300px]" />
      <AboutSection
        padding
        title="The real deal"
        text1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
        text2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
        hero="bg-[url('/assets/about/mobile/image-real-deal.jpg')] md:bg-[url('/assets/about/tablet/image-real-deal.jpg')] lg:bg-[url('/assets/about/desktop/image-real-deal.jpg')]"
      />
      <GetInTouchSection />
    </MainContainer>
  );
};

export default Page;
