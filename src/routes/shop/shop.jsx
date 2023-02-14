import { Routes,Route } from "react-router-dom";
import ProductsPreview from "../../components/productsPreview/productsPreview";
import Category from "../../components/category/category";


const Shop = () => {
  return <div>
    <Routes>
        <Route index element={<ProductsPreview />} />
        <Route path=":category" element={<Category />} />
    </Routes>
  </div>;
};

export default Shop;
