import DesignHeader from "../components/designs pages/DesignHeader";
import DesignLinks from "../components/designs pages/DesignLinks";
import DesignProject from "../components/designs pages/DesignProject";
import DesignProjects from "../components/designs pages/DesignProjects";
import BgPatternLeaf from "../components/layout/BgPatternLeaf";
import GetInTouchSection from "../components/layout/GetInTouchSection";
import MainContainer from "../components/layout/MainContainer";

import { APP_DESIGN_PROJECTS } from "../constant";

const Page = () => {
  return (
    <MainContainer expanded>
      <DesignHeader
        reversed
        title="App Design"
        text="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <BgPatternLeaf top="-top-[220px]" />
      <DesignProjects>
        {APP_DESIGN_PROJECTS.map((project, index) => (
          <DesignProject
            index={index}
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
