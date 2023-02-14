import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../redux/product/product-selector";

import ProductPreview from "../productPreview/productPreview";

const ProductsPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  // console.log(categoriesMap);
  return Object.keys(categoriesMap).map((title) => {
    const products = categoriesMap[title];
    return <ProductPreview key={title} products={products} title={title} />;
  });
};

export default ProductsPreview;
