import Header from "./Header";
import Partnership from "./Partnership";
import ProductCatalog from "./Produk";

const Products = () => {
  return (
    <div className="md:mt-10 mb-10 lg:my-20">
      <Header />
      <ProductCatalog />
      <Partnership />
    </div>
  );
};

export default Products;
