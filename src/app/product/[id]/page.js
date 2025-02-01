"use client";
import { client } from '@/sanity/lib/client'; 
import { useEffect, useState } from "react";
import Image from "next/image"; // Import Image from next/image

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "product" && _id == $id][0]`;
      const result = await client.fetch(query, { id });
      setProduct(result);
    }
    fetchData();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Using Image component from Next.js for optimized loading */}
      <Image 
        src={product.image} 
        alt={product.name} 
        width={500} // Provide a fixed width for optimization
        height={500} // Provide a fixed height for optimization
      />
    </div>
  );
}
