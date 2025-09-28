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
    <FaCheck data-testid="check-icon" size={24} color="green" />
  ) : (
    <FaCartPlus
      data-testid="cart-icon"
      onClick={handleClick}
      size={24}
      style={{ cursor: "pointer" }}
    />
  );
}
