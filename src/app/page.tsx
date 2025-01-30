import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Shopex from "../../components/Shopex/Shopex";
import FeaturedProduct from "../../components/featuredProduct/featuredProduct"
import LatestBlog from "../../components/LatestBlog/latestBlog";
import Footer from "../../components/Footer/Footer";
import LatestProduct from "../../components/LatestProduct/latestProduct"
import UniqueFeatures from "../../components/UniqueFeatures/UniqueFeatures"
import TopCategories from "../../components/TopCategories/TopCategories";
import DisscountOffer from "../../components/DisscountOffer/DisscountOffer";
import Blog from "../../components/Blog/Blog"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <FeaturedProduct /> 
    <LatestProduct />
    <UniqueFeatures />
  <DisscountOffer />
     < TopCategories />
      <Shopex />
      <Blog />
      <LatestBlog />
      <Footer />
    </div>
  );
}
