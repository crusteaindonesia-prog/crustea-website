import Blogs from "./Blogs";
import Hero from "./Hero";
import Mission from "./Mission";
import Users from "./Users";
import Vision from "./Vision";
import Values from "./Values2";
import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";
import Content6 from "./Content6";
import Content7 from "./Content7";
import Content8 from "./Content8";
import Content9 from "./Content9";
import Content10 from "./Content10";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Vision />
      <Mission />
      {/* <Values /> */}
      {/* <Content1 /> */}
      {/* <Content2 /> */}
      <Content4 />
      <Content3 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Content8 />
      <Content9 />
      <Content10 />
      <Blogs isHomePage={true} />
      <Users />
    </div>
  );
};

export default HomePage;
