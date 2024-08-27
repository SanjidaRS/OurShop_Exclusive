// pages/api/login.js
import { userMap } from "../../../lib/userMap";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, pass } = req.body;

    const user = userMap.find((user) => user.email === email && user.pass === pass);

    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
