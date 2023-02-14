import { PRODUCTS_CONSTANTS } from "./product-constants";

const initialProductState = {
  products: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCTS_CONSTANTS.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true };
    case PRODUCTS_CONSTANTS.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: payload, isLoading: false };
    case PRODUCTS_CONSTANTS.FETCH_PRODUCTS_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
