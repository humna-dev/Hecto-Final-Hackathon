
"use client";
import client from "../../sanityClient";
import { useEffect, useState } from "react";

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
      <img src={product.image} alt={product.name} />
    </div>
  );
}
