import Wrapper from "@/app/components/layout/Wrapper";
import Passionate from "@/public/assets/home/desktop/illustration-passionate.svg";
import Resourceful from "@/public/assets/home/desktop/illustration-resourceful.svg";
import Friendly from "@/public/assets/home/desktop/illustration-friendly.svg";
import AboutItem from "./AboutItem";

const DATA = [
  {
    id: "item1",
    img: <Passionate />,
    title: "passionate",
    text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    id: "item2",
    img: <Resourceful />,
    title: "resourceful",
    text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    id: "item3",
    img: <Friendly />,
    title: "friendly",
    text: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

const About = () => {
  return (
    <section className="sectionX sectionY">
      <Wrapper className="flex flex-col items-center gap-20 md:gap-[52px] xl:flex-row">
        <h2 className="invisible absolute">about</h2>
        {DATA.map((item, index) => (
          <AboutItem
            index={index}
            key={item.id}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default About;
