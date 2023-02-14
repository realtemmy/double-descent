import { Link } from "react-router-dom";
import Card from "../card/card";

import './card-items.scss'

const CardItems = ({ products }) => {
  const { section, product } = products;
  return (
    <div className="cardItem-container">
      <Link className="nav-link">
        <div>{section}</div>
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr) )",
          gap: 20,
        }}
      >
        {product.map((el, id) => (
          <Card key={id} product={el} />
        ))}
      </div>
    </div>
  );
};

export default CardItems;
