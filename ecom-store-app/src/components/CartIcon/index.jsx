import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const Overlay = styled.div`
  position: absolute;
  top: 4px;
  right: 2px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;
export default function CartIcon() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div>
      <FaShoppingCart />
      <Overlay>{total}</Overlay>
    </div>
  );
}
