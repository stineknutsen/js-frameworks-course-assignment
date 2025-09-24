import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/getProductById.js";
import styled from "styled-components";

const Display = styled.div`
  padding: 1rem;
  img {
    max-width: 300px;
    height: auto;
    border-radius: 8px;
  }
`;
export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductById(id).then((data) => {
      console.log("API response: ", data);
      setProduct(data);
    });
  }, [id]);

  return (
    <Display>
      <img src={product.image.url} alt={product.image.alt} />

      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </Display>
  );
}
