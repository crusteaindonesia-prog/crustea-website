import Consultant from "./Consultant";
import Header from "./HeaderAbout";
import Values from "./Values";
import Values2 from "../HomePage/Values2";
import PotentialProgram from "./PotentialProgram";
import Awards from "./Awards";
import CrusteaTeam from "./CrusteaTeam";

const About = () => {
  return (
    <div className="pt-20 my-20 lg:mt-14">
      {/* <Header /> */}
      {/* <PotentialProgram />
      <Consultant /> */}
      <Values />
      <Values2 />
      <Awards />
      {/* <CrusteaTeam /> */}
    </div>
  );
};

export default About;
