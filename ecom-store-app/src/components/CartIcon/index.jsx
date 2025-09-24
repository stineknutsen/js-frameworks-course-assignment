import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

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
`;
function CartIcon() {
  return (
    <div>
      <FaShoppingCart />
      <Overlay />
      {/* Display the number of items in cart */}
    </div>
  );
}

export default CartIcon;
