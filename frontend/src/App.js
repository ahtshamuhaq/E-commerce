import React from "react";
import data from "./Data";
function App() {
  return (
    <div>
      <header>
        <a href="/">MR-Commerce</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((products) => (
            <div className="product" key={products.slug}>
              <a href={`/products/${products.slug}`}>
                <img src={products.image} alt={products.name} />
              </a>
              <div className="product-info">
                <a href={`/products/${products.slug}`}>
                  <p>{products.name}</p>
                </a>
                <p>
                  <strong>${products.price}</strong>
                </p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
