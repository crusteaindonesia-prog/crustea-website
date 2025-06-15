import Consultant from "./Consultant";
import Header from "./Header";
import Values from "./Values";
import PotentialProgram from "./PotentialProgram";
import Awards from "./Awards";
import CrusteaTeam from "./CrusteaTeam";

const About = () => {
  return (
    <div className="my-20 lg:mt-10">
      <Header />
      <PotentialProgram />
      <Consultant />
      <Values />
      <Awards />
      <CrusteaTeam />
    </div>
  );
};

export default About;
