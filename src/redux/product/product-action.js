import data from '../../data.json'

import { PRODUCTS_CONSTANTS } from "./product-constants";
import { createAction } from "../reducer";

const fetchProductStart = () =>
  createAction(PRODUCTS_CONSTANTS.FETCH_PRODUCTS_START);

const fetchProductSuccess = (products) =>
  createAction(PRODUCTS_CONSTANTS.FETCH_PRODUCTS_SUCCESS, products);

const fetchProductFailed = (error) =>
  createAction(PRODUCTS_CONSTANTS.FETCH_PRODUCTS_FAILED, error);

export const fetchProductAsync = () => async (dispatch) => {
  fetchProductStart();
  try {
    // const data = await (await fetch("../../data.json")).json();
    // console.log(data);
    dispatch(fetchProductSuccess(data));
  } catch (error) {
    dispatch(fetchProductFailed(error));
  }
};