import Hero from "components/Hero";
import Testimoni from "components/Testimoni";
import Layout from "../components/Layout/Layout";
import Vision from "components/Vision";
import Users from "components/Users";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <Vision />
      <Users />
      <Testimoni />
    </Layout>
  );
};

export default App;
