import ProductCard from "../../components/ProductCard";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar/index.jsx";
import useApi from "../../hooks/useApi";

const Grid = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function HomePage() {
  const {
    data: products,
    loading,
    error,
  } = useApi("https://v2.api.noroff.dev/online-shop", []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Failed to load products</p>;
  }

  if (!products.length) {
    return <p>No products found</p>;
  }

  return (
    <div>
      <h1>All products</h1>
      <SearchBar products={products} />
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
}
