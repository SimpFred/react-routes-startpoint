import { appsData, productsData } from "./data.js";
import "./App.css";
import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProductsPage from "./pages/Products";
import Home from "./pages/Home";
import AppsPage from "./pages/Apps";
import ViewProductPage from "./pages/ViewProduct";
import ViewAppPage from "./pages/ViewApps";

function App() {
  const [products] = useState(productsData);
  const [apps] = useState(appsData);
  const navigate = useNavigate();

  console.log({ products, apps });

  return (
    <div className="App">
      <header>
        <h1>Apple Shop</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/apps">Apps</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductsPage products={products} />}
        />
        <Route path="/apps" element={<AppsPage apps={apps} />} />
        <Route
          path="/products/:id"
          element={<ViewProductPage products={products} />}
        />
        <Route path="/apps/:id" element={<ViewAppPage products={apps} />} />
      </Routes>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}

export default App;
