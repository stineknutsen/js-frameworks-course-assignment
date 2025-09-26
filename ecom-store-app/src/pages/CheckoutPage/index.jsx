import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout/success">Checkout</Link>
        </>
      )}
    </div>
  );
}
