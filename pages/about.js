import Footer from "./components/Footer";
import styles from "../styles/Home.module.css";

function About() {
  return (
    <>
      <div
        style={{
          padding: "28px",
          fontFamily: "franklin",
          color: "#5a2d81",
          fontSize: "18.1px",
        }}
      >
        <h1>About Us</h1>
        <p>
          Welcome to OurShop, your number one source for all things fashion and
          lifestyle. We're dedicated to providing you the very best of products,
          with an emphasis on quality, customer service, and uniqueness.
        </p>
        <h2>Our Story</h2>
        <p>
          Founded in 2024, OurShop has come a long way from its beginnings. When
          we first started out, our passion for providing the best online
          shopping experience drove us to start our own business.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to offer high-quality products that bring joy and
          comfort to our customers. We aim to inspire confidence and
          satisfaction in every purchase you make with us.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Customer Satisfaction:</strong> We prioritize the needs and happiness of our
            customers.
          </li>
          <li>
            <strong>Quality:</strong> We ensure that every product we offer meets our high
            standards.
          </li>
          <li>
            <strong>Integrity:</strong> We are honest and transparent in all our business
            dealings.
          </li>
          <li>
            <strong>Innovation:</strong> We continuously seek to improve and enhance our product
            offerings.
          </li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          Have questions? Feel free to reach out to our customer service team
          via email at support@ourshop.com or call us at 123-456-7890. We're
          here to help!
        </p>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don't hesitate to
          contact us.
        </p>
        <p>Thank you for shopping with us!</p>
        {/* <Footer></Footer> */}
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Footer className={styles.footer} />
    </>
  );
}

export default About;
