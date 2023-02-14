import { Link } from "react-router-dom";
import ProductSection from "../productSection/productSection";

import "./productPreview.scss";

const ProductPreview = ({ products, title }) => {
  return (
    <div className="product-preview-container">
      <Link to={`${title}`} className="nav-link">
        <h4>{title.toUpperCase()}</h4>
      </Link>

      <div className="content">
        {products.map((product, id) => (
          <ProductSection key={id} products={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductPreview;
