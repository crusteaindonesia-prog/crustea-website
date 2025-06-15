import Header from "./Header";
import Partnership from "./Partnership";
import ProductCatalog from "./Produk";
import Testimoni from "./Testimoni";
import OurProduct from "./OurProduct";

const Products = () => {
  return (
    <div className="md:mt-10 mb-10 lg:my-20">
      <Header />
      <ProductCatalog />
      <OurProduct />
      <Testimoni />
      <Partnership />
    </div>
  );
};

export default Products;
