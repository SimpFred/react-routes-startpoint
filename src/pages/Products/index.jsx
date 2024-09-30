import { Link } from "react-router-dom";

function ProductsPage({ products }) {
  return (
    <main>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{`£${product.price}`}</p>
            <Link to={`/products/${product.id}`}>View details</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ProductsPage;
