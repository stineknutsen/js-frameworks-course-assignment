import { Link } from "react-router-dom";
import styled from "styled-components";
import DiscountSticker from "../DiscountSticker";
import getDiscountPercentage from "../../utils/getDiscountPercentage";
import RatingStars from "../RatingStars";

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

export default function ProductCard({ product }) {
  const { id, title, image, price, discountedPrice, rating, reviews } = product;
  const discount = getDiscountPercentage(price, discountedPrice);
  return (
    <Card>
      <DiscountSticker discount={discount} />
      <ImageWrapper>
        <ProductImage src={image.url} alt={image.alt} />
      </ImageWrapper>
      <Info>
        <Title>{title}</Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RatingStars rating={rating} />
          <p>({reviews.length})</p>
        </div>
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
