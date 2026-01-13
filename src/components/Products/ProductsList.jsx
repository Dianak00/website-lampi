import Product from "./Product";
import "./ProductsList.scss";

function ProductsList({ items }) {
  return (
    <div className="products">
      {items.map((item) => (
        <Product
          key={`${item.id}-${item.name}`}
          id={item.id}
          image={item.image}
          name={item.name}
          newPrice={item.price.new}
          oldPrice={item.price.old}
        />
      ))}
    </div>
  );
}

export default ProductsList;
