import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/getAllProducts.js";
import ProductCard from "../../components/ProductCard";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <div>
      <h1>All products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
