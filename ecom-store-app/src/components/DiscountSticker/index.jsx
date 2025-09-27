import styled from "styled-components";

const Sticker = styled.div`
  background: maroon;
  font-weight: bold;
  width: 40px;
  height: 40px;
  font-size: 0.8rem;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default function DiscountSticker({ discount }) {
  if (discount === 0) return null;
  return <Sticker>-{discount}%</Sticker>;
}
