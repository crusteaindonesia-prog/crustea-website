import Blogs from "./Blogs";
import Hero from "./Hero";
import Mission from "./Mission";
import Users from "./Users";
import Vision from "./Vision";
import Values from "./Values";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Vision />
      <Mission />
      <Values />
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Blogs isHomePage={true} />
      <Users />
    </div>
  );
};

export default HomePage;
