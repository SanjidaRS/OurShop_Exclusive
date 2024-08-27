// Import necessary modules from Next.js and local files
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { productMap } from "../../../lib/productMap";
import { reviewMap } from "../../../lib/reviewMap";
import { useCart } from "../../../lib/CartContext";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the ProductDetail component
function ProductDetail() {
  // Use Next.js router to access query parameters
  const router = useRouter();
  const { productId } = router.query;

  // Use Cart context
  const { addToCart } = useCart();

  // Handle loading state when product details are not yet available
  if (!productId) {
    return <p>Loading product details...</p>;
  }
  // Fetch the product details using productId from productMap
  const product = productMap[productId];
  if (!product) {
    return <p>Product not found.</p>;
  }

  const { name, price, rating, pic } = product;

  // Fetch all reviews for the current productId
  const reviews = Array.from(reviewMap.values()).filter(
    (review) => review.productId === parseInt(productId)
  );

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart!", {
      position: "bottom-right", // Set the position of the toast
      autoClose: 1000, // Set duration (in milliseconds)
      hideProgressBar: true, 
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
      <div className={styles.productDetailContainer}>
        <button onClick={() => router.back()} className={styles.backButton}>
          Back to Previous Page
        </button>
        <img src={pic} alt={name} className={styles.productImage} />
        <div className={styles.productInfo}>
          <h1>{name}</h1>
          <h2>Price: ${price}</h2>
          <button className={styles.orderButton} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
        <br />
        <br />
        <div className={styles.reviewContainer}>
          <h2>Reviews for {name}</h2>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.reviewId} className={styles.review}>
                <h3>Reviewer: {review.reviewer}</h3>
                <h4>Rating: {review.rating} / 5</h4>
                <p>Comment: {review.comment}</p>
              </div>
            ))
          ) : (
            <p>No reviews available for this product.</p>
          )}
        </div>
        <Link href="/product/shoppingCart" className={styles.cartButton}>
          <i className="fas fa-shopping-cart"></i> See cart
        </Link>
      </div>
      {/* <ToastContainer /> */}
      <Footer></Footer>
    </>
  );
}
// Export the ProductDetail component as the default export
export default ProductDetail;
