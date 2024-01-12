import Blogs from "./Blogs";
import Hero from "./Hero";
import Mission from "./Mission";
import Users from "./Users";
import Vision from "./Vision";

const HomePage: React.FC = () => (
  <div>
    <Hero />
    <Vision />
    <Mission />
    <Blogs />
    <Users />
  </div>
);

export default HomePage;
