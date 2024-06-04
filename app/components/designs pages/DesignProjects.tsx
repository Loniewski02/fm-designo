import Wrapper from "../layout/Wrapper";

const DesignProjects: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <section className="sectionX sectionY">
      <Wrapper className="relative flex flex-col items-center gap-10 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-[30px] xl:justify-start">
        <h2 className="invisible absolute h-0 w-0">Checkout our projects</h2>
        {children}
      </Wrapper>
    </section>
  );
};

export default DesignProjects;
