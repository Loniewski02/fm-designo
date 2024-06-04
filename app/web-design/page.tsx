import DesignHeader from "../components/designs pages/DesignHeader";
import DesignLinks from "../components/designs pages/DesignLinks";
import DesignProject from "../components/designs pages/DesignProject";
import DesignProjects from "../components/designs pages/DesignProjects";
import BgPatternLeaf from "../components/layout/BgPatternLeaf";
import GetInTouchSection from "../components/layout/GetInTouchSection";
import MainContainer from "../components/layout/MainContainer";

import { WEB_DESIGN_PROJECTS } from "../constant";

const Page = () => {
  return (
    <MainContainer expanded>
      <DesignHeader
        title="Web Design"
        text="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <BgPatternLeaf top="-top-[220px]" />
      <DesignProjects>
        {WEB_DESIGN_PROJECTS.map((project) => (
          <DesignProject
            key={project.title}
            title={project.title}
            desc={project.desc}
            img={project.img}
            url={project.url}
          />
        ))}
      </DesignProjects>
      <DesignLinks />
      <GetInTouchSection />
    </MainContainer>
  );
};

export default Page;
