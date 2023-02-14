import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../redux/product/product-selector";
import CardItems from "../cardItems/card-items";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div>
      {products
        .filter((_, idx) => idx < 4)
        .map((product, id) => (
          <CardItems key={id} products={product} />
        ))}
    </div>
  );
};

export default Category;
