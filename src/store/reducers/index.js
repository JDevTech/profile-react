import { combineReducers } from 'redux'
import { GET_ALL_PRODUCTS } from "../actions/products"
import { GET_ALL_IMAGES, SAVE_IMAGE, DELETE_IMAGE } from "../actions/gallery"

const initialGalerryState = {
  images: [],
  response: {},
  responseDelete: {}
}

const galleryReducer = (state = initialGalerryState, { type, payload }) => {
  switch (type) {
    case GET_ALL_IMAGES:
      return {...state, images: payload}
    case SAVE_IMAGE:
      return {...state, response: payload}
    case DELETE_IMAGE:
      return {...state, responseDelete: payload}
    default:
      return state;
  }
}

const initialProductState = {
  products: []
}

const productsReducer = (state = initialProductState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PRODUCTS:
      return {...state, products: payload}
    default:
      return state;
  }
}

const state_app = combineReducers({
  gallery: galleryReducer,
  products: productsReducer
});

export default state_app;
