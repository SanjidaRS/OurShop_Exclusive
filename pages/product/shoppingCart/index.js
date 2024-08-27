
import { useRouter } from "next/router"; // Import useRouter
import styles from "../../../styles/Home.module.css";
import { useCart } from "../../../lib/CartContext";
import Footer from "../../components/Footer";
import { useState } from "react";

function Cart() {
  const router = useRouter(); // Initialize router
  const { cart, removeFromCart, getCartTotal } = useCart();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mob, setMob] = useState("");
  const [pay, setPay] = useState("");

  const handleOrder = () => {
    event.preventDefault();
    console.log("Placing your order");
    router.push("../../thanku");
  };

  return (
    <>
      <div className={styles.cartColumn}>
        <div className={styles.cartContainer}>
          {/* Back to Previous Page Button */}
          <button onClick={() => router.back()} className={styles.backButton}>
            Back to Previous Page
          </button>
          <br></br>
          <br></br>
          <br></br>
          <h1>Shopping Cart</h1>
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <img
                    src={item.pic}
                    alt={item.name}
                    className={styles.cartImage}
                  />
                  <div className={styles.cartInfo}>
                    <h2>{item.name}</h2>
                    <h3>Price: ${item.price}</h3>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <h2>Total: ${getCartTotal()}</h2>
            </div>
          ) : (
            <p>Your cart is empty.</p>
          )}
           <br></br>
        <br></br>
        <br></br>
        </div>
        <div>
          
          <form onSubmit={handleOrder} className={styles.form}>
          <h3 className={styles.lastForm}>To confirm your order, please give the following information:</h3>
            <input
              className={styles.cartInput}
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className={styles.cartInput}
              placeholder="Address"
              value={address}
              type="text"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <input
              className={styles.cartInput}
              placeholder="Contact No."
              value={mob}
              type="number"
              onChange={(e) => setMob(e.target.value)}
            ></input>
            <select
              className={styles.cartInput}
              placeholder="Payment Method"
              name="Payment"
              id="Payment Method"
              value={pay}
              onChange={(e) => setPay(e.target.value)}
            >
              <option value="" disabled selected>
                Payment Method
              </option>
              <option value="Bkash">PayPal</option>
              <option value="Nagad">ApplePay</option>
              <option value="Visa Card">Visa Card</option>
              <option value="Cash on Delivery">MasterCard</option>
            </select>
            <button type="submit" className={styles.confirmButton}>
              Confirm Order
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cart;
