import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import { useState } from "react";
import { useUser } from "../lib/UserContext";
import { useCart } from "../lib/CartContext";

function Home() {
  const router = useRouter();

  const handlePlaceOrderClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  // const { defineUser } = useUser();
  const { cart } = useCart();
  console.log(cart);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !pass) {
      setError("Please enter both email and password");
      return;
    }

    // Reset the error message
    setError("");

    // Perform login logic here (e.g., authenticate user)
    console.log("Email:", email);
    console.log("Password:", pass);

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, pass }),
    });

    const data = await response.json();

    if (response.ok) {
      // Redirect to a different page after successful login
      // router.push("/dashboard");
      router.push("/product");
      console.log("Successful");
      console.log(data.user);
      // defineUser(data.user);
      
    } else {
      setError(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to OurShop</h1>
      <br></br>
      <br></br>
      <Link href="/about">
        <button className={styles.button}>About Us</button>
      </Link>
      <h2 className={styles.login}>Login</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        {/* */}
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.loginButton}>
          Login
        </button>
      </form>
      {/* <button className={styles.button} onClick={handlePlaceOrderClick}>
        Place Order
      </button> */}
      <br />

      <Footer></Footer>
    </div>
  );
}

export default Home;
