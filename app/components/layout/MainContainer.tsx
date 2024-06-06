import Navigation from "../UI/Navigation/Navigation";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  expanded?: boolean;
};

const MainContainer: React.FC<Props> = ({ children, expanded }) => {
  return (
    <main className="relative overflow-x-clip">
      <Navigation />
      {children}
      <Footer expanded={expanded} />
    </main>
  );
};

export default MainContainer;
