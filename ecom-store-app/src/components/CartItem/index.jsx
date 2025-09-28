import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid #ddd;
  padding: 0.75rem 0;
  align-items: center;

  img {
    max-width: 100px;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
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
      <DetailsWrapper>
        <img src={product.image.url} alt={product.image.alt} />
        <div>
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
      </DetailsWrapper>

      <Controls>
        <button onClick={() => decreaseQuantity(product.id)}>-</button>
        <button onClick={() => addToCart(product)}>+</button>
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
      </Controls>
    </ItemWrapper>
  );
}
