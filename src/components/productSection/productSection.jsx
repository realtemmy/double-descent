import "./productSection.scss";

const ProductSection = ({ products }) => {
  const { section, product } = products;
  const { name, img } = product[0];
  return (
    <div className="product-section-container">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <h5 className="text-center">{section}</h5>
    </div>
  );
};

export default ProductSection;
