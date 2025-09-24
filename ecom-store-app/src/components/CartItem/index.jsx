import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0.75rem 0;
`;

export default function CartItem({ product }) {
  const { removeFromCart } = useCart();

  return (
    <ItemWrapper>
      <div>
        <h4>{product.name}</h4>
        <p>${product.price}</p>
      </div>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </ItemWrapper>
  );
}
