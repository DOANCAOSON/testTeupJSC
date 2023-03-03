import { useState } from "react";
import "./App.css";
import data from "./data";
import { GrFormNext } from "react-icons/gr";

function App() {
  const [products, setProducts] = useState(data);

  const allCategories = ["All", ...new Set(data.map((item) => item.category))];

  const filterProduct = (category) => {
    if (category === "All") {
      setProducts(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setProducts(newItems);
  };

  const handleClick = (item) => {
    filterProduct(item);
  };

  return (
    <div className="app">
      <div className="category">
        <ul className="category_list">
          {allCategories.map((item, index) => {
            return (
              <li
                onClick={() => handleClick(item)}
                key={index}
                className="category_list-item"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="products">
        {products.map((product, index) => {
          return (
            <div key={index} className="product">
              <div className="product-image">
                <img src={product.img} />
              </div>
              <a href="#" className="product-link">
                <div className="product-content">
                  <p>{product.title}</p>
                  <span>
                    <GrFormNext className="product-content-icon" />
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
