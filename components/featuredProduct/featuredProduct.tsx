import Image from "next/image";
import styles from "./featuredProduct.module.css";
import Link from "next/link";

const featuredProduct = [
  {
    id: "1",
    name: "Cantilever chair",
    code: "Y523501",
    price: 45.0,
    image: "/images/file-one/CantileverChair.png",
  },
  {
    id: "2",
    name: "Cantilever chair",
    code: "Y523501",
    price: 42.0,
    image: "/images/file-one/CantileverChair2.png",
  },
  {
    id: "3",
    name: "Cantilever chair",
    code: "Y523501",
    price: 42.0,
    image: "/images/file-one/CantileverChair3.png",
  },
  {
    id: "4",
    name: "Cantilever chair",
    code: "Y523501",
    price: 42.0,
    image: "/images/file-one/CantileverChair4.png",
  },
];

const Product = () => {
  return (
    <div className={styles._main_container}>
      <h2 className={styles.heading}>Featured Products</h2>

      <div className={styles.container}>
        {featuredProduct.map((product) => (
          <div className={styles.box} key={product.id}>
            <Link href={`/product/${product.id}`}>
              <div className={styles.img_div}>
                <Image
                  src={product.image}
                  alt={product.name}
                  height={100}
                  width={150}
                  className={styles.img}
                />
              </div>
            </Link>

            <h3 className={styles.name}>{product.name}</h3>
            <p className={styles.code}>Code: {product.code}</p>
            <p className={styles.price}>${product.price.toFixed(2)}</p>
            <button className={styles.addToCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
