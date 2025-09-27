import { useParams } from "react-router-dom";
import styled from "styled-components";
import AddToCartIcon from "../../components/AddToCartIcon/index.jsx";
import useApi from "../../hooks/useApi";

const Display = styled.div`
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
export default function ProductPage() {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useApi(`https://v2.api.noroff.dev/online-shop/${id}`, null);

  console.log(product);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Failed to load product</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <Display>
      <div>
        <img src={product.image.url} alt={product.image.alt} />
      </div>

      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <AddToCartIcon product={product} />
      </div>
    </Display>
  );
}
