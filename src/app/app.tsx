import Hero from "components/Hero";
import Testimoni from "components/Testimoni";
import Layout from "../components/Layout/Layout";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <Testimoni />
    </Layout>
  );
};

export default App;
