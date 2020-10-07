import { getAllProducts } from "../../../services/products"

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";

export const getProducts = () => async (dispatch) => {
  let response = await getAllProducts();
  dispatch({ type: GET_ALL_PRODUCTS, payload: response.data.products});
}
