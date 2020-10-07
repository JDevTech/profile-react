import { uploadImage, getImages, deleteImage } from "../../../services/gallery";

export const SAVE_IMAGE = "SAVE_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";
export const GET_ALL_IMAGES = "GET_ALL_IMAGES";

export const saveImage = (image) => async(dispatch) => {
  const response = await uploadImage(image);
  dispatch({ type: SAVE_IMAGE, payload: response });
}

export const deleteImageById = (id) => async(dispatch) => {
  const response = await deleteImage(id);
  dispatch({ type: DELETE_IMAGE, payload: response });
}

export const getAllImages = () => async(dispatch) => {
  const response = await getImages();
  const images = await getDataImages(response.docs);
  dispatch({ type: GET_ALL_IMAGES, payload: images });
}

const getDataImages = async(docs) => {
  return Promise.all(docs.map(doc => { return { imgURL: doc.data().imgURL, id: doc.id }} ))
}
