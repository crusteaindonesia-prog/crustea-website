import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "components/Layout/Header";
import HomePage from "components/pages/HomePage/HomePage";
import Footer from "components/Layout/Footer";
import Products from "components/pages/Products/Products";
import About from "components/pages/About/About";
import Article from "components/pages/HomePage/Article";
import Blog from "components/pages/HomePage/Blog";
import Blogs from "components/pages/HomePage/Blogs";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/blog/:id" element={<Article />} />
        <Route path="/blogs" element={<Blogs isHomePage={false} />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    // <Layout>
    //   <Hero />
    //   <Vision />
    //   <Mission />
    //   <ProductCatalog />
    //   <Consultant />
    //   <Users />
    //   {/* <Testimoni /> */}
    // </Layout>
  );
};

export default App;
