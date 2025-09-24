import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0.75rem 0;

  img {
    max-width: 100px;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export default function CartItem({ product }) {
  const { addToCart, removeFromCart, decreaseQuantity } = useCart();

  return (
    <ItemWrapper>
      <img src={product.image.url} alt={product.image.alt} />
      <div>
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>

      <Controls>
        <button onClick={() => decreaseQuantity(product.id)}>-</button>
        <button onClick={() => addToCart(product)}>+</button>
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
      </Controls>
    </ItemWrapper>
  );
}
