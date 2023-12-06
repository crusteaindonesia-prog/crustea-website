import Hero from "components/Hero";
import Testimoni from "components/Testimoni";
import Layout from "../components/Layout/Layout";
import Vision from "components/Vision";
import Users from "components/Users";
import Mission from "components/Mission";
import ProductCatalog from "components/Produk";
import Consultant from "components/Consultant";

const App = (): JSX.Element => {
  return (
    <Layout>
      <Hero />
      <Vision />
      <Mission />
      <ProductCatalog />
      <Consultant />
      <Users />
      <Testimoni />
    </Layout>
  );
};

export default App;
