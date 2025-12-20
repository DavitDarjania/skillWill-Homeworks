import express from "express";
import cors from "cors";
import { Cart } from "./Cart.js";
import { dummyCartData } from "./dummy/dummydata.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// In-memory storage (temporary DB)
let cartItems = [];

/* ---------------- GET ALL ---------------- */
app.get("/cart", (req, res) => {
  res.json(cartItems);
});

/* ---------------- GET ONE ---------------- */
app.get("/cart/:id", (req, res) => {
  const item = cartItems.find((c) => c.id === req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
});

/* ---------------- POST ---------------- */
app.post("/cart", (req, res) => {
  const { item, inStock, url } = req.body;

  if (!item || typeof inStock !== "boolean" || !url) {
    return res.status(400).json({ message: "Invalid data" });
  }

  const newCartItem = new Cart(item, inStock, url);
  cartItems.push(newCartItem);

  res.status(201).json(newCartItem);
});

/* ---------------- UPDATE ---------------- */
app.put("/cart/:id", (req, res) => {
  const index = cartItems.findIndex((c) => c.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Not found" });
  }

  cartItems[index] = {
    ...cartItems[index],
    ...req.body,
  };

  res.json(cartItems[index]);
});

/* ---------------- DELETE ---------------- */
app.delete("/cart/:id", (req, res) => {
  cartItems = cartItems.filter((c) => c.id !== req.params.id);
  res.json({ message: "Deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
