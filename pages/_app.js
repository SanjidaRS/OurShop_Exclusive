// pages/_app.js
import { CartProvider } from "../lib/CartContext"; // Adjusted path
import "../styles/globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </CartProvider>
  );
}

export default MyApp;

