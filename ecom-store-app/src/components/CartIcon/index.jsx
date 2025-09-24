import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useCart } from "../../context/CartContext";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
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
  return (
    <div>
      <FaShoppingCart />
      <Overlay>{cart.length}</Overlay>
    </div>
  );
}
