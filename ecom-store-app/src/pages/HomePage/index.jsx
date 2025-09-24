import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts.js";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  console.log(products);
  return (
    <div>
      <h1>All products</h1>
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
}
