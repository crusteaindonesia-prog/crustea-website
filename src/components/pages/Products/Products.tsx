import Header from "./Header";
import Partnership from "./Partnership";
import ProductCatalog from "./Produk";
import Testimoni from "./Testimoni";

const Products = () => {
  return (
    <div className="md:mt-10 mb-10 lg:my-20">
      <Header />
      <ProductCatalog />
      <Testimoni />
      <Partnership />
    </div>
  );
};

export default Products;
