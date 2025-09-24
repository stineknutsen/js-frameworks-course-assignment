import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/getProductById.js";
import styled from "styled-components";
import AddToCartIcon from "../../components/AddToCartIcon/index.jsx";

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
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  if (!product.id) {
    return <p>Loading...</p>;
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
