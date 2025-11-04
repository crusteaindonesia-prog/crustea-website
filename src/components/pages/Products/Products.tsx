import Header from "./Header";
import Partnership from "./Partnership";
import ProductCatalog from "./Produk";
import Testimoni from "./Testimoni";
import OurProduct from "./OurProduct";
import Content1 from "../HomePage/Content1";
import Content2 from "../HomePage/Content2";
import OurProductKrastyFood from "./OurProductKrastyFood";

const Products = () => {
  return (
    <div className="md:mt-10 mb-10 lg:my-20">
      <Header />
      <ProductCatalog />
      <OurProduct />
      <Content1 />
      <Content2 />
      <OurProductKrastyFood />
      {/* <Testimoni /> */}
      {/* <Partnership /> */}
    </div>
  );
};

export default Products;
