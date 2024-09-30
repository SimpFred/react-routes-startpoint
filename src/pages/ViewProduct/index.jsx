import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ViewProductPage({ products }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!products || !id) {
      return;
    }
    const foundProduct = products.find(
      (product) => Number(product.id) === Number(id)
    );
    setProduct(foundProduct);
  }, [id, products]);

  console.log({ product });

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <main>
      <h2>Product Page</h2>
      <h3>{product.name}</h3>
      <p>{`£${product.price}`}</p>
      <p>{product.type}</p>
      <p>{`Stock Level: ${product.inventory.quantity}`}</p>
      <p>{`Incoming delivery: ${
        product.inventory.incomingDelivery ? "Yes" : "No"
      }`}</p>
    </main>
  );
}

export default ViewProductPage;
