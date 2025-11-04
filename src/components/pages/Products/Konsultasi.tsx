import Content1 from "../HomePage/Content1";
import Content2 from "../HomePage/Content2";
import FormKonsultasi from "./FormKonsultasi";

const Konsultasi = () => {
  return (
    <div className="md:mt-10 mb-10 lg:my-20">
      <FormKonsultasi />
      <Content1 />
      <Content2 />
    </div>
  );
};

export default Konsultasi;
