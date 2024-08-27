// Import the productMap from the specified path
import { productMap } from "../../../../lib/productMap";

// Default export function to handle API requests
export default function handler(req, res) {
    // Retrieve the productId from query parameters
    const { productId } = req.query;

    // Ensure productMap is an array or convert it to an array if it's an object
    const productArray = Array.isArray(productMap) ? productMap : Object.values(productMap);

    // Find the product in the productMap using the productId
    const product = productArray.find((product) => product.id == parseInt(productId));

    // Check if the product was found
    if (product) {
        // Send a JSON response with the found product
        res.status(200).json(product);
    } else {
        // Send a 404 response if the product is not found
        res.status(404).json({ message: "Product not found" });
    }

    // Log the productId and the product details to the console for debugging
    console.log("Requested Product ID:", productId);
    console.log("Product Found:", product);
}

