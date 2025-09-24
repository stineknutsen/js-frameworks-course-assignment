import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem";

export default function CartPage() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <CartItem key={i} product={item} />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
}
