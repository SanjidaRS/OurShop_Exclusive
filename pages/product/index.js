import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { productMap } from "../../lib/productMap";
import { useState } from "react";
import Footer from "../components/Footer";

function ProductList() {
  const count = Object.keys(productMap).length;
  const [products, setProducts] = useState([]);

  const load = async () => {
    const response = await fetch("/api/product");
    const data = await response.json();
    setProducts(data);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.homeButton}>
          <Link href="/">Logout</Link>
        </button>
        <br />
        <br />
        <button onClick={load} className={styles.loadButton}>
          Load Products
        </button>
        <div className={styles.productGrid}>
          {products.map((product) => {
            return (
              <div key={product.id} className={styles.product}>
                <h2>
                  <img
                    src={product.pic}
                    alt=""
                    className={styles.productImage1}
                  />
                  {product.name}
                </h2>
                <Link href={`/product/${product.id}`}>
                  <button className={styles.detailsButton}>Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
  );
}

export default ProductList;

// export async function getStaticProps() {
//   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product`);
//   const data = await response.json();
//   console.log(data);
//   // setProducts(data);
//   return {
//     props:{
//       products: data,
//     },
//   }
// }

