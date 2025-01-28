import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import Image from 'next/image'; // Import Image component from Next.js

const BlogPage = () => {
  const furnitureImages = [
    "/images/file-four/Leatest blog (1).png",
    "/images/file-four/Leatest blog (2).png",
    "/images/file-four/Leatest blog.png",
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Collection</h1>
      </div>

      {/* Image Gallery */}
      <div className="py-12 px-4 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {furnitureImages.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <Image
                src={image}
                alt={`Furniture ${index + 1}`}
                width={500}  // Adjust width as per your requirement
                height={300} // Adjust height as per your requirement
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
