import { useState } from "react";
import { FaCartPlus, FaCheck } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

export default function AddToCartIcon({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => setAdded(false), 1500);
  };

  return added ? (
    <FaCheck size={24} color="green" />
  ) : (
    <FaCartPlus onClick={handleClick} size={24} style={{ cursor: "pointer" }} />
  );
}
