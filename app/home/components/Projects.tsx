import Wrapper from "@/app/components/layout/Wrapper";
import ProjectLink from "./ProjectLink";

const DATA = [
  {
    url: "web-design",
    title: "web design",
    classes:
      "bg-[url('/assets/home/mobile/image-web-design.jpg')] md:bg-[url('/assets/home/tablet/image-web-design.jpg')] lg:bg-[url('/assets/home/desktop/image-web-design-large.jpg')] row-span-2",
  },
  {
    url: "app-design",
    title: "app design",
    classes:
      "bg-[url('/assets/home/mobile/image-app-design.jpg')] md:bg-[url('/assets/home/tablet/image-app-design.jpg')] lg:bg-[url('/assets/home/desktop/image-app-design.jpg')]",
  },
  {
    url: "graphic-design",
    title: "graphic design",
    classes:
      "bg-[url('/assets/home/mobile/image-graphic-design.jpg')] md:bg-[url('/assets/home/tablet/image-graphic-design.jpg')] lg:bg-[url('/assets/home/desktop/image-graphic-design.jpg')]",
  },
];

const Projects = () => {
  return (
    <section className="sectionY sectionX">
      <Wrapper className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-[repeat(2,308px)]">
        <h2 className="invisible absolute">Check our projects</h2>
        {DATA.map((item) => (
          <ProjectLink
            key={item.url}
            className={item.classes}
            href={item.url}
            title={item.title}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default Projects;
