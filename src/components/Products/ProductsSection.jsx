import ProductsList from "./ProductsList";
import Filter from "./Filter";
import jsonData from "../../data/data.json";
import "../../styles/main.scss";
import "./ProductsSection.scss";
import { useState } from "react";

function ProductsSection() {
  const [filters, setFilters] = useState([]);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts(jsonData);
  // }, []);
  // const products = jsonData;

  const filteredProducts = Array.isArray(filters) && filters.length
    ? jsonData.filter((product) =>
        product.type.some((type) => filters.includes(type))
      )
    : jsonData;

    const categoryCount = jsonData.reduce((acc, product) => {
      product.type.forEach(type => {
        acc[type] = (acc[type] || 0) + 1
      })
      return acc
    }, {})
  return (
    <div className="container">
      <section className="products__section">
        <h1 className="products__section-title">
          Corpuri de iluminat montate pe suprafață
        </h1>
        <div className="products__section-wrapper">
          <Filter filters={filters} setFilters={setFilters} categoryCount={categoryCount} />
          <ProductsList items={filteredProducts} />
        </div>
      </section>
    </div>
  );
}

export default ProductsSection;
