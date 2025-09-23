import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../api/getProductById.js";

export default function ProductPage() {
  console.log("Hello");

  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductById(id).then((data) => {
      console.log("API response: ", data);

      setProduct(data);
    });
  }, [id]);
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
