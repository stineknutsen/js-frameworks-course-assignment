import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 10;
`;

const Item = styled.li`
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`;

export default function SearchBar({ products }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = query
    ? products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleClick = (id) => {
    setQuery("");
    navigate(`/product/${id}`);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {filtered.length > 0 && (
        <Dropdown>
          {filtered.map((product) => (
            <Item key={product.id} onClick={() => handleClick(product.id)}>
              {product.title}
            </Item>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
}
