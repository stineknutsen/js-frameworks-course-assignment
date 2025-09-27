import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const DiscountSticker = styled.div`
  background: maroon;
  font-weight: bold;
  width: 40px;
  height: 40px;
  font-size: 0.8rem;
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px; /* fixed height for all product images */
  overflow: hidden;
  border-radius: 6px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* crops but keeps proportions */
`;

const Info = styled.div`
  flex-grow: 1; /* pushes button down */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0;
`;

const OriginalPrice = styled.p`
  font-size: 0.9rem;
  text-decoration: line-through;
  margin: 0.25rem 0 0;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0.25rem 0 0;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 0.75rem;
  }
`;

function getDiscountPercentage(price, discountedPrice) {
  if (!discountedPrice || discountedPrice >= price) return 0;
  return Math.round(((price - discountedPrice) / price) * 100);
}

export default function ProductCard({ product }) {
  const { id, title, image, price, discountedPrice } = product;
  const discount = getDiscountPercentage(price, discountedPrice);
  return (
    <Card>
      {discount > 0 && <DiscountSticker>-{discount}%</DiscountSticker>}
      <ImageWrapper>
        <ProductImage src={image.url} alt={image.alt} />
      </ImageWrapper>
      <Info>
        <Title>{title}</Title>
        <Price></Price>
        <div>
          {price !== discountedPrice ? (
            <>
              <OriginalPrice>${price}</OriginalPrice>
              <Price>${discountedPrice}</Price>
            </>
          ) : (
            <Price>${price}</Price>
          )}
        </div>
      </Info>
      <Link to={`/product/${id}`}>
        <Button>View Product</Button>
      </Link>
    </Card>
  );
}
