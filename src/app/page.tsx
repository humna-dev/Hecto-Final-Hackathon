import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Discount from "../../components/Discount/Discount";
import Shopex from "../../components/Shopex/Shopex";
import Trending from "../../components/Trending/Trending";
import TrendingProduct from "../../components/Trending Products/Trending Products"; // Fixed path
import FeaturedProduct from "../../components/featuredProduct/featuredProduct"
import Shop from "../../components/shop/shop"; 
import LatestBlog from "../../components/latestBlog/latestBlog";
import Footer from "../../components/Footer/Footer";
import LatestProduct from "../../components/LatestProduct/latestProduct"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <FeaturedProduct /> 
    <LatestProduct />
      <Discount /> {/* Added Discount component */}
      <Shopex />
      <Trending />
      <TrendingProduct /> {/* Fixed component name */}
      <Shop /> {/* Fixed component name */}
      <LatestBlog />
      <Footer />
    </div>
  );
}
