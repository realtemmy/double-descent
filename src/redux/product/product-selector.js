import { createSelector } from "reselect";

const selectProduct = (state) => state.product;

export const selectProductCategories = createSelector(
  [selectProduct],
  (productSlice) => productSlice.products
);

export const selectCategoriesMap = createSelector(
  [selectProductCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
