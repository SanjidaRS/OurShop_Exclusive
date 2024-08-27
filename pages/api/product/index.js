import { productMap } from "../../../lib/productMap";

export default function handler(req, res) {
  // Convert productMap object to an array of products
  const products = Object.keys(productMap).map(id => ({
    id,
    ...productMap[id]
  }));
  res.status(200).json(products);
}

