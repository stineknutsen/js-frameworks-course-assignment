import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddToCartIcon from "../../components/AddToCartIcon/index.jsx";
import useApi from "../../hooks/useApi";
import DiscountSticker from "../../components/DiscountSticker/index.jsx";
import getDiscountPercentage from "../../utils/getDiscountPercentage";
import RatingStars from "../../components/RatingStars/index.jsx";

const Display = styled.div`
  position: relative;
  padding: 1rem;
  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 600px) {
    display: flex;
    gap: 2rem;
  }
`;
const OriginalPrice = styled.p`
  font-size: 0.9rem;
  text-decoration: line-through;
  margin-bottom: 0.25rem;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 0.25rem;
`;
export default function ProductPage() {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useApi(`https://v2.api.noroff.dev/online-shop/${id}`, null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Failed to load product</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  const {
    title,
    description,
    image,
    price,
    discountedPrice,
    reviews,
    rating,
    tags,
  } = product;
  const discount = getDiscountPercentage(price, discountedPrice);

  return (
    <Display>
      <DiscountSticker discount={discount} />
      <div>
        <img src={image.url} alt={image.alt} />
      </div>

      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <RatingStars rating={rating} /> <p>({reviews.length})</p>
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {tags.map((tag) => (
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "0.5rem",
                borderRadius: "4px",
              }}
              key={tag}
            >
              {tag}
            </div>
          ))}
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
        </div>{" "}
        <AddToCartIcon product={product} />
        <h3>Reviews</h3>
        {reviews.map((review) => (
          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
            }}
            key={review.id}
          >
            <h4>{review.username}</h4>
            <RatingStars rating={review.rating} />
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </Display>
  );
}
