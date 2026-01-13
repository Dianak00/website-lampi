import "./Product.scss";

function Product({ id, image, name, newPrice, oldPrice }) {
  return (
    <div className="product__box">
      <img className="product__img" src={image} alt={name} />
      <div className="product__description">
        <h3 className="product__title">{name}</h3>
        <p className="product__price">
          <span className="product__price-old">{oldPrice} ₽</span>
          <span className="product__price-new">{newPrice} ₽</span>
        </p>
      </div>
    </div>
  );
}

export default Product;
