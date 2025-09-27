import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Order Successful!</h2>
      <p>
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link to="/">Back to Store</Link>
    </div>
  );
}
